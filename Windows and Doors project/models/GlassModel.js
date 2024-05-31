const mongoose = require("mongoose")

const Glass = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name is required']
    },
    code: {
        type: String,
        required: [true, 'code is required']
    },
    glass_density: {
        type: Number,
        required: [true, 'glass_density is required']
    },
    thickness: {
        type: Number,
        required: [true, 'thickness is required']
    },
    specification: {
        type: String,
        required: [true, 'specification is required']
    },
    pricePermeterSqure: {
        type: Number,
        required: [true, 'price is required']
    },
    weightPermeterSqure: {
        type: String,
        required: [true, 'weight is required']
    },
    // profile: {
    //     type: mongoose.Schema.ObjectId,
    //     ref: 'Profile'
    // }
}, { timeStamp: true })

module.exports = mongoose.model("Glass", Glass)