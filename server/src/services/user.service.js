const { createToken } = require('../auth/authfunction');
const { hashSync } = require('bcryptjs');
const { Users } = require('../db/models');

const createPostService = async (firstName, lastName, email, password) => {
  try {
    const user = await Users.findOne({ where: { email } });
    if (user) {
      return { status: 'CONFLICT', data: { message: 'Email already exists' } };
    }

    const passwordHash = hashSync(password, 10);

    const newUser = await Users.create({
      firstName,
      lastName,
      email,
      password: passwordHash,
    });

    const { password: _, ...userWithoutPassword } = newUser.dataValues;

    const token = createToken(userWithoutPassword);

    return { status: 'CREATED', data: { token } };
  } catch (error) {
    return { status: 'INTERNAL_ERROR', data: { message: error.message } };
  }
};

const createUserWithGooglePostService = async ( firstName, lastName, email, password, avatar, token ) => {
  if (!token) {
    return { status: 'UNAUTHORIZED', data: { message: 'Unauthorized' } };
  }

  try {
    const user = await Users.findOne({ where: { email } });
    if (user) {
      return { status: 'CREATED', data: [] };
    }

    const passwordHash = hashSync(password, 10);

    const newUser = await Users.create({
      firstName,
      lastName,
      email,
      password: passwordHash,
      avatar,
    });

    const { password: _, ...userWithoutPassword } = newUser.dataValues;

    const token = createToken(userWithoutPassword);

    return { status: 'CREATED', data: { token } };
  } catch (error) {
    return { status: 'INTERNAL_ERROR', data: { message: error.message } };
  }
};

const projectsWhitGoogleService = async (token, email) => {
  if (!token) return { status: 'UNAUTHORIZED', data: { message: 'Invalid token' } };

  if (!email) return { status: 'UNAUTHORIZED', data: { message: 'Email is required' } };

  try {
    const user = await Users.findOne({ where: { email } })
  
    if (!user) {
      return { status: 'UNAUTHORIZED', data: { message: 'Invalid email' } };
    }
  
    const projectsByUser = getProjectByIdService(user.id);
      
  
    return {status: 'SUCCESSFUL', data: projectsByUser };
  } catch (error) {
    return { status: "INTERNAL_ERROR", data: { message: error.message } }
  }
};

module.exports = {
  createPostService,
  createUserWithGooglePostService,
  projectsWhitGoogleService,
};
