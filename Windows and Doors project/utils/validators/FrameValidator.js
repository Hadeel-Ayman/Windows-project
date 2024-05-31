const { check, body } = require('express-validator')
const result = require('../../middlewares/validatorMeddliware')
const slugify = require("slugify");

exports.getFrameValidator = [
    check('id').isMongoId().withMessage('Invalid Frame Id'),
    result // for catch error from the above id 
]

exports.createFrameValidator = [
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
    check('Length_of_Beam')
        .notEmpty()
        .withMessage('code is required')
        .isNumeric()
        .withMessage('Length_of_Beam must be a number')
        .custom((value, { req }) => {
            const Length_of_Beam = parseFloat(value);
            const pricePermeter = parseFloat(req.body.pricePermeter);
            if (!isNaN(Length_of_Beam) && !isNaN(pricePermeter)) {
                req.body.pricePerbeam = Length_of_Beam * pricePermeter;
            } else {
                throw new Error('Both Length_of_Beam and pricePermeter must be numbers');
            }
            return true;
        }),
    check('Renovation')
        .notEmpty()
        .withMessage('Renovation is required')
        .isBoolean()
        .withMessage('Renovation must be a yes/no answer'),
    check('Renovation_height')
        .notEmpty()
        .withMessage('Renovation_height is required')
        .isNumeric()
        .withMessage('Length_of_Beam must be a number'),
    check('Frame_Height')
        .notEmpty()
        .withMessage('Frame_Height is required')
        .isNumeric()
        .withMessage('Frame_Height must be a number'),
    check('Frame_Width')
        .notEmpty()
        .withMessage('Frame_Width is required')
        .isNumeric()
        .withMessage('Frame_Width must be a number'),
    check('weightPermeter')
        .notEmpty()
        .withMessage('Weight is required')
        .isNumeric()
        .withMessage('Weight must be a number'),
    check('colours')
        .isArray()
        .notEmpty()
        .withMessage('Colours is required'),
    check('pricePermeter')
        .notEmpty()
        .withMessage('price is required')
        .isNumeric()
        .withMessage('price must be a number'),
    check('pricePerbeam'),
    check('image'),
    check('from')
        .isNumeric()
        .notEmpty()
        .withMessage('from is required'),
    result
]
// res.json({ pricePerbeam: req.body.pricePerbeam });


exports.updateFrameValidator = [
    check('id').isMongoId().withMessage('Invalid Frame Id'),
    body('name').custom((val, { req }) => {
        req.body.slug = slugify(val)
        return true
    }),
    result
]

exports.deleteFrameValidator = [
    check('id').isMongoId().withMessage('Invalid Frame Id'),
    result
]