const express = require('express')
const { signUp, signIn } = require('./userController')
const router = express.Router()
const {
	signupMiddleware,
	signinMiddleware,
} = require('../Utils/authMiddleware')

router.route('/signup').post(signupMiddleware, signUp)

router.route('/signin').post(signinMiddleware, signIn)

module.exports = router
