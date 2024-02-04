const express = require('express');
const cors = require('cors');
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

module.exports = app;
