const { check } = require('express-validator')
const result = require('../../middlewares/validatorMeddliware');
const Frame = require('../../models/FrameModel');


exports.getGlazingBeadValidator = [
    check('id').isMongoId().withMessage('Invalid FloatingMullion Id'),
    result // for catch error from the above id 
]

exports.createGlazingBeadValidator = [
    check('name')
        .notEmpty()
        .withMessage('name is required'),
    check('code')
        .notEmpty()
        .withMessage('code is required'),
    check('Length_of_Beam')
        .isMongoId()
        .notEmpty()
        .withMessage('Length_of_Beam is required')
        .custom(async (value, { req }) => {
            if (!mongoose.Types.ObjectId.isValid(value)) {
                throw new Error('Invalid Length_of_Beam ID');
            }

            const beam = await Frame.findById(value);
            if (!beam) {
                throw new Error('Beam not found');
            }

            const Length_of_Beam = parseFloat(beam.Length_of_Beam);
            const pricePermeter = parseFloat(req.body.pricePermeter);

            if (!isNaN(Length_of_Beam) && !isNaN(pricePermeter)) {
                req.body.price_beam = Length_of_Beam * pricePermeter;
            } else {
                throw new Error('Both Length_of_Beam and pricePermeter must be numbers');
            }
            return true;
        }),
    check('height')
        .isNumeric()
        .withMessage('height must be a number'),
    check('weightPermeter')
        .isNumeric()
        .notEmpty()
        .withMessage('weightPermeter is required'),
    check('colours')
        .isMongoId()
        .withMessage('Invalid colours id format'),
    check('pricePermeter')
        .isNumeric()
        .notEmpty()
        .withMessage('pricePermeter is required'),
    check('price_beam'),
    check('profile')
        .isMongoId()
        .withMessage('Invalid profile id format'),
    result
]


exports.updateGlazingBeadValidator = [
    check('id').isMongoId().withMessage('Invalid FloatingMullion id format'),
    result
];

exports.deleteGlazingBeadValidator = [
    check('id').isMongoId().withMessage('Invalid FloatingMullion id format'),
    result,
];