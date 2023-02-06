const validateTypeAndLength = (token) => token.length === 16 && typeof token === 'string';

const validateToken = (req, res, next) => {
  const token = req.header('authorization');
  if (!token) {
    return res.status(401).json({ message: 'Token não encontrado' });
  }
  if (!validateTypeAndLength(token)) {
    return res.status(401).json({ message: 'Token inválido' });
  }
  return next();
};

module.exports = validateToken;
