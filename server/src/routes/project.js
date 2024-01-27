const express = require('express');
const { ProjectController } = require('../controllers/projectController');
// const { createUserController } = require('../controllers');
// const userValidation = require('../middlewares/createUserValidation');

const router = express.Router();

routes.get('/project', ProjectController.getAllProjects); //TODO fazer rota pega tudo
routes.get('/project/:id', ProjectController.getProjectsbyId); //TODO fazer rota listar por id
routes.post('/project', ProjectController.createProjects); //TODO fazer rota cadastro
// routes.put('/project/:id', ProjectController.); //TODO fazer rota de atualizar
// routes.delete('/project/:id', LivroCProjectControllerontroller.); //TODO fazer rota deletar

module.exports = router;
