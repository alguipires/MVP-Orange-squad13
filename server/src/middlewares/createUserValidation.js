const userValitatioFirstAndLastName = (req, res, next) => {
  const { firstName, LastName } = req.body;
  if (!firstName) {
    return res.status(400).json({ 
      message: 'First name is required!' });
  }
  if (!LastName) {
    return res.status(400).json({ 
      message: 'Last name is required!' });
  }
  if (firstName.length < 2) { 
    return res.status(400).json({ 
      message: 'First name must be at least 2 characters long!' });
  }
  if (LastName.length < 2) {
    return res.status(400).json({ 
      message: 'Last name must be at least 2 characters long!' });
  }
  next();
};

const userValitationEmail = (req, res, next) => {
  const { email } = req.body;
  const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!email) { 
    return res.status(400).json({ message: '"email" is required' }); 
  }
  if (!regexEmail.test(email)) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }
  next();
};

const userValitationPassword = (req, res, next) => {
  const { password } = req.body;
  if (!password) { 
    return res.status(400).json({ message: '"password" is required' }); 
  }
  if (password.length < 6) {
    return res.status(400).json({ 
      message: '"password" length must be at least 6 characters long' });
  }
  next();
};

module.exports = {
  userValitatioFirstAndLastName,
  userValitationEmail,
  userValitationPassword,
};