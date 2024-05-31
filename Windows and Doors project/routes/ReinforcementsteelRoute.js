const express = require('express');
const { PostReinforcementsteel, GetAllReinforcementsteel, getOneReinforcementsteel, UpdateReinforcementsteel, DeleteReinforcementsteel } = require('../services/ReinforcementsteelService');
const { createReinforcementsteelValidator, getReinforcementsteelValidator, updateReinforcementsteelValidator, deleteReinforcementsteelValidator } = require('../utils/validators/ReinforcmentsteelValidator');
const { isSuperAdminAuthenticated, auth } = require('../middlewares/auth');
const router = express.Router()

router.route('/')
    .post(createReinforcementsteelValidator, isSuperAdminAuthenticated, PostReinforcementsteel)
    .get(auth, GetAllReinforcementsteel)

router.route('/:id')
    .get(getReinforcementsteelValidator, auth, getOneReinforcementsteel)
    .put(updateReinforcementsteelValidator, isSuperAdminAuthenticated, UpdateReinforcementsteel)
    .delete(deleteReinforcementsteelValidator, isSuperAdminAuthenticated, DeleteReinforcementsteel)

module.exports = router