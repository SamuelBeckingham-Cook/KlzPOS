var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());

var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/KlzPOS');

var Order = mongoose.model('Order', {
    distributor: Number,
    items: [Number]
});

var Distributor = mongoose.model('Distributor', {
    accountNo: Number,
    firstName: String,
    lastName: String
});

app.get('/', function(req, res) {
    //Get "Enter dist number" page
});

//Get dist name for confirmation modal
app.get("/dist/:accountNo", function(req, res) {
    Distributor.findOne({account: req.params.accountNo}, function(err, distributor) {
        if (err) {
            return res.status(404).send(err)
        }

        res.status(200).json(distributor)
    })
});


app.get('/order/:accountNo', function(req, res) {
    //Get "Scan your items page"
});

app.get('/item/:itemNo', function(req, res) {
   //Get item when barcode scanned
});

//Submit order object
app.post("/order", function(req, res) {
    var order = new Order(req.body.orderData);
    order.save(function (err) {
        if (err) {
            res.status(404).send(err)
        }

        //Probably best to redirect to success page which auto directs to home.
        res.status(200).send('order submitted!')
    })

});

app.listen(3000);
