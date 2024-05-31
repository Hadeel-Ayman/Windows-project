const { check, body } = require('express-validator')
const result = require('../../middlewares/validatorMeddliware')
const slugify = require("slugify");
const Company = require('../../models/CompanyModel')

exports.getCompanyValidator = [
    check('id').isMongoId().withMessage('Invalid Company Id'),
    result
]

exports.createCompanyValidator = [
    check('name')
        .notEmpty()
        .withMessage('name is required')
        .custom((val, { req }) => {
            req.body.slug = slugify(val)
            return true
        })
        .custom(async (value) => {
            const company = await Company.findOne({ name: value });
            if (company) {
                throw new Error('company already in use');
            }
            return true;
        }),
    check('size')
        .isString()
        .withMessage('Size must be a string'),
    result
]

exports.updateCompanyValidator = [
    check('id').isMongoId().withMessage('Invalid Company Id'),
    body('name').custom((val, { req }) => {
        req.body.slug = slugify(val)
        return true
    }),
    result
]

exports.deleteCompanyValidator = [
    check('id').isMongoId().withMessage('Invalid Company Id'),
    result
]
