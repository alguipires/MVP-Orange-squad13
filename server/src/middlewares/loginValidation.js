const validLogin = (req, res, next) => {
  const { email, password } = req.body;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const validEmail = emailRegex.test(email);
  const validPassword = password.length >= 5;
  if (!validEmail || !validPassword) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }
  next();
};

export default validLogin;
