const express = require('express');
const { createUserController } = require('../controllers');
const userValidation = require('../middlewares/createUserValidation');

const router = express.Router();

router.post('/', userValidation, createUserController.createUser);
//TODO fazer rotas get etc...

module.exports = router;
