const { check, body } = require('express-validator')
const result = require('../../middlewares/validatorMeddliware')
const slugify = require("slugify");

exports.getTypeOfUnitValidator = [
    check('id').isMongoId().withMessage('Invalid TypeOfUnit Id'),
    result
]

exports.createTypeOfUnitValidator = [
    check('type')
        .notEmpty()
        .withMessage('type is required'),
    result
]

exports.updateTypeOfUnitValidator = [
    check('id').isMongoId().withMessage('Invalid TypeOfUnit Id'),
    result
]

exports.deleteTypeOfUnitValidator = [
    check('id').isMongoId().withMessage('Invalid TypeOfUnit Id'),
    result
]