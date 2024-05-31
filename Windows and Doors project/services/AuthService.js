const asyncHandler = require("express-async-handler");
const User = require('../models/UserModel')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const ApiError = require('../utils/ApiError');

// انشاء توكن   

const createJWT = (user, message, statusCode, res) => {
    const token = jwt.sign({ id: user._id }, process.env.SKERET_KEY, {
        expiresIn: process.env.EXPIR_JWT_TIME,
    });
    res
        .status(statusCode)
        .header('Authorization', `Bearer ${token}`)
        .json({
            success: true,
            message,
            user,
            token,
        });
};

// @desc   create new user
// @route  Post api/v1/Auth
// @access Public

exports.Regestier = asyncHandler(async (req, res) => {
    let user = await User.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
        company_name: req.body.company_name,
        telephone: req.body.telephone,
        role: req.body.role,
        country: req.body.country,
        state: req.body.state,
        city: req.body.city,
        area: req.body.area,
        street: req.body.street,
    })

    // generate token
    const token = createJWT(user._id)
    res.status(200).send({ user, token })
})

// @desc   login user
// @route  Post api/v1/Auth
// @access Public

exports.login = asyncHandler(async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return next(new ApiError('Invalid email or password', 401));
        }
        res.json("succefully login");
    } catch (err) {
        next(err);
    }
});


// @desc   login admin
// @route  Post api/v1/Auth
// @access Public

exports.loginAdmin = asyncHandler(async (req, res, next) => {
    const { email, password, role } = req.body;
    if (!email || !password || !role) {
        return next(new ApiError("Please Fill Full Form!", 400));
    }
    const user = await User.findOne({ email });
    if (!user) {
        return next(new ApiError("Invalid email Or Password!1", 400));
    }
    if (password !== user.password) {
        return next(new ApiError("Invalid email Or Password!2", 400));
    }
    if (role !== user.role) {
        return next(new ApiError(`User Not Found With This Role!`, 400));
    }
    createJWT(user, "Login Successfully!", 201, res);

    // res.json("Login Successfully!");
});



exports.logout = asyncHandler(async (req, res, next) => {
    // قراءة التوكن من الـ headers
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
        return next(new ApiError("No valid token found!", 400));
    }

    // التحقق من نوع التوكن
    try {
        decoded = jwt.verify(token, process.env.SECRET_KEY);
    } catch (error) {
        return next(new ApiError("Invalid or expired token!", 401));
    }
    res.status(200).json({
        success: true,
        message: "Logged out successfully",
    });
});