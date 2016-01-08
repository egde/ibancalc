var express = require('./config/express'),
  config = require('./config/config');

var app = express();
app.listen( config.port );
module.exports = app;

console.log('Server is running on port '+config.port);
