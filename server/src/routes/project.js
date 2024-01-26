/* //rota de projeto
const express = require('express')
const { projectController } = require('../controllers/projectController')
const projectValidation = require('../middlewares/createUserValidation')

const router = express.Router()

router.post('/', projectValidation, projectController.)

module.exports = router */
