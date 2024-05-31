const mongoose = require("mongoose")

const Profile = new mongoose.Schema({
    brandname: {
        type: String,
        required: [true, 'brandname is required']
    },
    company: {
        type: mongoose.Schema.ObjectId,
        ref: 'Company',
        required: [true, 'company is required']
    },
    system: {
        type: mongoose.Schema.ObjectId,
        ref: 'OpeningSystem',
        required: [true, 'system is required']
    },
    material: {
        type: mongoose.Schema.ObjectId,
        ref: 'Material',
        required: [true, 'material is required']
    },
}, { timeStamp: true })

Profile.pre(/^find/, function (next) {
    this.populate({
        path: 'company',
        select: '-_id -__v',
    }).populate({
        path: 'system',
        select: '-_id -__v'
    }).populate({
        path: 'material',
        select: '-_id -__v'
    });
    next()
})

module.exports = mongoose.model("Profile", Profile)