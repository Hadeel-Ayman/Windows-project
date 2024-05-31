const mongoose = require("mongoose")

const OpeningLayout = new mongoose.Schema({
    image: {
        type: String,
        required: [true, 'image is required']
    },
    title: {
        type: String,
        required: [true, 'title is required']
    },
    openingSystem: {
        type: mongoose.Schema.ObjectId,
        ref: 'OpeningSystem'
    },
    profile: {
        type: mongoose.Schema.ObjectId,
        ref: 'Profile'
    }
}, { timeStamp: true })

OpeningLayout.pre(/^find/, function (next) {
    this.populate({ // راجعيها ---------------------------------------
        path: 'openingSystem',
        select: 'type -_id',
    }).populate({
        path: 'profile',
        select: 'brandname -_id',
    })
    next()
})

module.exports = mongoose.model("OpeningLayout", OpeningLayout)