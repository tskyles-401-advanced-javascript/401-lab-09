'use strict';

const mongoose = require('mongoose');

const products = mongoose.Schema({
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
});

products.virtual('category', {
  ref: 'categories',
  localField: 'name',
  foreignField: 'name',
  justOne: false,
});

products.pre('findOne', function(){
  try {
    this.populate('category');
  }
  catch(e) {console.error('find error', e);}
});

module.exports = mongoose.model('products', products);