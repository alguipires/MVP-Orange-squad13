const express = require("express");
const cors = require('cors');
const { login, createUser } = require('./routes')

const app = express();

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200, 
};

app.use(cors(corsOptions));

app.use(express.json());

app.use('/login', login)
app.use('/user', createUser)
app.use('/user', createUser)

app.get("/", (req, res) => {
    res.status(200).send("Running port 3001...");
  });

module.exports = app;