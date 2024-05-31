const express = require('express');
const { PostGlazingBead, GetAllGlazingBead, getOneGlazingBead, UpdateGlazingBead, DeleteGlazingBead } = require('../services/GlazingBeadService');
const { createGlazingBeadValidator, getGlazingBeadValidator, updateGlazingBeadValidator, deleteGlazingBeadValidator } = require('../utils/validators/GlazingBeadValidator');
const { isSuperAdminAuthenticated, auth } = require('../middlewares/auth');
const router = express.Router()

router.route('/')
    .post(createGlazingBeadValidator, isSuperAdminAuthenticated, PostGlazingBead)
    .get(auth, GetAllGlazingBead)

router.route('/:id')
    .get(getGlazingBeadValidator, auth, getOneGlazingBead)
    .put(updateGlazingBeadValidator, isSuperAdminAuthenticated, UpdateGlazingBead)
    .delete(deleteGlazingBeadValidator, isSuperAdminAuthenticated, DeleteGlazingBead)

module.exports = router