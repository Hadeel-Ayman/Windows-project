const mongoose = require("mongoose");

const Invoice = new mongoose.Schema({
    items: [
        {
            type: Object,
        }
    ],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
},
    { timeStamp: true }
);

Invoice.pre(/^find/, function (next) {
    this.populate({ // راجعيها ---------------------------------------
        path: 'user',
        // select: 'type -_id',
    })
    next()
})

module.exports = mongoose.model("Invoice", Invoice);
