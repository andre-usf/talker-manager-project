const validateLogin = require('./validateLogin');
const validateToken = require('./validateToken');
const validateName = require('./validateName');
const validateAge = require('./validateAge');
const { validateTalk, validateTalkRate } = require('./validateTalk');

module.exports = {
  validateLogin,
  validateToken,
  validateName,
  validateAge,
  validateTalk,
  validateTalkRate,
};
