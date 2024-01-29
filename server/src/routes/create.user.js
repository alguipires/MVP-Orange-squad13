const express = require('express')
const { createUserController } = require('../controllers')
const userValidation = require('../middlewares/createUserValidation')
const userGoogleValidation = require('../middlewares/createUserGoogleValidation')

const router = express.Router()

router.post('/', userValidation, createUserController.createUser)
router.post('/google', [...userValidation, ...userGoogleValidation], createUserController.createUserWithGoogle)

module.exports = router