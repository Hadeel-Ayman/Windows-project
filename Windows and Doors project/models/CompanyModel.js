const mongoose = require("mongoose")

const Company = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name is required']
    },
    image: {
        type: String,
        required: [true, 'image is required']
    },
    slug: {
        type: String,
        lowercase: true,
    },
    size: {
        type: String,
    },
    material: {
        type: mongoose.Schema.ObjectId,
        ref: 'Material'
    },
    profile: {
        type: mongoose.Schema.ObjectId,
        ref: 'Profile'
    }
}, { timeStamp: true })

Company.pre(/^find/, function (next) {
    this.populate({ // راجعيها ---------------------------------------
        path: 'material',
        select: '-_id',
    }).populate({
        path: 'profile',
        select: '-_id',
    })
    next()
})


module.exports = mongoose.model("Company", Company)