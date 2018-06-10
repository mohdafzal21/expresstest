const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/zomato_api');

mongoose.Promise = Promise;


module.exports.Restaurant = require('./restaurant');


