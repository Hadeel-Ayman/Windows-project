const express = require('express');
const { PostCompany, GetAllCompany, getOneCompany, UpdateCompany, DeleteCompany } = require('../services/CompanyService');
const { createCompanyValidator, getCompanyValidator, deleteCompanyValidator, updateCompanyValidator } = require('../utils/validators/CompanyValidator');
const { upload } = require('../middlewares/firebase');
const { auth, isSuperAdminAuthenticated } = require('../middlewares/auth');
const router = express.Router()


router.route('/')
    .post(isSuperAdminAuthenticated, upload.single('image'), createCompanyValidator, PostCompany)
    .get(isSuperAdminAuthenticated, GetAllCompany)

router.route('/:id')
    .get(getCompanyValidator, auth, getOneCompany)
    .put(upload.single('image'), updateCompanyValidator, isSuperAdminAuthenticated, UpdateCompany)
    .delete(deleteCompanyValidator, isSuperAdminAuthenticated, DeleteCompany)

module.exports = router