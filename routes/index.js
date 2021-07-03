const routes = require('express').Router();

const proveActivities = require('./routesProve');


routes
       
        .use('/proveActivities', proveActivities)
       
        .get('/', (req, res, next) => {
            
            res.render('pages/index', {title: 'Welcome to my CSE341 repo', path: '/'});
        })
        .use((req, res, next) => {
            
            res.render('pages/404', {title: '404 - Page Not Found', path: req.url})
        })

module.exports = routes;