const express = require('express');
const { PostFloatingMullion, GetAllFloatingMullion, getOneFloatingMullion, UpdateFloatingMullion, DeleteFloatingMullion } = require('../services/FloatingMullionService');
const { createFloatingMullionValidator, getFloatingMullionValidator, updateFloatingMullionValidator, deleteFloatingMullionValidator } = require('../utils/validators/FloatingMullionValidator');
const router = express.Router()
const { isSuperAdminAuthenticated, auth } = require('../middlewares/auth');


router.route('/')
    .post(createFloatingMullionValidator, isSuperAdminAuthenticated, PostFloatingMullion)
    .get(auth, GetAllFloatingMullion)

router.route('/:id')
    .get(getFloatingMullionValidator, auth, getOneFloatingMullion)
    .put(updateFloatingMullionValidator, isSuperAdminAuthenticated, UpdateFloatingMullion)
    .delete(deleteFloatingMullionValidator, isSuperAdminAuthenticated, DeleteFloatingMullion)

module.exports = router