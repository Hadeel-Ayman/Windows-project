const { check, body } = require('express-validator')
const result = require('../../middlewares/validatorMeddliware')

exports.getLayoutValidator = [
    check('id').isMongoId().withMessage('Invalid Layout Id'),
    result
]

exports.createLayoutValidator = [
    check('image'),
    check('title')
        .isString()
        .withMessage('title must be a string'),
    check('openingSystem')
        .isMongoId()
        .withMessage('openingSystem must be a string'),
    check('profile')
        .isMongoId()
        .withMessage('profile must be a string'),
    result
]

exports.updateLayoutValidator = [
    check('id').isMongoId().withMessage('Invalid Layout Id'),
    result
]

exports.deleteLayoutValidator = [
    check('id').isMongoId().withMessage('Invalid Layout Id'),
    result
]
