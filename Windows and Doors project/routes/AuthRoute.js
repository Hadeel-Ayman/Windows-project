const express = require('express');
const { SignupValidator, loginValidator, loginAdminValidator } = require('../utils/validators/AuthValidator');
const { Regestier, login, loginAdmin,logout } = require('../services/AuthService');
const router = express.Router()

router.route('/signup').post(SignupValidator, Regestier)
router.route('/login').post(loginValidator, login)
router.route('/loginAdmin').post(loginAdminValidator, loginAdmin)
router.route('/logout').get(logout)

module.exports = router;