const express = require('express');
const tokenValidation = require('../middlewares/tokenValidation');
const projectController = require('../controllers/project.controller');
const upload = require('../../config/multer');
const router = express.Router();

//rota para buscar todos os projetos e paginar
//ex req> http://localhost:3001/project/?page=1&pageSize=2
router.get('/', projectController.getAllProjects);

// rota para pegar todos os projetos pelo UserUuid e paginar
//ex req> http://localhost:3001/project/userId?page=1&pageSize=2
router.get('/userId', tokenValidation, projectController.getProjectsbyUserId);
// router.get('/:id', tokenValidation, projectController.getProjectsbyId); // rota pega projeto pelo projectId

router.post(
  '/',
  tokenValidation,
  upload.single('imgFile'),
  projectController.createProjects
);
router.patch(
  '/:id',
  tokenValidation,
  upload.single('imgFile'),
  projectController.updateProjectById
);
router.delete('/google/:id', projectController.deleteProjectByGoogleId);
router.delete('/:id', tokenValidation, projectController.deleteProjectById);

module.exports = router;
