const express = require("express");
const { login } = require('./routes')

const app = express();

app.use(express.json());

app.use('/login', login)

app.get("/", (req, res) => {
    res.status(200).send("Running port 3001...");
  });

module.exports = app;