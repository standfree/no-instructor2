// REQUIRE DEPENDENCIES
// ============================================================
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const path = require('path');

// CONFIG
// ============================================================
const config = require('./config');

// INITILIZE APP (invoking Express)
// ============================================================
const app = express();

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

app.get('/survivor-stories', function(req, res) {
  res.sendFile(path.join(__dirname, '../client/views', 'survivor-stories.html'));
})

// API 
// ============================================================
// app.get('/api/survivor-stories', (req, res, next) =>
//   app.get('db').get_all_stories().then(stories => {
//     res.status(200).json(stories);
//   })
// );

app.get('/api/survivor-stories', (req, res, next) =>
  app.get('db').get_random_story().then(story => {
    res.status(200).json(story);
  })
);

// LISTEN
// ============================================================
app.listen(config.serverPort, function() {
  console.log('express server listening on port', config.serverPort);
});
