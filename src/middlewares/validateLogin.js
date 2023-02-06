const validateEmailRegex = (email) => {
  const regexEmail = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
  return regexEmail.test(email);
};

const validatePasswordLength = (password) => password.length >= 6;

const validateLogin = (req, res, next) => {
  const { email, password } = req.body;
  if (!email) {
    return res.status(400).json({ message: 'O campo "email" é obrigatório' });
  }
  if (!validateEmailRegex(email)) {
    return res.status(400).json({ message: 'O "email" deve ter o formato "email@email.com"' });
  }
  if (!password) {
    return res.status(400).json({ message: 'O campo "password" é obrigatório' });
  }
  if (!validatePasswordLength(password)) {
    return res.status(400).json({ message: 'O "password" deve ter pelo menos 6 caracteres' });
  }
  return next();
};

module.exports = validateLogin;
