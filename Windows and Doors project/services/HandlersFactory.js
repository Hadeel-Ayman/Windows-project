const asyncHandler = require("express-async-handler");
const ApiError = require("../utils/ApiError");
const ApiFeatures = require("../utils/ApiFeatures");
const { ref, uploadBytes, deleteObject } = require("firebase/storage");
const { storage } = require('../middlewares/firebase');

exports.deleteOne = (Model) => asyncHandler(async (req, res, next) => {
    const { id } = req.params;

    // البحث عن الوثيقة للحصول على مسار الملف
    const document = await Model.findById(id);
    if (!document) {
        return next(new ApiError(`Document not found with this ID ${id}`, 404));
    }

    // حذف الوثيقة من قاعدة البيانات
    await Model.findByIdAndDelete(id);

    // حذف الملف من التخزين إذا كان موجودًا
    if (document.image) {
        const storageRef = ref(storage, document.image);
        await deleteObject(storageRef).catch((error) => {
            console.error("Failed to delete file:", error);
        });
    }

    res.status(200).send('The document was deleted and associated file was removed');
})

exports.updateOne = (Model) => asyncHandler(async (req, res, next) => {
    try {
        // التحقق من وجود ملف صورة في الطلب
        const file = req.file;
        const updateData = { ...req.body }; // نسخ البيانات المرسلة في الطلب

        // إذا كان هناك ملف صورة، قم بتحديث حقل الصورة
        if (file) {
            const storageRef = ref(storage, `uploads/${file.originalname}`);
            await uploadBytes(storageRef, file.buffer);
            updateData.image = `uploads/${file.originalname}`;
        }

        const updateDoc = await Model.findByIdAndUpdate(
            req.params.id,
            updateData,
            { new: true } // إرجاع الوثيقة بعد التحديث
        );

        if (!updateDoc) {
            return next(new ApiError(`Document not found with this ID ${req.params.id}`, 404));
        }

        res.status(200).json(updateDoc);
    } catch (error) {
        console.error('Error processing request:', error);
        res.status(500).send('Error processing request.');
    }
})

exports.createOne = (Model) => asyncHandler(async (req, res, next) => {
    try {
        let imagePath = null;
        const file = req.file;
        if (file) {
            // رفع الملف إلى Firebase Storage
            const storageRef = ref(storage, `uploads/${file.originalname}`);
            await uploadBytes(storageRef, file.buffer);
            imagePath = `uploads/${file.originalname}`;
        }

        // إنشاء وثيقة جديدة في قاعدة البيانات باستخدام بيانات الطلب
        const docData = { ...req.body };
        if (imagePath) {
            docData.image = imagePath; // إضافة رابط الملف إلى البيانات إذا كان موجودًا
        }

        const Doc = await Model.create(docData);

        res.status(200).json(Doc);
    } catch (error) {
        console.error('Error processing request:', error);
        res.status(500).send('Error processing request.');
    }
});

exports.getOne = (Model) => asyncHandler(async (req, res, next) => {
    const { id } = req.params
    const oneDoc = await Model.findById(id)
    if (!oneDoc) {
        return next(new ApiError(`Doc not found of this id ${id}`, 404))
    }
    res.status(200).send(oneDoc)
})

exports.GetAll = (Model) => asyncHandler(async (req, res) => {
    const apiFeatures = new ApiFeatures(Model.find(), req.query)
        .Searching()
        .limiting()
        .paginate()
        .filter()
        .sort()

    const result = await apiFeatures.mongooseQuery
    res.status(200).send({ results: result.length, data: result });
});
