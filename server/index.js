// REQUIRE DEPENDENCIES
// ============================================================
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
// const fetch = require('node-fetch');
const path = require('path');

// CONFIG
// ============================================================
const config = require('./config');

// INITILIZE APP (invoking Express)
// ============================================================

// const app = module.exports = express(); 
const app = express();
// app.use(express.static(__dirname));
// app.use(express.static(__dirname + 'client'));
app.use(express.static('client'));
app.use(bodyParser.json());
app.use(cors());

// MASSIVE
// ============================================================

const connectionString = config.MASSIVE_URI;

massive(connectionString).then(db => {
  app.set('db', db);
});

// USER ENDPOINTS
// ============================================================

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../client/views', 'index.html'));
});

app.get('/resources', function(req, res) {
  res.sendFile(path.join(__dirname, '../client/views', 'resources.html'));
});

app.get('/api/survivor-stories', (req, res, next) =>
  req.app.get('db').get_all_users().then(users => {
    res.status(200).send(users);
    // res.send(path.join(__dirname, '../client/views', 'survivor-stories.html'));
  })
);

// LISTEN
// ============================================================
app.listen(config.serverPort, function() {
  console.log('express server listening on port', config.serverPort);
});
