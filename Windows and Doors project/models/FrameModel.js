const mongoose = require("mongoose");

const Frame = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name is required"],
    },
    slug: {
        type: String,
        lowercase: true,
    },
    image: {
        type: String,
        required: [true, 'image is required']
    },
    from: {
        type: Number,
        required: [true, 'from is required']
    },
    code: {
        type: String,
        required: [true, "code is required"],
    },
    Length_of_Beam: {
        type: Number,
        required: [true, "Length_of_Beam is required"],
    },
    Renovation: {
        type: Boolean,
        required: [true, "Renovation is required"],
    },
    Renovation_height: {
        type: Number,
    },
    Frame_Height: {
        type: Number,
        required: [true, "Frame_Height is required"],
    },
    Frame_Width: {
        type: Number,
        required: [true, "Frame_Width is required"],
    },
    weightPermeter: {
        type: Number,
        required: [true, "Weight is required"],
    },
    colours: {
        type: Array,
        required: [true, "Colours is required"],
    },
    pricePermeter: {
        type: Number,
        required: [true, "price is required"],
    },
    pricePerbeam: { // Length_of_Beam * pricePermeter // تحسب حساب 
        type: Number,
    },
    // Welding_Allowance: {
    //     type: Number,
    //     required: [true, "Welding_Allowance is required"],
    // },
    profile: {
        type: mongoose.Schema.ObjectId,
        ref: 'Profile',
        required: [true, "profile is required"],
    }
},
    { timeStamp: true }
);


Frame.pre(/^find/, function (next) { // بدي ارجعلها 
    this.populate({
        path: 'profile',
        select: 'brandname -_id',
    })
    next()
})

module.exports = mongoose.model("Frame", Frame);
