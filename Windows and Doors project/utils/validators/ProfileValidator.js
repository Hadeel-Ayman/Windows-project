const { check } = require('express-validator')
const result = require('../../middlewares/validatorMeddliware')
const Profile = require('../../models/ProfileModel')


exports.getProfileValidator = [
    check('id').isMongoId().withMessage('Invalid Profile Id'),
    result
]

exports.createProfileValidator = [
    check('brandname')
        .isString()
        .notEmpty()
        .withMessage('brandname is required')
        .custom(async (value) => {
            const profile = await Profile.findOne({ brandname: value });
            if (profile) {
                throw new Error('brandname already in use');
            }
            return true;
        }),
    check('company')
        .notEmpty()
        .withMessage('company is required')
        .isMongoId()
        .withMessage('Invalid ID format'),
    check('system')
        .notEmpty()
        .withMessage('system is required')
        .isMongoId()
        .withMessage('Invalid ID format'),
    check('material')
        .notEmpty()
        .withMessage('material is required')
        .isMongoId()
        .withMessage('Invalid ID format')
    ,
    result
]

exports.updateProfileValidator = [
    check('id').isMongoId().withMessage('Invalid Profile Id'),
    result
]

exports.deleteProfileValidator = [
    check('id').isMongoId().withMessage('Invalid Profile Id'),
    result
]