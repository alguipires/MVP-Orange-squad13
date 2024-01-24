const validLogin = (req, res, next) => {
  const { email, password } = req.body;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const validEmail = emailRegex.test(email);
  const validPassword = password.length >= 6;

  if (!email) {
    return res.status(400).json({ message: '"email" is required' });
  }

  if (!validEmail) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }

  if (!password) {
    return res.status(400).json({ message: '"password" is required' });
  }

  if (!validPassword) {
    return res.status(400).json({
      message: '"password" length must be 6 characters long',
    });
  }

  next();
};

module.exports = validLogin;
