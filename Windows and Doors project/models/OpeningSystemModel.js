const mongoose = require("mongoose")

const OpeningSystem = new mongoose.Schema({
    type: {
        type: Array, // multi choice type 
        required: [true, 'type is required']
    },
    image: {
        type: String,
        required: [true, 'image is required']
    },
    from: {
        type: Number,
        required: [true, 'from is required']
    },
}, { timeStamp: true })

module.exports = mongoose.model("OpeningSystem", OpeningSystem)
