const { check } = require('express-validator')
const result = require('../../middlewares/validatorMeddliware')


exports.getOpeningSystemValidator = [
    check('id').isMongoId().withMessage('Invalid OpeningSystem Id'),
    result // for catch error from the above id 
]

exports.createOpeningSystemValidator = [
    check('type')
        .isArray()
        .notEmpty()
        .withMessage('type is required'),
    check('from')
        .isNumeric()
        .notEmpty()
        .withMessage('from is required'),
    result
]


exports.updateOpeningSystemValidator = [
    check('id').isMongoId().withMessage('Invalid OpeningSystem id format'),
    result
];

exports.deleteOpeningSystemValidator = [
    check('id').isMongoId().withMessage('Invalid OpeningSystem id format'),
    result,
];