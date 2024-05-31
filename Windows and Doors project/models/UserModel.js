const mongoose = require("mongoose")
const bcrypt = require('bcryptjs')

const UserSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: [true, 'first_name is required'],
        trim: true,
    },
    last_name: {
        type: String,
        required: [true, 'Last_name is required'],
        trim: true,
    },
    company_name: {
        type: String,
        trim: true,
    },
    slug: {
        type: String,
        lowercase: true
    },
    email: {
        type: String,
        required: [true, 'email is required'],
        trim: true,
        unique: [true, 'email must be unique']
    },
    password: {
        type: String,
        trim: true,
        required: [true, 'password is required'],
    },
    telephone: {
        type: Number,
        required: [true, 'telephone is required'],
        trim: true,
    },
    country: {
        type: String,
        required: [true, 'country is required'],
        trim: true,
    },
    state: {
        type: String,
        required: [true, 'state is required'],
        trim: true,
    },
    city: {
        type: String,
        required: [true, 'city is required'],
        trim: true,
    },
    area: {
        type: String,
        required: [true, 'area is required'],
        trim: true,
    },
    street: {
        type: String,
        required: [true, 'street is required'],
        trim: true,
    },
    role: {
        type: String,
        enum: ['user', 'Admin', 'SuperAdmin'],
        default: 'user'
    },
}, { timestamps: true })

UserSchema.pre('save', async function (next) {
    this.password = await bcrypt.hash(this.password, 8)
    next()
})

const UserModel = mongoose.model('User', UserSchema)
module.exports = UserModel
