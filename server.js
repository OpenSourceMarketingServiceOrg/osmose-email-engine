'use strict';

console.log("Starting up OSMoSE Email Engine");

require('./utils/rootRequire')();
require('./utils/prodEnv')();
let express = require('express');
let http    = require('http');
let Router  = rootRequire('app/Router');
let app     = express();
let server  = http.createServer(app);

console.log("Initialized");

/**
* MIDDLEWARE
********************* */
require('./config/middleware')(app, express);

console.log("middleware loaded");

/**
* ROUTES
********************* */
app.use(rootRequire('utils/flash'));

Router.forEach(route => {
  app.use(route.path, route.handler);
});

app.use((req, res, next) => {
  res.status(404);
  res.render('global/404', {
    title: 'Page introuvable !',
  });
});

server.listen(8080);
console.log('Server started on localhost:8080\n');
