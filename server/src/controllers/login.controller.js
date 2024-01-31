const mapStatusHTTP = require('../utils/mapStatusHTTP');
const { loginService } = require('../services');

const loginPost = async (req, res) => {
  const { email, password } = req.body;
  const { status, data } = await loginService.loginPostService(email, password);
  return res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
  loginPost,
};
