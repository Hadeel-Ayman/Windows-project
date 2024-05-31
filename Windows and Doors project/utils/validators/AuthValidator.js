const { check } = require('express-validator')
const result = require('../../middlewares/validatorMeddliware')
const slugify = require("slugify");
const UserModel = require('../../models/UserModel');


exports.loginValidator = [
    check('email')
        .notEmpty()
        .withMessage('email is required')
        .isEmail()
        .withMessage('invalid email address'),

    check('password')
        .notEmpty()
        .withMessage('password is required')
        .isLength({ min: 2 })
        .withMessage('password Too short'),
    result
]


exports.SignupValidator = [
    check('first_name')
        .notEmpty()
        .withMessage('first_name is required')
        .isLength({ min: 3 })
        .withMessage('Too Short')
        .custom((val, { req }) => {
            req.body.slug = slugify(val)
            return true
        }),
    check('last_name')
        .notEmpty()
        .withMessage('last_name is required')
        .isLength({ min: 3 })
        .withMessage('Too Short'),
    check('company_name')
        .notEmpty()
        .withMessage('last_name is required')
        .isLength({ min: 3 })
        .withMessage('Too Short'),
    check('email')
        .notEmpty()
        .withMessage('email is required')
        .isEmail()
        .withMessage('invalid email address')
        .custom((val) => (
            UserModel.findOne({ email: val }).then((user) => {
                if (user) {
                    return Promise.reject(new Error('Email is Alraedy exist'))
                }
            })
        )),
    check('password')
        .notEmpty()
        .withMessage('password is required')
        .isLength({ min: 2 })
        .withMessage('password Too short'),
    check('role')
        .optional(),
    check('telephone')
        .notEmpty()
        .withMessage('telephone is required'),
    // .isMobilePhone(["ar-EG", "ar-SA"]), // مصر والسعودية
    check('country')
        .notEmpty()
        .withMessage('country is required'),
    check('state')
        .notEmpty()
        .withMessage('state is required'),
    check('city')
        .notEmpty()
        .withMessage('city is required'),
    check('area')
        .notEmpty()
        .withMessage('area is required'),
    check('street')
        .notEmpty()
        .withMessage('street is required'),
    result
]

exports.loginAdminValidator = [
    check('email')
        .notEmpty()
        .withMessage('email is required')
        .isEmail()
        .withMessage('invalid email address'),

    check('password')
        .notEmpty()
        .withMessage('password is required')
        .isLength({ min: 2 })
        .withMessage('password Too short'),

    check('role')
        .default('user'),
    result
]
