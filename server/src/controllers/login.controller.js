const mapStatusHTTP = require('../utils/mapStatusHTTP');
const { loginService } = require('../services');

const loginPost = async (req, res) => {
  const { email, password } = req.body;
  const { status, data } = await loginService.loginPostService(email, password);
  return res.status(mapStatusHTTP(status)).json(data);
};

const loginWhitGoogle = async (req, res) => {
  const token = req.headers.authorization.split(' ')[1];
  const { email } = req.body;
  const { status, data } = await loginService.loginWhitGoogleService(token, email);
  return res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
  loginPost,
  loginWhitGoogle,
};
