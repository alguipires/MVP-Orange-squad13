const express = require('express');
const cors = require('cors');
const path = require('path');
const { login, user, project } = require('./routes/index.js');

const app = express();

const corsOptions = {
  origin: process.env.CORS_URL,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(express.json());

app.use('/login', login);
app.use('/user', user);
app.use('/project', project);
app.use(
  '/files',
  express.static(path.resolve(__dirname, '..', 'public', 'uploads'))
);

module.exports = app;
