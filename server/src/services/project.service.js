const { url } = require('inspector');
const { Projects, Users } = require('../db/models');
const fs = require('fs'); //import filesystem
const { log } = require('console');

const createProjectPostService = async (
  title,
  tag,
  url,
  imgFile,
  description,
  userId,
  userUuid
) => {
  try {
    const newProject = await Projects.create({
      title,
      tag,
      url,
      imgFile,
      description,
      userId,
      userUuid,
    });

    return { status: 'SUCCESSFUL', data: newProject };
  } catch (error) {
    return { status: 'INTERNAL_ERROR', data: { message: error.message } };
  }
};

const getAllProjectService = async (page, pageSize) => {
  try {
    const offset = (page - 1) * pageSize;

    const projects = await Projects.findAndCountAll({
      include: [
        { model: Users, as: 'users', attributes: { exclude: ['password'] } },
      ],
      limit: pageSize,
      offset: offset,
    });

    console.log('array de projetos... ', projects); //TODO retirar

    return { status: 'SUCCESSFUL', data: projects };
  } catch (error) {
    return { status: 'INTERNAL_ERROR', data: { message: error.message } };
  }
};

const getProjectByUserIdService = async (getPayload, page, pageSize) => {
  const offset = (page - 1) * pageSize;
  // console.log('log,,, paylod... ', getPayload.uuid);
  // const uuid = getPayload.uuid;
  try {
    const projects = await Projects.findAndCountAll({
      where: { userUuid: getPayload.uuid },
      limit: pageSize,
      offset: offset,
    });
    if (!projects) {
      return { status: 'NOT_FOUND', data: [] };
    }
    return { status: 'SUCCESSFUL', data: projects };
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

const updateProjectByIdService = async (
  title,
  tag,
  url,
  imgFile,
  description,
  projectId,
  getPayload
) => {
  try {
    const project = await Projects.findOne({ where: { id: projectId } });
    // console.log('projetos service....', project);

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
      // console.log('updatisss....');

      const projectToUpdate = {}; // Objeto para armazenar os campos a serem atualizados

      // Verifique quais campos foram fornecidos na solicitação e adicione-os ao objeto de atualização
      if (title) projectToUpdate.title = title;
      if (tag) projectToUpdate.tag = tag;

      if (imgFile) {
        try {
          fs.unlinkSync(imgFile); // Tenta excluir o arquivo
          projectToUpdate.imgFile = imgFile;
        } catch (error) {
          console.error('Erro ao excluir arquivo:', error.message);
          // Se ocorrer um erro ao excluir o arquivo, apenas continue sem atualizar o imgFile
        }
      }

      if (description) projectToUpdate.description = description;
      if (url) projectToUpdate.url = url;

      // Verifique se há pelo menos um campo para atualizar
      if (Object.keys(projectToUpdate).length <= 0) {
        return {
          status: 'BAD_REQUEST',
          data: { message: 'Nenhum campo para atualizar fornecido' },
        };
      }

      // Atualize o projeto apenas se o usuário corresponder e o projeto for encontrado
      const [updatedRowsCount] = await Projects.update(projectToUpdate, {
        where: { id: projectId },
      });

      if (updatedRowsCount <= 0) {
        return {
          status: 'NOT_FOUND_2',
          data: { message: 'Projeto não encontrado ou usuário não autorizado' },
        };
      }

      return {
        status: 'SUCCESSFUL',
        data: { message: 'Projeto atualizado com sucesso' },
      };
    } else {
      return {
        status: 'UNAUTHORIZED',
        data: { message: 'Usuário não autorizado a atualizar este projeto' },
      };
    }
  } catch (error) {
    return { status: 'INTERNAL_ERROR', data: { message: error.message } };
  }
};

const deleteProjectByIdService = async (projectId, getPayload) => {
  try {
    const project = await Projects.findOne({ where: { id: projectId } });
    // console.log('projetos service....', project);

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
      // console.log('deletissss....');

      // Remove arquivo local assíncrono
      fs.unlinkSync(project.imgFile);

      // Remove do banco de dados
      await Projects.destroy({ where: { id: projectId } });

      return {
        status: 'DELETED',
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

const deleteProjectByGoogleIdService = async (uuid, projectId, token) => {
  try {
    if (!uuid) {
      return { status: 'BAD_REQUEST', data: { message: 'UUID não fornecido' } };
    }

    if (!projectId) {
      return {
        status: 'BAD_REQUEST', data: { message: 'projectId não fornecido' } };
    }

    if (!token) {
      return { status: 'UNAUTHORIZED', data: { message: 'Token não fornecido' } };
    }

    const project = await Projects.findOne({ where: { id: projectId } });

    if (!project) {
      return { status: 'NOT_FOUND_2', data: { message: 'Projeto não encontrado' } };
    }

    if (project.userUuid === uuid) {
  
      // Remove arquivo local assíncrono
      // fs.unlinkSync(project.imgFile);

      await Projects.destroy({ where: { id: projectId } });

      return { status: 'DELETED', data: [] };
    } else {
      return {
        status: 'UNAUTHORIZED',
        data: { message: 'Usuário não autorizado a excluir este projeto' },
      };
    }
  } catch (error) {
    return { status: 'INTERNAL_ERROR', data: { message: error.message } };
  }
}

module.exports = {
  createProjectPostService,
  getProjectByUserIdService,
  getProjectByIdService,
  getProjectByGoogleId,
  getAllProjectService,
  updateProjectByIdService,
  deleteProjectByIdService,
  deleteProjectByGoogleIdService,
};
