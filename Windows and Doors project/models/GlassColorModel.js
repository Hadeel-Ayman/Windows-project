const mongoose = require("mongoose")

const GlassColor = new mongoose.Schema({
    image: {
        type: String,
        required: [true, 'image is required']
    },
    title: {
        type: String,
        required: [true, 'title is required']
    },
    plus: {
        type: Number,
        required: [true, 'plus is required']
    },
    glass: {
        type: mongoose.Schema.ObjectId,
        ref: 'Glass'
    }
}, { timeStamp: true })


GlassColor.pre(/^find/, function (next) {
    this.populate({
        path: 'glass',
        select: '-_id',
    })
    next()
})
module.exports = mongoose.model("GlassColor", GlassColor)