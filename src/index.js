const express = require('express');
const talkerRoutes = require('./routes/talkerRoutes');

const generateToken = require('./utils/generateToken');
const { 
  validateLogin, 
} = require('./middlewares');

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

app.use('/talker', talkerRoutes);

// app.get('/talker', async (_req, res) => {
//   const talkers = await getAllTalkers();
//   return res.status(200).json(talkers);
// });

// app.get('/talker/search', validateToken, async (req, res) => {
//   const { q } = req.query;
//   const search = await getTalkerBySearch(q);
//   if (!search || search.length === 0) {
//     const allTalkers = await getAllTalkers();
//     return res.status(200).json(allTalkers);
//   }
//   return res.status(200).json(search);
// });

// app.get('/talker/:id', async (req, res) => {
//   const { id } = req.params;
//   const [talker] = await getTalkerById(Number(id));
//   if (!talker) return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
//   return res.status(200).json(talker);
// });

app.post('/login', validateLogin, async (_req, res) => {
  const token = await generateToken();
  return res.status(200).json({ token });
});

// app.post('/talker', validateToken, validateName, 
// validateAge, validateTalk, validateTalkRate, async (req, res) => {
//   const { name, age, talk } = req.body;
//   const { watchedAt, rate } = talk;
//   const id = await getLastTalkerId() + 1;
//   const talker = { name, age, id, talk: { watchedAt, rate } };
//   await writeTalkerInFile(talker);
//   return res.status(201).json({ age, id, name, talk: { watchedAt, rate } });
// });

// app.put('/talker/:id', validateToken, validateName, 
// validateAge, validateTalk, validateTalkRate, async (req, res) => {
//   const { id } = req.params;
//   const numberId = Number(id);
//   const { name, age, talk } = req.body;
//   const { watchedAt, rate } = talk;
//   const talker = { name, age, id: numberId, talk: { watchedAt, rate } };
//   await editTalkerInFile(talker, numberId);
//   return res.status(200).json({ age, id: numberId, name, talk: { watchedAt, rate } });
// });

// app.delete('/talker/:id', validateToken, async (req, res) => {
//   const id = Number(req.params.id);
//   await deleteTalkerInFile(id);
//   return res.status(204).end();
// });
