const express = require('express');
const router = express.Router()
const { PostFrame, getOneFrame, GetAllFrames, UpdateFrame, DeleteFrame } = require('../services/FrameService');
const { createFrameValidator, getFrameValidator, updateFrameValidator, deleteFrameValidator } = require('../utils/validators/FrameValidator');
const { isSuperAdminAuthenticated, auth } = require('../middlewares/auth');
const { upload } = require('../middlewares/firebase');

router.route('/')
    .post(isSuperAdminAuthenticated, upload.single('image'), createFrameValidator, PostFrame)
    .get(auth, GetAllFrames)

router.route('/:id')
    .get(auth, getFrameValidator, getOneFrame)
    .put(isSuperAdminAuthenticated, upload.single('image'), updateFrameValidator, UpdateFrame)
    .delete(deleteFrameValidator, isSuperAdminAuthenticated, DeleteFrame)

module.exports = router