const verifyToken = require('../auth/authfunction');

const tokenVerify = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }

  const token = authorization.split(' ')[1];

  try {
    const validate = verifyToken.getPayload(token);
  
    if (!validate) {
      return res.status(401).json({ message: 'Token must be a valid token' });
    }
  
    req.getPayload = validate;
  
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }
};

module.exports = tokenVerify;
