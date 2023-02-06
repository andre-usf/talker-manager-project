const express = require('express');

const { getAllTalkers, getTalkerById } = require('./talkerManager');
const generateToken = require('./generateToken');
const validateLogin = require('./middlewares/validateLogin');
const validateToken = require('./middlewares/validateToken');
const validateName = require('./middlewares/validateName');

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

app.post('/talker', validateToken, validateName, async (_req, res) => {
  return res.status(200).json({ oi: 'oi' });
});
