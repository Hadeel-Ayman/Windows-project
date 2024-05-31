const express = require('express');
const router = express.Router();
const ProfileRoute = require('../routes/ProfileRoute')
const { PostMaterial, getOneMaterial, GetAllMaterials, UpdateMaterial, DeleteMaterial } = require('../services/MaterialService');
const { createMaterialValidator, getMaterialValidator, updateMaterialValidator, deleteMaterialValidator } = require('../utils/validators/MaterialValidator');
const { auth, isSuperAdminAuthenticated } = require('../middlewares/auth');
const { upload } = require('../middlewares/firebase');

router.route('/')
    .post(isSuperAdminAuthenticated, upload.single('image'), createMaterialValidator, PostMaterial)
    .get(auth, GetAllMaterials)

router.route('/:id')
    .get(getMaterialValidator, auth, getOneMaterial)
    .put(isSuperAdminAuthenticated, upload.single('image'), updateMaterialValidator, UpdateMaterial)
    .delete(deleteMaterialValidator, isSuperAdminAuthenticated, DeleteMaterial)

module.exports = router