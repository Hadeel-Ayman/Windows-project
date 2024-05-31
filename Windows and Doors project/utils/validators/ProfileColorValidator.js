const { check } = require('express-validator')
const result = require('../../middlewares/validatorMeddliware')
const Profile = require('../../models/ProfileModel')


exports.getProfileColorValidator = [
    check('id').isMongoId().withMessage('Invalid Profile Id'),
    result
]

exports.createProfileColorValidator = [
    check('image')
        .notEmpty()
        .withMessage('image is required'),
    check('title')
        .notEmpty()
        .withMessage('title is required'),
    check('profile')
        .isMongoId()
        .withMessage('Invalid ID format'),
    result
]

exports.updateProfileColorValidator = [
    check('id').isMongoId().withMessage('Invalid Profile Id'),
    result
]

exports.deleteProfileColorValidator = [
    check('id').isMongoId().withMessage('Invalid Profile Id'),
    result
]