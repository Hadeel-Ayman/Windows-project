const express = require('express');
const { PostCuttingProcess, GetAllCuttingProcess, getOneCuttingProcess, UpdateCuttingProcess, DeleteCuttingProcess } = require('../services/CuttingProcessService');
const { createCuttingProcessValidator, getCuttingProcessValidator, deleteCuttingProcessValidator, updateCuttingProcessValidator } = require('../utils/validators/CuttingProcessValidator');
const { isSuperAdminAuthenticated, auth } = require('../middlewares/auth');
const router = express.Router()

router.route('/')
    .post(createCuttingProcessValidator, isSuperAdminAuthenticated, PostCuttingProcess)
    .get(auth, GetAllCuttingProcess)

router.route('/:id')
    .get(getCuttingProcessValidator, auth, getOneCuttingProcess)
    .put(updateCuttingProcessValidator, isSuperAdminAuthenticated, UpdateCuttingProcess)
    .delete(deleteCuttingProcessValidator, isSuperAdminAuthenticated, DeleteCuttingProcess)

module.exports = router