const mongoose = require("mongoose")

const ProfileColor = new mongoose.Schema({
    image: {
        type: String,
        required: [true, 'image is required']
    },
    title: {
        type: String,
        required: [true, 'title is required']
    },
    profile: {
        type: mongoose.Schema.ObjectId,
        ref: 'Profile'
    }
}, { timeStamp: true })

ProfileColor.pre(/^find/, function (next) {
    this.populate({
        path: 'profile',
        select: 'brandname -_id',
    })
    next()
})

module.exports = mongoose.model("ProfileColor", ProfileColor)