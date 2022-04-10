
// load configuration (development.js or production.js) based on environment
// process.env is a global variable that access predefined env variables
module.exports = require('./env/' + process.env.NODE_ENV + '.js')
