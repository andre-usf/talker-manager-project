const fs = require('fs').promises;

const readFile = async (path) => {
  const file = await fs.readFile(path, 'utf-8');
  return JSON.parse(file);
};

const writeFile = async (path, file) => fs.writeFile(path, JSON.stringify(file));

module.exports = {
  readFile,
  writeFile,
};
