module.exports = function(app) {
  var ibanCalc = require('../controllers/ibanCalc.server.controller');
  app.get('/ibanCalc', ibanCalc.render);
}
