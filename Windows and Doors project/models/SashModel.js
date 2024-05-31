const mongoose = require("mongoose")

const Sash = new mongoose.Schema({
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
    image: {
        type: String,
        required: [true, 'image is required']
    },
    from: {
        type: Number,
        required: [true, 'from is required']
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
    // Welding_Allowance: {
    //     type: Number,
    //     required: [true, "Welding_Allowance is required"],
    // },
    profile: {
        type: mongoose.Schema.ObjectId,
        ref: 'Profile'
    },
    typeofunit: {
        type: mongoose.Schema.ObjectId,
        ref: 'TypeOfUnit'
    }

}, { timeStamp: true })

Sash.pre(/^find/, function (next) { // قبل ما تنفذ ال find نفذلي ال populate 
    this.populate({
        path: 'profile',
        select: 'brandname -_id',
    }).populate({
        path: 'typeofunit',
        select: 'type -_id'
    })
    next()
})



module.exports = mongoose.model("Sash", Sash)
