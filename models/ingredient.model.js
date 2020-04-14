'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ingredientSchema = new Schema({
  name: String,
  quantity: Number,
  price: Number,
  category: String,
  img: String
});

module.exports = mongoose.model('ingredient', ingredientSchema);

