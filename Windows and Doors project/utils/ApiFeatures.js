class ApiFeatures {
    constructor(mongooseQuery, queryString) {
        this.mongooseQuery = mongooseQuery;
        this.queryString = queryString;
    }

    Searching() { // مش زابطة
        if (this.queryString.keyword) {
            const query = {}
            query.$or = [
                { title: { $regex: this.queryString.keyword, $options: 'i' } }, // تستخدم كلمة (regex) للبحث عن قيمة (keyword) في ال title
                { description: { $regex: this.queryString.keyword, $options: 'i' } } // معنى كلمة ريجيكس انو ابحثلي عن شئ معين
            ]

            this.mongooseQuery = this.mongooseQuery.find(query)
        }
        return this
    }

    filter() {/// هاي تمام 
        const QueryObj = { ...this.queryString } // عبارة عن نسخة من req.query بدون ما نأثر على الاشي الاصلي
        const excludes = ['limit', 'page', 'sort', 'fileds']
        excludes.map((item) => delete QueryObj[item])

        // Apply filtration using ['gte','gt','lte','lt]
        let querystr = JSON.stringify(QueryObj)
        querystr = querystr.replace(/\b(gte|gt|lt|lte)\b/g, (match) => `$${match}`)
        this.mongooseQuery = this.mongooseQuery.find(JSON.parse(querystr))
        return this
    }

    sort() { //// هاي تمام
        if (this.queryString.sort) { // يتم ترتيبهم تتصاعدي
            const querys = this.queryString.sort.split(',').join(' ')
            this.mongooseQuery = this.mongooseQuery.sort(querys)
            // عند اضافة minus (-) اشارة الناقص يجعل الترتيب تنازلي
            // -price,sold اعلى سعر واقل مبيع
        } else {
            this.mongooseQuery = this.mongooseQuery.sort('-createdAt')
        }
        return this
    }

    limiting() { //// هاي تمام 
        if (this.queryString.fileds) { // يتم ترتيبهم تتصاعدي
            const filedss = this.queryString.fileds.split(',').join(' ')
            this.mongooseQuery = this.mongooseQuery.select(filedss)

            // عند اضافة minus (-) اشارة الناقص يجعل الترتيب تنازلي
            // -price,sold اعلى سعر واقل مبيع
        } else {
            this.mongooseQuery = this.mongooseQuery.select('-__v')
        }
        return this
    }

    paginate() { /// السكيب مش شغالة 
        const page = this.queryString.page * 1 || 1;
        const limit = this.queryString.limit * 1 || 100;
        const skip = (page - 1) * limit;

        this.mongooseQuery = this.mongooseQuery
            .skip(skip) // pagination
            .limit(limit)
        return this
    }
}

module.exports = ApiFeatures