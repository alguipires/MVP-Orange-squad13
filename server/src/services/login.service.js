const { createToken, getPayload } = require('../auth/authfunction');
const { compare } = require('bcryptjs');
const { Users } = require('../db/models');
const firebaseConfig = require('../firebase/firebaseConfig');

const loginPostService = async (email, password) => {
  try {
    const user = await Users.findOne({ where: { email } })
  
    if (!user) return { status: 'UNAUTHORIZED', data: { message: 'Invalid email or password' } };
  
    const isValidPassword = await compare(password, user.password);
  
    if (!isValidPassword) {
      return { status: 'UNAUTHORIZED', data: { message: 'Invalid email or password' } };
    }
  
    const { password: _, ...userWithoutPassword } = user.dataValues;
  
    const token = createToken(userWithoutPassword);
  
    return { status: 'SUCCESSFUL', data: { token } };
    
  } catch (error) {
    return { status: "INTERNAL_ERROR", data: { message: error.message } }
  }
}

const loginWhitGoogleService = async (token) => {
  
  return {status: 'SUCCESSFUL', data: payLoad}
};

module.exports = {
  loginPostService,
  loginWhitGoogleService,
}