const { createToken } = require('../auth/authfunction');
const { hashSync } = require('bcryptjs');
const uuid = require('uuid');
const { Users } = require('../db/models');
const { getProjectByIdService, getProjectByGoogleId } = require('./project.service');
const getRandomImageUrl = require('../utils/randonImg');
const imgRandonDb = require('../assets/img/imgRandonDb');

const createPostService = async (firstName, lastName, email, password) => {
  try {
    const user = await Users.findOne({ where: { email } });
    if (user) {
      return { status: 'CONFLICT', data: { message: 'Email already exists' } };
    }

    const avatar = getRandomImageUrl(imgRandonDb);
    const uuidv4 = uuid.v4();
    const uuidvStandard = uuidv4.replace(/-/g, '');
    const passwordHash = hashSync(password, 10);

    const newUser = await Users.create({
      uuid: uuidvStandard,
      firstName,
      lastName,
      avatar,
      email,
      password: passwordHash,
    });

    const { password: _, ...userWithoutPassword } = newUser.dataValues;

    const token = createToken(userWithoutPassword);

    return { status: 'CREATED', data: { token } };
  } catch (error) {
    console.log(error)
    return { status: 'INTERNAL_ERROR', data: { message: 'Erro interno do servidor' } };
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
      uuid: password,
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
    console.log(error)
    return { status: 'INTERNAL_ERROR', data: { message: 'Erro interno do servidor' } };
  }
};

const getUserByUuidService = async (userUuid) => {
  try {
    const user = await Users.findOne({
      where: { uuid: userUuid },
      attributes: { exclude: ['password'] }
    });
    if (!user) {
      return { status: 'NOT_FOUND', data: [] };
    }
    return { status: 'SUCCESSFUL', data: user };
  } catch (error) {
    return { status: 'INTERNAL_ERROR', data: { message: error.message } };
  }
};

const projectWhitIdService = async (userUuid) => {
  try {
    const {status, data} = await getProjectByIdService(userUuid);
    return { status, data};
  } catch (error) {
    return { status: "INTERNAL_ERROR", data: { message: error.message } }
  }
}

const projectsWhitGoogleService = async (token, uuid) => {
  if (!token) return { status: 'UNAUTHORIZED', data: { message: 'Invalid token' } };

  if (!uuid) return { status: 'UNAUTHORIZED', data: { message: 'Id is required' } };

  try {
    console.log('uuid', uuid);
    const user = await Users.findOne({ where: { uuid } })
    console.log('user', user);
    if (!user) {
      return { status: 'UNAUTHORIZED', data: { message: 'Invalid id' } };
    }
  
    const { status, data } = await getProjectByGoogleId(uuid);
      
  
    return { status, data };
  } catch (error) {
    console.log(error)
    return { status: 'INTERNAL_ERROR', data: { message: 'Erro interno do servidor' } };
  }
};

module.exports = {
  createPostService,
  createUserWithGooglePostService,
  projectsWhitGoogleService,
  projectWhitIdService,
  getUserByUuidService,
};
