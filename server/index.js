var express = require('express');
var massive = require('massive');
var app = module.exports = express();
var config = require('./config');
// var connectionString = "postgres://ckerstiens:@localhost/example";

// var db = massive.connectSync({connectionString : connectionString});

// db.users.find(1, function(err,res){
//   console.log(res);
// });

app.listen(config.serverPort, function() {
  console.log('listening on port', config.serverPort);
})