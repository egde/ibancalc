//Using 'development' as the default environment configuration
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
console.log('Using '+process.env.NODE_ENV);

module.exports = require('./env/'+process.env.NODE_ENV+'.js');
