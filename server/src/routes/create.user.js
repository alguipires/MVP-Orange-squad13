const express = require('express')
const { createUserController } = require('../controllers')

const router = express.Router()

router.post('/', createUserController.createUser)

module.exports = router