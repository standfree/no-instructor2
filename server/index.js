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

// app.use(express.static(__dirname + 'client'));
app.use(express.static('client'));
app.use(bodyParser.json());
app.use(cors());

// MASSIVE
// ============================================================

const connectionString = config.MASSIVE_URI;

massive(connectionString).then( db => {
  app.set('db', db);
})

// USER ENDPOINTS
// ============================================================
// app.get('api/users', function(req, res, next) {
  
app.get('/survivor-stories', (req, res, next) => 
  req.app.get('db').get_all_users().then( users => {
    res.status(200).send(users);
  })
)

app.get('/', (req, res) => res.send('Hello World!'))

// LISTEN
// ============================================================
app.listen(config.serverPort, function() {
  console.log('listening on port', config.serverPort);
})