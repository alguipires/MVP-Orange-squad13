const { Projects } = require('../db/models');

const createProjectPostService = async (
  title,
  tag,
  url,
  description,
  userId
) => {
  try {
    const newProject = await Projects.create({
      title,
      tag,
      url,
      description,
      userId,
    });

    return { status: 'CREATED', data: { title } };
  } catch (error) {
    return { status: 'INTERNAL_ERROR', data: { message: error.message } };
  }
};

const getProjectByIdService = async (userId) => {
  try {
    const projects = await Projects.findAll({ where: { userId } });
    if (!projects) {
      return { status: 'NOT_FOUND', data: [] };
    } 
    return { status: 'SUCCESSFUL', data: projects };
  } catch (error) {
    return { status: 'INTERNAL_ERROR', data: { message: error.message } };
  }
};

const getAllProjectService = async () => {
  try {
    const project = await Projects.findAll(); // trocar {}
    if (project === null) {
      console.log('Not found!');
    } else {
      console.log(project instanceof Projects); // true
    }

    return { status: 'SUCCESSFUL', data: { project } };
  } catch (error) {
    return { status: 'INTERNAL_ERROR', data: { message: error.message } };
  }
};

const updateProjectByIdService = async (
  title,
  tag,
  url,
  description,
  projectId,
  userId
) => {
  try {
    const existingProject = await Projects.update(
      { title, tag, url, description }, // Valores a serem atualizados
      { where: { id: projectId, userId: userId } } // Condição de busca
    );

    if (existingProject == 0) {
      return {
        status: 'NOT_FOUND_2',
        data: { message: 'Projeto não encontrado' },
      };
    }

    return { status: 'SUCCESSFUL', data: existingProject };
  } catch (error) {
    return { status: 'INTERNAL_ERROR', data: { message: error.message } };
  }
};

const deleteProjectByIdService = async (projectId, userId) => {
  try {
    const existingProject = await Projects.destroy(
      { where: { id: projectId, userId: userId } } // Condição de busca
    );

    if (existingProject == 0) {
      return {
        status: 'NOT_FOUND_2',
        data: { message: 'Projeto não encontrado' },
      };
    }

    return { status: 'SUCCESSFUL', data: existingProject };
  } catch (error) {
    return { status: 'INTERNAL_ERROR', data: { message: error.message } };
  }
};

module.exports = {
  createProjectPostService,
  getProjectByIdService,
  getAllProjectService,
  updateProjectByIdService,
  deleteProjectByIdService,
};
