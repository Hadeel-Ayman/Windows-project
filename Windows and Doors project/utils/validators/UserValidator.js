const { check, body } = require('express-validator')
const result = require('../../middlewares/validatorMeddliware')
const slugify = require("slugify");
const UserModel = require('../../models/UserModel');

exports.getUserValidator = [
    check('id').isMongoId().withMessage('Invalid User Id'),
    result
]

exports.createUserValidator = [
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

exports.updateUserValidator = [
    check('id').isMongoId().withMessage('Invalid User Id'),
    body('first_name').custom((val, { req }) => {
        req.body.slug = slugify(val)
        return true
    }),

    // check('email')
    //     .notEmpty()
    //     .withMessage('email is required')
    //     .isEmail()
    //     .withMessage('invalid email address')
    //     .custom((val) => (
    //         UserModel.findOne({ email: val }).then((user) => {
    //             if (user) {
    //                 return Promise.reject(new Error('Email is Alraedy exist'))
    //             }
    //         })
    //     )),
    // check('telephone')
    //     .optional()
    //     .isMobilePhone(["ar-PS", "ar-AE"]),

    result
]

// exports.ChangePasswordValidator = [
//     body('currentPassword')
//         .notEmpty()
//         .withMessage('you must enter the currentPassword'),
//     body('password')
//         .notEmpty()
//         .withMessage('you must enter the Password'),
//     body('PasswordConfirm')
//         .notEmpty()
//         .withMessage('you must enter the PasswordConfirm'),
//     result
// ]

exports.deleteUserValidator = [
    check('id').isMongoId().withMessage('Invalid User Id'),
    result
]