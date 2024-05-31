const mongoose = require("mongoose")

const TypeOfUnit = new mongoose.Schema({
    type: {
        type: String,
        required: [true, 'type is required']
    },
    profile: {
        type: mongoose.Schema.ObjectId,
        ref: 'Profile'
    }
}, { timeStamp: true })


TypeOfUnit.pre(/^find/, function (next) {
    this.populate({
        path: 'profile',
        select: 'brandname -_id',
    })
    next()
})

module.exports = mongoose.model("TypeOfUnit", TypeOfUnit)