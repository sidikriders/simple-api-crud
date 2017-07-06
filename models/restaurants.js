var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var restaurantSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  owner: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  }
})

var restaurant = mongoose.model('restaurant', restaurantSchema);

module.exports = restaurant;
