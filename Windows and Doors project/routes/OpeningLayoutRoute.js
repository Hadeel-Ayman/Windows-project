const express = require('express');
const { PostOpeningLayout, GetAllOpeningLayout, getOneOpeningLayout, UpdateOpeningLayout, DeleteOpeningLayout } = require('../services/OpeningLayoutService');
const { createOpeningLayoutValidator, getOpeningLayoutValidator, updateOpeningLayoutValidator, deleteOpeningLayoutValidator } = require('../utils/validators/OpeningLayoutValidator');
const { upload } = require('../middlewares/firebase');
const { isSuperAdminAuthenticated, auth } = require('../middlewares/auth');
const router = express.Router()

router.route('/')
    .post(isSuperAdminAuthenticated, upload.single('image'), createOpeningLayoutValidator, PostOpeningLayout)
    .get(auth, GetAllOpeningLayout)

router.route('/:id')
    .get(getOpeningLayoutValidator, auth, getOneOpeningLayout)
    .put(isSuperAdminAuthenticated, upload.single('image'), updateOpeningLayoutValidator, UpdateOpeningLayout)
    .delete(deleteOpeningLayoutValidator, isSuperAdminAuthenticated, DeleteOpeningLayout)

module.exports = router