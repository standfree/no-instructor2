// REQUIRE DEPENDENCIES
// ============================================================
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const fetch = require('node-fetch');

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
  console.log('express server listening on port', config.serverPort);
})

// // REQUIRE DEPENDENCIES
// // ============================================================
// const express = require('express');
// const cors = require('cors');
// const morgan = require('morgan');
// const fetch = require('node-fetch');
// const massive = require('massive');
// const bodyParser = require('body-parser');

// // CONFIG
// // ============================================================
// const config = require('./config');
// const connectionString = config.MASSIVE_URI;
// // INITILIZE APP (invoking Express)
// // ============================================================
// const app = express();

// app.use(morgan('tiny'));
// app.use(cors());


// // USER ENDPOINTS
// // ============================================================
// // app.get('/users', (req, res) => {
// //   fetch(config.MASSIVE_URI)
// //   .then(response => response.json())
// //   .then(json => {
// //     res.json([]);
// //   });
// // });
// // console.log(config.MASSIVE_URI);
// app.get('/survivor-stories', (req, res, next) => 
//   req.app.get('db').get_all_users().then( users => {
//     res.status(200).send(users);
//   })
// )

// // HANDLERS
// // ============================================================
// function notFound(req, res, next) {
//   res.status(404);
//   const error = new Error('Not found');
//   next(error);
// }

// function errorHandler(error, req, res, next) {
//   res.status(res.statusCode || 500);
//   res.json({
//     message: error.message
//   })
// }

// app.use(notFound);
// app.use(errorHandler);
// // LISTEN
// // ============================================================
// app.listen(config.serverPort, function() {
//   console.log('listening on port', config.serverPort);
// })