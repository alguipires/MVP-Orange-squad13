const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;
const JWT_CONFIG = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const createToken = (payload) => jwt.sign(payload, secret, JWT_CONFIG);

const getPayload = (token) => jwt.verify(token, secret);

module.exports = {
  createToken,
  getPayload,
};