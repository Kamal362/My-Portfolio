const bodyParser = require('body-parser');
const express = require('express');
const Router = express.Router();
const Controller = require('../Controller/Controller');


Router.get('/', Controller.getHomePage)
      .post('/', Controller.postFormData);

// Router.get('/about', Controller.getAboutPage);

// Router.get('/contact', Controller.getContactPage);

// Router.get('/experience', Controller.getProjectsPage);

module.exports = {
    Router
}