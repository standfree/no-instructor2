// REQUIRE DEPENDENCIES
// ============================================================
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const massive = require('massive');

// CONFIG
// ============================================================
const config = require('./config');

// INITILIZE APP (invoking Express)
// ============================================================

const app = module.exports = express();

app.use(express.static(__dirname + './../dist'));
app.use(bodyParser.json());
app.use(cors());

// MASSIVE
// ============================================================

const connectionString = config.MASSIVE_URI;

massive(connectionString).then( db => {
  app.set('db', db);
})

// LISTEN
// ============================================================
app.listen(config.serverPort, function() {
  console.log('listening on port', config.serverPort);
})