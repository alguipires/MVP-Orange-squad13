const express = require('express');
const { userController } = require('../controllers');
const userValidation = require('../middlewares/createUserValidation');
const userGoogleValidation = require('../middlewares/createUserGoogleValidation');
const tokenValidation = require('../middlewares/tokenValidation');

const router = express.Router();

router.get('/info', tokenValidation, userController.getUserByUuid);
router.post('/', userValidation, userController.createUser);
router.post(
  '/google',
  [...userValidation, ...userGoogleValidation],
  userController.createUserWithGoogle
);
router.get('/', tokenValidation, userController.getProjectsByUserId);
router.get('/google/:uuid', userController.getProjectsByUserIdGoogle);

module.exports = router;
