const express = require('express');
const { PostTypeOfUnit, GetAllTypeOfUnit, getOneTypeOfUnit, UpdateTypeOfUnit, DeleteTypeOfUnit } = require('../services/TypeOfUnitService');
const { createTypeOfUnitValidator, getTypeOfUnitValidator, updateTypeOfUnitValidator, deleteTypeOfUnitValidator } = require('../utils/validators/TypeOfUnitValidator');
const router = express.Router()

router.route('/')
    .post(createTypeOfUnitValidator, PostTypeOfUnit)
    .get(GetAllTypeOfUnit)

router.route('/:id')
    .get(getTypeOfUnitValidator, getOneTypeOfUnit)
    .put(updateTypeOfUnitValidator, UpdateTypeOfUnit)
    .delete(deleteTypeOfUnitValidator, DeleteTypeOfUnit)

module.exports = router