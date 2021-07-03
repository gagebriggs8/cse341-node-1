const routes = require('express').Router();

routes.use('/prove11', require('./prove11/prove11'));

module.exports = routes;