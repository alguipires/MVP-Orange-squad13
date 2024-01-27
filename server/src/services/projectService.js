// const { createToken } = require('../auth/authfunction');
// const { hashSync } = require('bcryptjs');
const { Projects } = require('../db/models');

const createProjectPostService = async (
  title,
  tag,
  url,
  description,
  userId
) => {
  try {
    // const project = await Project.findOne({ where: { email } });
    // if (user) {
    //   return { status: 'CONFLICT', data: { message: 'Email already exists' } };
    // }

    // const passwordHash = hashSync(password, 10);

    const newProject = await Projects.create({
      title,
      tag,
      url,
      description,
      userId,
    });

    // const { password: _, ...userWithoutPassword } = newUser.dataValues;

    // const token = createToken(userWithoutPassword);

    return { status: 'CREATED', data: { title } };
  } catch (error) {
    return { status: 'INTERNAL_ERROR', data: { message: error.message } };
  }
};

module.exports = {
  createProjectPostService,
};
