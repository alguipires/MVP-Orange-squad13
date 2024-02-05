const mapStatusHTTP = require('../utils/mapStatusHTTP.js');
const projectService = require('../services/project.service.js');

const createProjects = async (req, res) => {
  const userId = req.getPayload.id;
  const userUuid = req.getPayload.uuid;

  console.log('LOGG REQ file>>>> ', req.file);

  // pegando o fieldname "imgFile" e extraindo o file e path
  // const imgFile = req.file.path; //antigo
  const { filename: key } = req.file;
  const imgFile = key;
  console.log('log imgfile...... ', imgFile); //TODO retirar

  const { title, tag, description, url } = req.body;

  console.log('req body....> ', title, tag, description, url);

  /*  const { status, data } = await projectService.createProjectPostService(
    title,
    tag,
    url,
    imgFile,
    description,
    userId,
    userUuid
  );
  return res.status(mapStatusHTTP(status)).json(data); */
};

const getAllProjects = async (req, res) => {
  const page = parseInt(req.query.page) || 1; // Página atual padrão
  const pageSize = parseInt(req.query.pageSize) || 10; // Tamanho da página padrão

  const { status, data } = await projectService.getAllProjectService(
    page,
    pageSize
  );
  return res.status(mapStatusHTTP(status)).json(data);
};

const getProjectsbyUserId = async (req, res) => {
  const getPayload = req.getPayload;
  const page = parseInt(req.query.page) || 1; // Página atual padrão
  const pageSize = parseInt(req.query.pageSize) || 10; // Tamanho da página padrão

  const { status, data } = await projectService.getProjectByUserIdService(
    getPayload,
    page,
    pageSize
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

const updateProjectById = async (req, res) => {
  const getPayload = req.getPayload;
  const projectId = req.params.id;
  let imgFile = null; // Inicialize a variável url como null

  // Verifique se há um arquivo enviado na requisição
  if (req.file !== undefined) {
    imgFile = req.file.path; // Se houver um arquivo, atualize a variável url
  }

  const { title, tag, description, url } = req.body;

  const { status, data } = await projectService.updateProjectByIdService(
    title,
    tag,
    url,
    imgFile,
    description,
    projectId,
    getPayload
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

const deleteProjectByGoogleId = async (req, res) => {
  const token = req.headers.authorization;
  const projectId = req.params.id;
  const uuid = req.query.uuid
  
  const { status, data } = await projectService.deleteProjectByGoogleIdService(uuid, projectId, token);
  return res.status(mapStatusHTTP(status)).json(data);
}

module.exports = {
  createProjects,
  getProjectsbyUserId,
  getProjectsbyId,
  getAllProjects,
  updateProjectById,
  deleteProjectById,
  deleteProjectByGoogleId,
};
