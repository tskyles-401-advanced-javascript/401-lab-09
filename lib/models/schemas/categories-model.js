'use strict';

const mongoose = require('mongoose');

let categories = mongoose.Schema({
  name: { type: String, require: true },
}, { toObject: { virtuals: true }, toJSON: {virtuals: true}});

categories.virtual('all_Products', {
  ref: 'products',
  localField: 'name',
  foreignField: 'name',
  justOne: false,
});

categories.pre('findOne', function(){
  try {
    this.populate('all_Products');
  }
  catch(e) {console.error('find error', e);}
});

module.exports = mongoose.model('categories', categories);