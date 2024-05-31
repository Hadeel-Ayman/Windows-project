const mongoose = require("mongoose")

const Mullion = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name is required']
    },
    code: {
        type: String,
        required: [true, 'code is required']
    },
    Length_of_Beam: {
        type: mongoose.Schema.ObjectId,
        ref: 'Frame'
    },
    Width: {
        type: Number,
        required: [true, 'Width is required']
    },
    weightPermeter: {
        type: Number,
        required: [true, 'weight is required']
    },
    colours: {
        type: mongoose.Schema.ObjectId,
        ref: 'Frame'
    },
    pricePermeter: {
        type: Number,
        required: [true, 'price is required']
    },
    price_beam: {
        type: Number, // حساب 
        // required: [true, 'price_beam is required']
    },
    profile: {
        type: mongoose.Schema.ObjectId,
        ref: 'Profile'
    }

}, { timeStamp: true })

Mullion.pre(/^find/, function (next) {
    this.populate({ // راجعيها ---------------------------------------
        path: 'profile',
        select: 'brandname -_id',
    }).populate({
        path: 'colours',
        select: 'colours -_id'
    }).populate({
        path: 'Length_of_Beam',
        select: 'Length_of_Beam -_id'
    })
    next()
})

module.exports = mongoose.model("Mullion", Mullion)
