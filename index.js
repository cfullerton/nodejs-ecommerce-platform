var app = require('express')();
var server = require('http').createServer(app);
var mongoose = require('mongoose');
var productSchema = mongoose.Schema({
    code: String,
    fields: {}
});
var Product = mongoose.model('Product', productSchema);
app.set('views', './views');
app.set('view engine', 'jade');
var newProduct = require('new-product');
newProduct({code:"testProd4",name:"test product",price:"1.00"},Product);
app.get('/product/:productCode', function(req, res) {
    var getProduct = require("get-product");
	var productInfo = getProduct('testProd4',Product);
	console.log(productInfo);
    res.render('prod', {
            title: 'Hey',
            message: "Name: " + productInfo.fields.name
    });
});
server.listen(8081);


