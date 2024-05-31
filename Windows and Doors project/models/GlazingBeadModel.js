const mongoose = require("mongoose")

const GlazingBead = new mongoose.Schema({
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
    height: {
        type: Number,
        required: [true, 'height is required']
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
    },
    profile: {
        type: mongoose.Schema.ObjectId,
        ref: 'Profile'
    }

}, { timeStamp: true })

GlazingBead.pre(/^find/, function (next) {
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

module.exports = mongoose.model("GlazingBead", GlazingBead)
