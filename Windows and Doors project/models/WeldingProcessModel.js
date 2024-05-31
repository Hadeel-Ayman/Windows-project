const mongoose = require("mongoose");

const WeldingProcess = new mongoose.Schema({
    Welding_Allowance: {
        type: Number,
        default: 6,
    },
    Welding_time: {
        type: Number,
        default: '3m', // 3دقيقة 
    },
    profile: {
        type: mongoose.Schema.ObjectId,
        ref: 'Profile'
    }
},
    { timeStamp: true }
);

WeldingProcess.pre(/^find/, function (next) {
    this.populate({
        path: 'profile',
        select: '-_id -__v',
    })
    next()
})


module.exports = mongoose.model("WeldingProcess", WeldingProcess);
