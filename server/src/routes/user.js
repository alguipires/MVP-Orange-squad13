const express = require('express');
const { createUserController } = require('../controllers');
const userValidation = require('../middlewares/createUserValidation');
const userGoogleValidation = require('../middlewares/createUserGoogleValidation');
const tokenValidation = require('../middlewares/tokenValidation');

const router = express.Router();

router.post('/', userValidation, createUserController.createUser);
router.post(
  '/google',
  [...userValidation, ...userGoogleValidation],
  createUserController.createUserWithGoogle
);
router.get('/', tokenValidation, createUserController.getProjectsByUserId);
router.get('/google/:uuid', createUserController.getProjectsByUserIdGoogle);

module.exports = router;
