const { readFile, writeFile } = require('./utils/readAndWriteFile');

const PATH = './src/talker.json';

const getAllTalkers = async () => {
  const talkers = await readFile(PATH);
  return talkers;
};

const getTalkerBySearch = async (search) => {
  const originalFileArray = await readFile(PATH);
  const result = originalFileArray.filter((talker) => talker.name.includes(search));
  return result;
};

const getTalkerById = async (id) => {
  const talkers = await readFile(PATH);
  const talkersById = talkers.filter((talker) => talker.id === id);
  return talkersById;
};

const getLastTalkerId = async () => {
  const talkersArray = await readFile(PATH);
  const lastId = talkersArray[talkersArray.length - 1].id;
  return lastId;
};

const writeTalkerInFile = async (talker) => {
  const originalFileArray = await readFile(PATH);
  originalFileArray.push(talker);
  const file = await writeFile(PATH, originalFileArray);
  return file;
};

const editTalkerInFile = async (talker, id) => {
  const originalFileArray = await readFile(PATH);
  const index = originalFileArray.findIndex((t) => t.id === id);
  originalFileArray[index] = { id, ...talker };
  const file = await writeFile(PATH, originalFileArray);
  return file;
};

const deleteTalkerInFile = async (id) => {
  const originalFileArray = await readFile(PATH);
  const talker = originalFileArray.find((t) => t.id === id);
  if (talker) {
    const index = originalFileArray.indexOf(talker);
    originalFileArray.splice(index, 1);
  }
  const file = await writeFile(PATH, originalFileArray);
  return file;
};

module.exports = {
  getAllTalkers,
  getTalkerById,
  getLastTalkerId,
  writeTalkerInFile,
  editTalkerInFile,
  deleteTalkerInFile,
  getTalkerBySearch,
};
