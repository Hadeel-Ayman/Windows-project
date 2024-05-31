const express = require('express');
const { PostOpeningSystem, GetAllOpeningSystem, getOneOpeningSystem, UpdateOpeningSystem, DeleteOpeningSystem } = require('../services/OpeningSystemService');
const { getOpeningSystemValidator, updateOpeningSystemValidator, deleteOpeningSystemValidator, createOpeningSystemValidator } = require('../utils/validators/OpeningSystemValidator');
const { upload } = require('../middlewares/firebase');
const { auth, isSuperAdminAuthenticated } = require('../middlewares/auth');
const router = express.Router()

router.route('/')
    .post(isSuperAdminAuthenticated, upload.single('image'), createOpeningSystemValidator, PostOpeningSystem)
    .get(auth, GetAllOpeningSystem)

router.route('/:id')
    .get(getOpeningSystemValidator, auth, getOneOpeningSystem)
    .put(isSuperAdminAuthenticated, upload.single('image'), updateOpeningSystemValidator, UpdateOpeningSystem)
    .delete(deleteOpeningSystemValidator, isSuperAdminAuthenticated, DeleteOpeningSystem)

module.exports = router
