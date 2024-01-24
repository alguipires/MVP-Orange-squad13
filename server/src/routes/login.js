const express = require('express');
const { loginController } = require('../controllers');
const loginValidation = require('../middlewares/loginValidation');

const router = express.Router();

router.post('/', loginValidation, loginController.loginPost);

module.exports = router;