const express = require('express');
const tokenValidation = require('../middlewares/tokenValidation');
const projectController = require('../controllers/project.controller');

const router = express.Router();

router.get('/', projectController.getAllProjects);
router.get('/:id', tokenValidation, projectController.getProjectsbyId);
router.post('/', tokenValidation, projectController.createProjects);
router.put(
  '/:id',
  tokenValidation,
  projectController.updateProjectById
);
router.delete(
  '/:id',
  tokenValidation,
  projectController.deleteProjectById
);

module.exports = router;

//TODO revisar rotas get, etc,
