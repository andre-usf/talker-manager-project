const express = require('express');

const route = express.Router();

const { 
  getAllTalkers, 
  getTalkerById, 
  writeTalkerInFile, 
  getLastTalkerId, 
  editTalkerInFile, 
  deleteTalkerInFile, 
  getTalkerBySearch,
 } = require('../talkerManager');

 const { 
  validateToken, 
  validateName,
  validateAge, 
  validateTalk, 
  validateTalkRate,
} = require('../middlewares');

route.get('/', async (_req, res) => {
  const talkers = await getAllTalkers();
  return res.status(200).json(talkers);
});

route.get('/search', validateToken, async (req, res) => {
  const { q } = req.query;
  const search = await getTalkerBySearch(q);
  if (!search || search.length === 0) {
    const allTalkers = await getAllTalkers();
    return res.status(200).json(allTalkers);
  }
  return res.status(200).json(search);
});

route.get('/:id', async (req, res) => {
  const { id } = req.params;
  const [talker] = await getTalkerById(Number(id));
  if (!talker) return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  return res.status(200).json(talker);
});

route.post('/', validateToken, validateName, 
validateAge, validateTalk, validateTalkRate, async (req, res) => {
  const { name, age, talk } = req.body;
  const { watchedAt, rate } = talk;
  const id = await getLastTalkerId() + 1;
  const talker = { name, age, id, talk: { watchedAt, rate } };
  await writeTalkerInFile(talker);
  return res.status(201).json({ age, id, name, talk: { watchedAt, rate } });
});

route.put('/:id', validateToken, validateName, 
validateAge, validateTalk, validateTalkRate, async (req, res) => {
  const { id } = req.params;
  const numberId = Number(id);
  const { name, age, talk } = req.body;
  const { watchedAt, rate } = talk;
  const talker = { name, age, id: numberId, talk: { watchedAt, rate } };
  await editTalkerInFile(talker, numberId);
  return res.status(200).json({ age, id: numberId, name, talk: { watchedAt, rate } });
});

route.delete('/:id', validateToken, async (req, res) => {
  const id = Number(req.params.id);
  await deleteTalkerInFile(id);
  return res.status(204).end();
});
