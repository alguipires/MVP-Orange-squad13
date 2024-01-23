const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).send("Running port 3001...");
  });

module.exports = app;