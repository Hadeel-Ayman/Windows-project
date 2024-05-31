const express = require('express');
const { PostGlass, GetAllGlass, getOneGlass, UpdateGlass, DeleteGlass } = require('../services/GlassService');
const { createGlassValidator, getGlassValidator, updateGlassValidator, deleteGlassValidator } = require('../utils/validators/GlassValidator');
const { auth, isSuperAdminAuthenticated } = require('../middlewares/auth');
const router = express.Router()

router.route('/')
    .post(createGlassValidator, isSuperAdminAuthenticated, PostGlass)
    .get(auth, GetAllGlass)

router.route('/:id')
    .get(getGlassValidator, auth, getOneGlass)
    .put(updateGlassValidator, isSuperAdminAuthenticated, UpdateGlass)
    .delete(deleteGlassValidator, isSuperAdminAuthenticated, DeleteGlass)

module.exports = router