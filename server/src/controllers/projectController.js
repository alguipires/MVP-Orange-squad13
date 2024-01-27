const mapStatusHTTP = require('../utils/mapStatusHTTP');
const { project } = require('../db/models/Projects.js');
const { user } = require('../db/models/Projects.js');

class ProjectController {
  static async getAllProjects(req, res) {
    try {
      const getProjects = await project.find({});
      res.status(200).json(getProjects);
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha na requisição` });
    }
  }

  static async getProjectsbyId(req, res) {
    try {
      const id = req.params.id;
      const searchProjects = await project.findById(id);
      res.status(200).json(searchProjects);
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha na requisição do projeto` });
    }
  }

  static async createProjects(req, res) {
    const newProject = req.body;
    try {
      const searchUser = await user.findById(newProject.autor);
      const projectCompleted = { ...newProject, autor: { ...searchUser._doc } };
      const projectCreate = await project.create(projectCompleted);
      res
        .status(201)
        .json({ message: 'criado com sucesso', project: projectCreate });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha ao cadastrar Projeto` });
    }
  }
}

module.exports = ProjectController;
