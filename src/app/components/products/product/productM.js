const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  _id: {
    type: String,
    require: true,
  },
  nome: {
    type: String,
    require: true,
  },
  tags: {
    type: Array,
    require: true,
  },
  calorias: {
    type: String,
    require: true,
  },
  veg: {
    type: Boolean,
    default: false,
    require: true,
  },
  imgUrl: {
    type: String,
    require: true,
  },
  preco: {
    type: Number,
    require: true,
  },
  quantidade: {
    type: Number,
    require: true,
  },
})
  
  module.exports = mongoose.model("Product", ProductSchema);