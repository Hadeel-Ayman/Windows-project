const mongoose = require("mongoose")

const Size = new mongoose.Schema({
    width: {
        type: Number,
        required: [true, 'width is required']
    },
    height: {
        type: Number,
        required: [true, 'height is required']
    }
}, { timeStamp: true })

module.exports = mongoose.model("Size", Size)