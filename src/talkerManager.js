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

const getLastTalkerId = async () => {
  const talkersArray = await readFile();
  const lastId = talkersArray[talkersArray.length - 1].id;
  return lastId;
};

const writeFile = async (talker) => {
  const originalFileArray = await readFile();
  originalFileArray.push(talker);
  const file = await fs.writeFile('./src/talker.json', JSON.stringify(originalFileArray));
  return file;
};

const editFile = async (talker, id) => {
  const originalFileArray = await readFile();

  for (let index = 0; index < originalFileArray.length; index += 1) {
    if (originalFileArray[index].id === id) {
      originalFileArray[index].name = talker.name;
      originalFileArray[index].age = talker.age;
      originalFileArray[index].talk.watchedAt = talker.talk.watchedAt;
      originalFileArray[index].talk.rate = talker.talk.rate;
    }
  }
  const file = await fs.writeFile('./src/talker.json', JSON.stringify(originalFileArray));
  return file;
};

const deleteTalkerInFile = async (id) => {
  const originalFileArray = await readFile();
  const talker = originalFileArray.find((t) => t.id === id);
  console.log(talker);
  if (talker) {
    console.log('entrou');
    const index = originalFileArray.indexOf(talker);
    originalFileArray.splice(index, 1);
  }
  console.log(originalFileArray);
  const file = await fs.writeFile('./src/talker.json', JSON.stringify(originalFileArray));
  return file;
};

module.exports = {
  getAllTalkers,
  getTalkerById,
  getLastTalkerId,
  writeFile,
  editFile,
  deleteTalkerInFile,
};
