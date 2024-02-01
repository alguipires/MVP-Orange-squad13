const express = require('express');
const tokenValidation = require('../middlewares/tokenValidation');
const projectController = require('../controllers/project.controller');

const router = express.Router();

router.get('/', projectController.getAllProjects); //TODO pegar todos os projetos  e paginar
//TODO rota para pegar todos os projetos pelo UserId e paginar (PEGAR PELO USERID E USERUUID)
router.get('/:id', tokenValidation, projectController.getProjectsbyId); //TODO pegar proj pelo id de projeto
router.post('/', tokenValidation, projectController.createProjects); //TODO refatorar rota para criar com userId e UserUuid
router.put('/:id', tokenValidation, projectController.updateProjectById); //TODO refatorar para editar somento pelo userids vinculado ao projeto
router.delete('/:id', tokenValidation, projectController.deleteProjectById); //TODO refatorar para deletar somento pelo userids vinculado ao projeto ** OU ADMIN

module.exports = router;
