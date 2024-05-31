const mongoose = require("mongoose")

const Reinforcementsteel = new mongoose.Schema({
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
    thickness: {
        type: Number,
        required: [true, 'Thickness is required']
    },
    weightPermeter: {
        type: Number,
        required: [true, 'Weight is required']
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
    // Reinforcement checkbox type belongs to the frame and sash and mullion and other 

}, { timeStamp: true })

Reinforcementsteel.pre(/^find/, function (next) {
    this.populate({ // راجعيها ---------------------------------------
        path: 'Length_of_Beam',
        select: 'Length_of_Beam -_id',
    }).populate({
        path: 'profile',
        select: 'brandname -_id',
    })
    next()
})
module.exports = mongoose.model("Reinforcementsteel", Reinforcementsteel)
