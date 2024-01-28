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

module.exports = {
  createProjectPostService,
};
