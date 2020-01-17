'use strict';

const mongoose = require('mongoose');

require('./categories-schema');

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
/** 
 * @module productSchema
*/
module.exports = mongoose.model('products', products);