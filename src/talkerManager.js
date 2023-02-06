const fs = require('fs').promises;

const readFile = async () => {
  const file = await fs.readFile('./src/talker.json', 'utf-8');
  return JSON.parse(file);
};

const getAllTalkers = async () => {
  const talkers = await readFile();
  return talkers;
};

const getTalkerById = async (id) => {
  const talkers = await readFile();
  const talkersById = talkers.filter((talker) => talker.id === id);
  return talkersById;
};

module.exports = {
  getAllTalkers,
  getTalkerById,
};
