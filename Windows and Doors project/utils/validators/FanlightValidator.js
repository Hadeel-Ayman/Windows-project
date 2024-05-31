const { check, body } = require('express-validator')
const result = require('../../middlewares/validatorMeddliware')
const slugify = require("slugify");

exports.getFanlightValidator = [
    check('id').isMongoId().withMessage('Invalid Fanlight Id'),
    result // for catch error from the above id 
]

exports.createFanlightValidator = [
    check('image'),
    check('title')
        .notEmpty()
        .withMessage('title is required'),
    check('numOfSegment')
        .isNumeric()
        .withMessage('numOfSegment is required')
        .notEmpty()
        .withMessage('title is required'),
    check('openingSystem')
        .isMongoId()
        .withMessage('Invalid openingSystem Id')
        .notEmpty()
        .withMessage('openingSystem is required'),
    check('profile')
        .isMongoId()
        .withMessage('Invalid profile Id')
        .notEmpty()
        .withMessage('profile is required'),
    result
]

exports.updateFanlightValidator = [
    check('id').isMongoId().withMessage('Invalid Fanlight Id'),
    result
]

exports.deleteFanlightValidator = [
    check('id').isMongoId().withMessage('Invalid Fanlight Id'),
    result
]