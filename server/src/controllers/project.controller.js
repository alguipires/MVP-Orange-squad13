const mapStatusHTTP = require('../utils/mapStatusHTTP.js');
const projectService = require('../services/projectService.js');

const createProjects = async (req, res) => {
  console.log('ENTROU NO CONTROLLE CREATE PROJECT....', req.getPayload.id);

  const tokenUserId = req.getPayload.id;

  const { title, tag, url, description } = req.body;
  const { status, data } = await projectService.createProjectPostService(
    title,
    tag,
    url,
    description,
    tokenUserId
  );
  return res.status(mapStatusHTTP(status)).json(data);

  // const newProject = req.body;
  // try {
  //   const searchUser = await user.findById(newProject.autor);
  //   const projectCompleted = { ...newProject, autor: { ...searchUser._doc } };
  //   const projectCreate = await project.create(projectCompleted);
  //   res
  //     .status(201)
  //     .json({ message: 'criado com sucesso', project: projectCreate });
  // } catch (error) {
  //   res
  //     .status(500)
  //     .json({ message: `${error.message} - falha ao cadastrar Projeto` });
  // }
};

module.exports = {
  createProjects,
};

/* class ProjectController {
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
    console.log('ENTROU NO CONTROLLE CREATE PROJECT....');
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

export default ProjectController;
 */
