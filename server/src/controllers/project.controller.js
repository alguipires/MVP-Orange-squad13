const mapStatusHTTP = require('../utils/mapStatusHTTP.js');
const projectService = require('../services/project.service.js');

const createProjects = async (req, res) => {
  const userId = req.getPayload.id;
  const userUuid = req.getPayload.uuid;

  //pegando o fieldname "url" e extraindo o file e path
  const url = req.file.path;

  const { title, tag, description } = req.body;

  const { status, data } = await projectService.createProjectPostService(
    title,
    tag,
    url,
    description,
    userId,
    userUuid
  );
  return res.status(mapStatusHTTP(status)).json(data);
};

const getProjectsbyId = async (req, res) => {
  const projectId = req.params.id;
  const { status, data } = await projectService.getProjectByIdService(
    projectId
  );
  return res.status(mapStatusHTTP(status)).json(data);
};

const getAllProjects = async (req, res) => {
  const { status, data } = await projectService.getAllProjectService();
  return res.status(mapStatusHTTP(status)).json(data);
};

const updateProjectById = async (req, res) => {
  const { title, tag, url, description } = req.body;
  const projectId = req.params.id;
  const tokenUserId = req.getPayload.id;

  const { status, data } = await projectService.updateProjectByIdService(
    title,
    tag,
    url,
    description,
    projectId,
    tokenUserId
  );
  return res.status(mapStatusHTTP(status)).json(data);
};

const deleteProjectById = async (req, res) => {
  const getPayload = req.getPayload;
  const projectId = req.params.id;

  const { status, data } = await projectService.deleteProjectByIdService(
    projectId,
    getPayload
  );
  return res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
  createProjects,
  getProjectsbyId,
  getAllProjects,
  updateProjectById,
  deleteProjectById,
};
