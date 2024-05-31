const { check } = require('express-validator')
const result = require('../../middlewares/validatorMeddliware')


exports.getSizeValidator = [
    check('id').isMongoId().withMessage('Invalid size Id'),
    result // for catch error from the above id 
]

exports.createSizeValidator = [
    check('width')
        .isNumeric()
        .withMessage('width must be a number')
        .default(6),
    check('height')
        .isNumeric()
        .withMessage('height must be a number'),
    result
]


exports.updateSizeValidator = [
    check('id').isMongoId().withMessage('Invalid size id format'),
    result
];

exports.deleteSizeValidator = [
    check('id').isMongoId().withMessage('Invalid size id format'),
    result,
];