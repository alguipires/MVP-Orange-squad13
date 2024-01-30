const express = require('express');
const tokenValidation = require('../middlewares/tokenValidation');
const projectController = require('../controllers/project.controller');

const router = express.Router();

router.get('/project', tokenValidation, projectController.getAllProjects);
router.get('/project/:id', tokenValidation, projectController.getProjectsbyId);
router.post('/project', tokenValidation, projectController.createProjects);
router.put(
  '/project/:id',
  tokenValidation,
  projectController.updateProjectById
);
router.delete(
  '/project/:id',
  tokenValidation,
  projectController.deleteProjectById
);

module.exports = router;

//TODO revisar rotas get, etc,
