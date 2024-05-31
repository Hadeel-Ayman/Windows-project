const express = require('express');
const { PostProfile, DeleteProfile, GetAllProfile, UpdateProfile, getOneProfile } = require('../services/ProfileService');
const { getProfileValidator, updateProfileValidator, deleteProfileValidator, createProfileValidator } = require('../utils/validators/ProfileValidator');
const { isSuperAdminAuthenticated, auth } = require('../middlewares/auth');
const router = express.Router({ mergeParams: true })

router.route('/')
    .post(createProfileValidator, isSuperAdminAuthenticated, PostProfile)
    .get(auth, GetAllProfile)

router.route('/:id')
    .get(getProfileValidator, auth, getOneProfile)
    .put(updateProfileValidator, isSuperAdminAuthenticated, UpdateProfile)
    .delete(deleteProfileValidator, isSuperAdminAuthenticated, DeleteProfile)

module.exports = router