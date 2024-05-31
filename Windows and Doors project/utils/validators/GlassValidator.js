const { check, body } = require('express-validator')
const result = require('../../middlewares/validatorMeddliware')
const slugify = require("slugify");

exports.getGlassValidator = [
    check('id').isMongoId().withMessage('Invalid Glass Id'),
    result // for catch error from the above id 
]

exports.createGlassValidator = [
    check('name')
        .notEmpty()
        .withMessage('name is required')
        .isLength({ min: 3 })
        .withMessage('Too Short')
        .isLength({ max: 20 })
        .withMessage('Too long')
        .custom((val, { req }) => {
            req.body.slug = slugify(val)
            return true
        }),
    check('code')
        .notEmpty()
        .withMessage('code is required'),

    check('glass_density')
        .notEmpty()
        .withMessage('glass_density is required')
        .isNumeric()
        .withMessage('glass_density must be a number'),
    check('thickness')
        .notEmpty()
        .withMessage('thickness is required')
        .isNumeric()
        .withMessage('thickness must be a number'),
    check('specification')
        .notEmpty()
        .withMessage('specification is required'),
    check('pricePermeterSqure')
        .notEmpty()
        .withMessage('price is required')
        .isNumeric()
        .withMessage('price must be a number'),
    check('weightPermeterSqure')
        .notEmpty()
        .withMessage('weight is required'),
    result
]

exports.updateGlassValidator = [
    check('id').isMongoId().withMessage('Invalid Glass Id'),
    body('name').custom((val, { req }) => {
        req.body.slug = slugify(val)
        return true
    }),
    result
]

exports.deleteGlassValidator = [
    check('id').isMongoId().withMessage('Invalid Glass Id'),
    result
]