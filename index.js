var app = require('express')();
var server = require('http').createServer(app);

app.set('views', './views');
app.set('view engine', 'jade');
app.get('/product/:tagId', function (req, res) {
  res.render('prod', { title: 'Hey', message: req.params.tagId});
  var newProduct = require('new-product');
  newProduct({name:req.params.tagId});
});
server.listen(8081);   