const express = require('express');
const login = require('./login');
const user = require('./user');
const project = require('./project');

const routes = (app) => {
  app
    .route('/')
    .get((req, res) => res.status(200).send('Running port 3001...'));

  app.use(express.json(), login, user, project);
};

module.exports = routes;
