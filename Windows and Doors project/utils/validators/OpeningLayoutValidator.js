const { check } = require('express-validator')
const result = require('../../middlewares/validatorMeddliware')

exports.getOpeningLayoutValidator = [
    check('id').isMongoId().withMessage('Invalid OpeningLayout Id'),
    result
]

exports.createOpeningLayoutValidator = [
    check('image'),
    check('title')
        .isString()
        .withMessage('title must be a string'),
    check('openingSystem')
        .isMongoId()
        .withMessage('Invalid openingSystem Id'),
    check('profile')
        .isMongoId()
        .withMessage('Invalid profile Id'),
    result
]

exports.updateOpeningLayoutValidator = [
    check('id').isMongoId().withMessage('Invalid OpeningLayout Id'),
    result
]

exports.deleteOpeningLayoutValidator = [
    check('id').isMongoId().withMessage('Invalid OpeningLayout Id'),
    result
]
