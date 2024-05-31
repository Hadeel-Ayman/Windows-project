const { check } = require('express-validator')
const result = require('../../middlewares/validatorMeddliware')


exports.getWeldingProcessValidator = [
    check('id').isMongoId().withMessage('Invalid WeldingProcess Id'),
    result // for catch error from the above id 
]

exports.createWeldingProcessValidator = [
    check('Welding_Allowance')
        .isNumeric()
        .withMessage('Welding_Allowance must be a number'),
    check('Welding_time')
        .isNumeric()
        .withMessage('Welding_time must be a number'),
    check('profile')
        .isMongoId()
        .withMessage('Invalid WeldingProcess Id'),
    result
]

exports.updateWeldingProcessValidator = [
    check('id').isMongoId().withMessage('Invalid WeldingProcess id format'),
    result
];

exports.deleteWeldingProcessValidator = [
    check('id').isMongoId().withMessage('Invalid WeldingProcess id format'),
    result,
];