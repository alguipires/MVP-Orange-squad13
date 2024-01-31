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
