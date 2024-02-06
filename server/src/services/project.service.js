const { url } = require('inspector');
const { Projects, Users } = require('../db/models');
const fs = require('fs'); //import filesystem
const aws = require('@aws-sdk/client-s3');
const s3 = new aws.S3();

const createProjectPostService = async (
  title,
  tag,
  url,
  imgFile,
  imgName,
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
      imgName,
      description,
      userId,
      userUuid,
    });

    return { status: 'SUCCESSFUL', data: newProject };
  } catch (error) {
    return { status: 'INTERNAL_ERROR', data: { message: error.message } };
  }
};

const createProjectPostServiceWithGoogle = async (
  title,
  tag,
  url,
  imgFile,
  imgName,
  description,
  userUuid,
  token
) => {
  try {
    if (!token) {
      return { status: 'UNAUTHORIZED', data: { message: 'Token não fornecido' } };
    }

    if (!userUuid) {
      return { status: 'BAD_REQUEST', data: { message: 'userUuid não fornecido' } };
    }

    if (!title) {
      return { status: 'BAD_REQUEST', data: { message: 'title não fornecido' } };
    }

    const user = await Users.findOne({ where: { uuid: userUuid } });
  
    const newProject = await Projects.create({
      title,
      tag,
      url,
      imgFile,
      imgName,
      description,
      userId: user.id,
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

    // console.log('array de projetos... ', projects); //TODO retirar

    // Converter o caminho do arquivo em base64
    // projects.rows.forEach((project) => {
    //   console.log('convertendo...>  imgpath:', project.imgFile);
    //   const imgFilePath = project.imgFile; // Supondo que imgFile contenha o caminho do arquivo
    //   // const base64Img = fs.readFileSync(imgFilePath).toString('base64');
    //   // const base64Img = await fs.readFile(imgFilePath, {encoding: 'base64'});
    //   const base64Img = fs.readFileSync(imgFilePath, { encoding: 'base64' });
    //   console.log('img base64: ', base64Img);
    //   project.imgFile = base64Img;
    // });

    return { status: 'SUCCESSFUL', data: projects };
  } catch (error) {
    return { status: 'INTERNAL_ERROR', data: { message: error.message } };
  }
};

const getProjectByUserIdService = async (getPayload, page, pageSize) => {
  const offset = (page - 1) * pageSize;
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
  description,
  projectId,
  getPayload,
  imgFile,
  imgName
) => {
  try {
    const project = await Projects.findOne({ where: { id: projectId } });

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
      const projectToUpdate = {}; // Objeto para armazenar os campos a serem atualizados

      // Verifique quais campos foram fornecidos na solicitação e adicione-os ao objeto de atualização
      if (title) projectToUpdate.title = title;
      if (tag) projectToUpdate.tag = tag;
      if (imgFile) projectToUpdate.imgFile = imgFile;
      if (imgName) projectToUpdate.imgName = imgName;
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
        status: 'BAD_REQUEST',
        data: { message: 'projectId não fornecido' },
      };
    }

    if (!token) {
      return {
        status: 'UNAUTHORIZED',
        data: { message: 'Token não fornecido' },
      };
    }

    const project = await Projects.findOne({ where: { id: projectId } });

    if (!project) {
      return {
        status: 'NOT_FOUND_2',
        data: { message: 'Projeto não encontrado' },
      };
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
};

module.exports = {
  createProjectPostService,
  createProjectPostServiceWithGoogle,
  getProjectByUserIdService,
  getProjectByIdService,
  getProjectByGoogleId,
  getAllProjectService,
  updateProjectByIdService,
  deleteProjectByIdService,
  deleteProjectByGoogleIdService,
};
