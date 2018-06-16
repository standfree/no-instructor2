// REQUIRE DEPENDENCIES
// ============================================================
var express = require('express');
var massive = require('massive');
var config = require('./config');

// INITILIZE APP
// ============================================================
var app = module.exports = express();

// // INITILIZE DEPENDENCIES
// // ============================================================
// app.use(bodyParser.json());

// VARIABLES
// ============================================================
var connectionString = config.MASSIVE_URI;

// LISTEN
// ============================================================
app.listen(config.serverPort, function() {
  console.log('listening on port', config.serverPort);
})