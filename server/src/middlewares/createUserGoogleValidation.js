const userTokenValidation = (req, res, next) => {
  const token  = req.headers.authorization;
  if (!token) { 
    return res.status(400).json({ message: '"token" is required' }); 
  }
  next();
}

const userValitationAvatar = (req, res, next) => {
  const { avatar } = req.body;
  if (!avatar) { 
    return res.status(400).json({ message: '"avatar" is required' }); 
  }
  if (avatar === '') { 
    return res.status(400).json({ message: '"avatar" is not allowed to be empty' }); 
  }
  if (!avatar.startsWith('https')) { 
    return res.status(400).json({ message: '"avatar" must be a valid URL' }); 
  }
  if (avatar.length < 8) { 
    return res.status(400).json({ message: '"avatar" length must be 8 characters long' }); 
  }
  next();
};

module.exports = [
  userTokenValidation,
  userValitationAvatar,
];