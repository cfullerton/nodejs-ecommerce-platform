var app = require('express')();
var server = require('http').createServer(app);
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("connected");
});
app.set('views', './views');
app.set('view engine', 'jade');
app.get('/product/:tagId', function (req, res) {
  res.render('prod', { title: 'Hey', message: req.params.tagId});
});
server.listen(8081);   