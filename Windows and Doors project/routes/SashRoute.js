const express = require('express');
const { PostSash, GetAllSash, getOneSash, UpdateSash, DeleteSash } = require('../services/SashService');
const { getSashValidator, createSashValidator, updateSashValidator, deleteSashValidator } = require('../utils/validators/SashValidator');
const { upload } = require('../middlewares/firebase');
const { isSuperAdminAuthenticated, auth } = require('../middlewares/auth');
const router = express.Router()

router.route('/')
    .post(isSuperAdminAuthenticated, upload.single('image'), createSashValidator, PostSash)
    .get(auth, GetAllSash)

router.route('/:id')
    .get(getSashValidator, auth, getOneSash)
    .put(isSuperAdminAuthenticated, upload.single('image'), updateSashValidator, UpdateSash)
    .delete(deleteSashValidator, isSuperAdminAuthenticated, DeleteSash)

module.exports = router