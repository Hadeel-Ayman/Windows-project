const mongoose = require("mongoose")

const Material = new mongoose.Schema({
    type: {
        type: String,
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

module.exports = mongoose.model("Material", Material)