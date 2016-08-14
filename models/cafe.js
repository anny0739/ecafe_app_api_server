var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var goodsSchema = new Schema({
 // _id : Schema.ObjectId,
  name : String,
  desc : String,
  price : Number,
  reg_date : { type : Date, default : Date.now }

});

var Goods = mongoose.model('Goods', goodsSchema);

module.exports = mongoose.model('Goods', goodsSchema); 
