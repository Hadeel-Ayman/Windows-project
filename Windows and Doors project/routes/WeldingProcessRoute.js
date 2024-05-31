const express = require('express');
const { PostWeldingProcess, GetAllWeldingProcess, getOneWeldingProcess, UpdateWeldingProcess, DeleteWeldingProcess } = require('../services/WeldingProcessService');
const { getWeldingProcessValidator, createWeldingProcessValidator, deleteWeldingProcessValidator, updateWeldingProcessValidator } = require('../utils/validators/WeldingProcessValidator');
const router = express.Router()

router.route('/')
    .post(createWeldingProcessValidator, PostWeldingProcess)
    .get(GetAllWeldingProcess)

router.route('/:id')
    .get(getWeldingProcessValidator, getOneWeldingProcess)
    .put(updateWeldingProcessValidator, UpdateWeldingProcess)
    .delete(deleteWeldingProcessValidator, DeleteWeldingProcess)

module.exports = router