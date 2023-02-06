const cripto = require('crypto');

function generateToken() {
  return cripto.randomBytes(8).toString('hex');
}

// Baseado na resolução do exercício da Trybe - Back-end, Seção 04, Dia 04.

module.exports = generateToken;
