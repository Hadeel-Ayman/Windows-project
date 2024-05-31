const expressAsyncHandler = require("express-async-handler");
const ApiError = require("../utils/ApiError");
const jwt = require('jsonwebtoken')
const User = require('../models/UserModel')

// protect handler 
exports.auth = expressAsyncHandler(async (req, res, next) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1]
    }
    if (!token) {
        return next(new ApiError('you are not login, please login ', 401))
    }

    // vierfiy token (no change happens,,expired token)
    const decode = jwt.verify(token, process.env.SKERET_KEY) // payload عبارة عن البيانات الي هي ال id
    console.log(decode)
    next()
});

// Admin authentication
exports.isAdminAuth = expressAsyncHandler(async (req, res, next) => {
    const authHeader = req.headers.authorization;
    console.log('Authorization Header:', authHeader);

    if (!authHeader || !authHeader.startsWith('Bearer')) {
        return next(new ApiError('You are not logged in, please log in', 401));
    }

    const token = authHeader.split(' ')[1];
    console.log('Extracted Token:', token);

    try {
        const decode = jwt.verify(token, process.env.SKERET_KEY);
        console.log('Decoded Token:', decode);
        console.log('Decoded User ID:', decode.id); // التحقق من معرف المستخدم المستخرج

        req.user = await User.findById(decode.id);
        console.log('User Found:', req.user);

        if (!req.user) {
            return next(new ApiError('User not found, please log in', 401));
        }

        if (req.user.role !== 'Admin') {
            return next(new ApiError('Not authorized for this resource!', 403));
        }

        next();
    } catch (err) {
        console.error('Token verification error:', err);
        return next(new ApiError('Invalid or expired token', 401));
    }
});

// isSuperAdminAuthenticated authentication

exports.isSuperAdminAuthenticated = expressAsyncHandler(async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return next(new ApiError("المستخدم غير مصدق عليه!", 400));
    }

    const token = authHeader.split(' ')[1];

    try {
        // فك شفرة التوكن والتحقق منه
        const decoded = jwt.verify(token, process.env.SKERET_KEY);

        // استرجاع المستخدم من قاعدة البيانات باستخدام المعرف المستخرج من التوكن
        req.user = await User.findById(decoded.id);

        if (!req.user) {
            return next(new ApiError("المستخدم غير موجود!", 404));
        }

        // التحقق من دور المستخدم
        if (req.user.role !== "SuperAdmin") {
            return next(new ApiError("غير مخول للوصول إلى هذا المورد!", 403));
        }

        // تسجيل حالة المستخدم كمسؤول رئيسي
        console.log(`المستخدم ${req.user.username} مصدق عليه كمسؤول رئيسي`);

        // متابعة العملية
        next();
    } catch (error) {
        // التعامل مع الأخطاء المختلفة
        if (error.name === 'JsonWebTokenError') {
            return next(new ApiError("توكن غير صالح!", 401));
        } else if (error.name === 'TokenExpiredError') {
            return next(new ApiError("توكن منتهي الصلاحية!", 401));
        } else {
            return next(new ApiError("حدث خطأ أثناء المصادقة!", 500));
        }
    }
});