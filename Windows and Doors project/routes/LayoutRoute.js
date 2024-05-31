const express = require('express');
const { PostLayout, GetAllLayout, getOneLayout, UpdateLayout, DeleteLayout } = require('../services/LayoutService');
const { } = require('../utils/validators/UserValidator');
const { createLayoutValidator, getLayoutValidator, updateLayoutValidator, deleteLayoutValidator } = require('../utils/validators/LayoutValidator');
const { upload } = require('../middlewares/firebase');
const { isSuperAdminAuthenticated, auth } = require('../middlewares/auth');
const router = express.Router()

router.route('/')
    .post(isSuperAdminAuthenticated, upload.single('image'), createLayoutValidator, PostLayout)
    .get(auth, GetAllLayout)

router.route('/:id')
    .get(getLayoutValidator, auth, getOneLayout)
    .put(isSuperAdminAuthenticated, upload.single('image'), updateLayoutValidator, UpdateLayout)
    .delete(deleteLayoutValidator, isSuperAdminAuthenticated, DeleteLayout)

module.exports = router