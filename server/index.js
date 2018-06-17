// REQUIRE DEPENDENCIES
// ============================================================
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var massive = require('massive');

// CONFIG
// ============================================================
var config = require('./config');

// INITILIZE APP (invoking Express)
// ============================================================

var app = module.exports = express();

// app.use(express.static(__dirname + './../dist'));
app.use(express.static(__dirname + 'public'));
app.use(bodyParser.json());
app.use(cors());

// MASSIVE
// ============================================================

var connectionString = config.MASSIVE_URI;

massive(connectionString).then( db => {
  app.set('db', db);
})

// USER ENDPOINTS
// ============================================================
app.get('/survivor-stories', function(req, res, next) {
  req.app.get('db').get_all_users().then( users => {
    res.status(200).send(users);
  })
})
// app.get('/', function (req, res) {
//   res.sendFile(path.join(__dirname,'public', 'index.html'));
// });

// LISTEN
// ============================================================
app.listen(config.serverPort, function() {
  console.log('listening on port', config.serverPort);
})