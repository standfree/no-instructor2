// app.get('/', function(req, res) {
//   res.sendFile(path.join(__dirname, '../client/views', 'index.html'));
// });

// app.get('/resources', function(req, res) {
//   res.sendFile(path.join(__dirname, '../client/views', 'resources.html'));
// });

// app.get('/api/survivor-stories', (req, res, next) =>
//   req.app.get('db').get_all_users().then(users => {
//     res.status(200).send(users);
//     // res.send(path.join(__dirname, '../client/views', 'survivor-stories.html'));
//   })
// );

exports.home = function(req, res) {
  res.render(path.join(__dirname, '../client/views', 'test'), 
  {
    title: 'omg'
  });
};
