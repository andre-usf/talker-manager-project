const fs = require('fs').promises;

const getAllTalkers = async () => {
  const file = await fs.readFile('./src/talker.json', 'utf-8');
  return JSON.parse(file);
};

module.exports = {
  getAllTalkers,
};
