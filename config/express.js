var config = require('./config'),
  express = require('express');

function readRoutes(app) {
  require('../app/routes/index.server.routes.js')(app);
}

module.exports = function() {
  var app = express();

  app.set('views', './app/views');
  app.set('view engine', 'ejs');

  readRoutes(app);

  app.use(express.static('./public'));

  return app;
};
