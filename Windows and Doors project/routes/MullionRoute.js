const express = require('express');
const { PostMullion, GetAllMullion, getOneMullion, UpdateMullion, DeleteMullion } = require('../services/MullionService');
const { createMullionValidator, getMullionValidator, updateMullionValidator, deleteMullionValidator } = require('../utils/validators/MullionValidator');
const { isSuperAdminAuthenticated, auth } = require('../middlewares/auth');
const router = express.Router()

router.route('/')
    .post(createMullionValidator, isSuperAdminAuthenticated, PostMullion)
    .get(auth, GetAllMullion)

router.route('/:id')
    .get(getMullionValidator, auth, getOneMullion)
    .put(updateMullionValidator, isSuperAdminAuthenticated, UpdateMullion)
    .delete(deleteMullionValidator, isSuperAdminAuthenticated, DeleteMullion)

module.exports = router