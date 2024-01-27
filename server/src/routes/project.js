const express = require('express');
const tokenValidation = require('../middlewares/tokenValidation');
const projectController = require('../controllers/project.controller');

const router = express.Router();

// routes.get('/project', ProjectController.getAllProjects);
// routes.get('/project/:id', ProjectController.getProjectsbyId);
router.post('/project', tokenValidation, projectController.createProjects);
// routes.put('/project/:id', ProjectController.);
// routes.delete('/project/:id', LivroCProjectControllerontroller.);

module.exports = router;

//TODO rotas get, etc,
