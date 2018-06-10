const express = require('express');

const bodyParser = require('body-parser');

const restaurantRoutes = require('./routes/restaurant');
const app = express();

//body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));


//express static files
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));

//set view engine
app.set('view engine', 'ejs');

// home route
app.get('/', function(req,res){
  res.send('home');
});

/// api routes
app.use('/restaurants', restaurantRoutes);



// define the port
app.listen(3000, function (req,res) {
    console.log(" server started at 3000")
});