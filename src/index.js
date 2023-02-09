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

app.post('/login', validateLogin, async (_req, res) => {
  const token = await generateToken();
  return res.status(200).json({ token });
});
