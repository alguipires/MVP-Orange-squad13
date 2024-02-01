const express = require('express');
const tokenValidation = require('../middlewares/tokenValidation');
const projectController = require('../controllers/project.controller');
const upload = require('../../config/multer');
const router = express.Router();

router.get('/', projectController.getAllProjects); //TODO pegar todos os projetos  e paginar

//TODO rota para pegar todos os projetos pelo UserId e paginar (PEGAR PELO USERID E USERUUID)
router.get('/:id', tokenValidation, projectController.getProjectsbyId); //TODO pegar proj pelo id de projeto

router.post(
  '/',
  tokenValidation,
  upload.single('url'),
  projectController.createProjects
);
router.patch(
  '/:id',
  tokenValidation,
  upload.single('url'),
  projectController.updateProjectById
);
router.delete('/:id', tokenValidation, projectController.deleteProjectById);

module.exports = router;
