const { check } = require('express-validator')
const result = require('../../middlewares/validatorMeddliware')
const Material = require('../../models/MaterialModel')

exports.getMaterialValidator = [
    check('id').isMongoId().withMessage('Invalid Material Id'),
    result // for catch error from the above id 
]

exports.createMaterialValidator = [
    check('type')
        .notEmpty()
        .withMessage('type is required')
        .custom(async (value) => {
            const material = await Material.findOne({ type: value });
            if (material) {
                throw new Error('type already in use');
            }
            return true;
        }),
    check('from')
        .isNumeric()
        .notEmpty()
        .withMessage('from is required'),
    result
]

exports.updateMaterialValidator = [
    check('id').isMongoId().withMessage('Invalid Material id format'),
    result
];

exports.deleteMaterialValidator = [
    check('id').isMongoId().withMessage('Invalid Material id format'),
    result,
];