/* const express = require('express');
const cors = require('cors');
const { login, createUser } = require('./routes');

const app = express();

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(express.json());

app.use('/login', login);
app.use('/user', createUser);

app.get('/', (req, res) => {
  res.status(200).send('');
});

module.exports = app;
 */

// const express = require('express');
// const routes = require('./routes/index.js');

// const app = express();

// app.use(express.json());

// routes(app);

// module.exports = app;

const express = require('express');
const cors = require('cors');
const routes = require('./routes/index.js');

const app = express();

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(express.json());

routes(app);

module.exports = app;
