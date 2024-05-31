const express = require('express');
const { PostSize, GetAllSize, getOneSize, UpdateSize, DeleteSize } = require('../services/SizeService');
const { createSizeValidator, getSizeValidator, updateSizeValidator, deleteSizeValidator } = require('../utils/validators/SizeValidator');
const { auth } = require('../middlewares/auth');
const router = express.Router()

router.route('/')
    .post(createSizeValidator, auth, PostSize)
    .get(GetAllSize)

router.route('/:id')
    .get(getSizeValidator, auth, getOneSize)
    .put(updateSizeValidator, auth, UpdateSize)
    .delete(deleteSizeValidator, auth, DeleteSize)

module.exports = router