const express = require('express')
const { createUserController } = require('../controllers')
const userValidation = require('../middlewares/createUserValidation')

const router = express.Router()

router.post('/', userValidation, createUserController.createUser)

module.exports = router