const express = require('express');

const { getAllTalkers, getTalkerById, writeFile, 
  getLastTalkerId, editFile, deleteTalkerInFile } = require('./talkerManager');
const generateToken = require('./generateToken');
const validateLogin = require('./middlewares/validateLogin');
const validateToken = require('./middlewares/validateToken');
const validateName = require('./middlewares/validateName');
const validateAge = require('./middlewares/validateAge');
const { validateTalk, validateTalkRate } = require('./middlewares/validateTalk');

const app = express();
app.use(express.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Online');
});

app.get('/talker', async (_req, res) => {
  const talkers = await getAllTalkers();
  return res.status(200).json(talkers);
});

app.get('/talker/:id', async (req, res) => {
  const { id } = req.params;
  const [talker] = await getTalkerById(Number(id));
  if (!talker) return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  return res.status(200).json(talker);
});

app.post('/login', validateLogin, async (_req, res) => {
  const token = await generateToken();
  return res.status(200).json({ token });
});

app.post('/talker', validateToken, validateName, 
validateAge, validateTalk, validateTalkRate, async (req, res) => {
  const { name, age, talk } = req.body;
  const { watchedAt, rate } = talk;
  const id = await getLastTalkerId() + 1;
  const talker = { name, age, id, talk: { watchedAt, rate } };
  await writeFile(talker);
  return res.status(201).json({ age, id, name, talk: { watchedAt, rate } });
});

app.put('/talker/:id', validateToken, validateName, 
validateAge, validateTalk, validateTalkRate, async (req, res) => {
  const { id } = req.params;
  const numberId = Number(id);
  const { name, age, talk } = req.body;
  const { watchedAt, rate } = talk;
  const talker = { name, age, id: numberId, talk: { watchedAt, rate } };
  await editFile(talker, numberId);
  return res.status(200).json({ age, id: numberId, name, talk: { watchedAt, rate } });
});

app.delete('/talker/:id', validateToken, async (req, res) => {
  const id = Number(req.params.id);
  await deleteTalkerInFile(id);
  return res.status(204).end();
});
