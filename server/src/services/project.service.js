const { url } = require('inspector');
const { Projects } = require('../db/models');
const fs = require('fs'); //import filesystem

const createProjectPostService = async (
  title,
  tag,
  url,
  description,
  userId,
  userUuid
) => {
  try {
    const newProject = await Projects.create({
      title,
      tag,
      url,
      description,
      userId,
      userUuid,
    });

    return { status: 'SUCCESSFUL', data: newProject };
  } catch (error) {
    return { status: 'INTERNAL_ERROR', data: { message: error.message } };
  }
};

const getProjectByIdService = async (userUuid) => {
  try {
    const projects = await Projects.findAll({ where: { userUuid } });
    if (!projects) {
      return { status: 'NOT_FOUND', data: [] };
    }
    return { status: 'SUCCESSFUL', data: projects };
  } catch (error) {
    return { status: 'INTERNAL_ERROR', data: { message: error.message } };
  }
};

const getProjectByGoogleId = async (userUuid) => {
  try {
    const projects = await Projects.findAll({ where: { userUuid } });
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
    const projects = await Projects.findAll(); // trocar {}
    if (!projects) {
      return { status: 'NOT_FOUND', data: [] };
    }
    return { status: 'SUCCESSFUL', data: projects };
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

    if (existingProject === 0) {
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

const deleteProjectByIdService = async (projectId, getPayload) => {
  try {
    const project = await Projects.findOne({ where: { id: projectId } });
    console.log('projetos service....', project);

    // Valida se existe o projeto
    if (!project) {
      return {
        status: 'NOT_FOUND_2',
        data: { message: 'Projeto não encontrado' },
      };
    }

    // Valida se o usuário ou a função correspondem
    if (
      project.userUuid === getPayload.userUuid ||
      getPayload.role === 'admin'
    ) {
      console.log('deletissss....');

      // Remove arquivo local assíncrono
      fs.unlinkSync(project.url);

      // Remove do banco de dados
      await Projects.destroy({ where: { id: projectId } });

      return {
        status: 'SUCCESSFUL',
        data: { message: 'Projeto excluído com sucesso' },
      };
    } else {
      return {
        status: 'UNAUTHORIZED',
        data: { message: 'Usuário não autorizado a excluir este projeto' },
      };
    }
  } catch (error) {
    return { status: 'INTERNAL_ERROR', data: { message: error.message } };
  }
};

module.exports = {
  createProjectPostService,
  getProjectByIdService,
  getProjectByGoogleId,
  getAllProjectService,
  updateProjectByIdService,
  deleteProjectByIdService,
};
