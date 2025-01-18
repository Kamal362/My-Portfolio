
const express = require('express');
const Router = express.Router();
const Controller = require('../Controller/Controller');


Router.get('/', Controller.getHomePage)

Router.get('/about', Controller.getAboutPage);

Router.get('/contact', Controller.getContactPage);

Router.get('/experience', Controller.getProjectsPage);

module.exports = {
    Router
}