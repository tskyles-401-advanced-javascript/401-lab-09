const DataModel = require('../models/mongo-model');
const schema = require('./schemas/categories-schema');

/**
 * model for categories
 * @class Categories
 * @extends {DataModel}
 */
class Categories extends DataModel {
  constructor() {
    super(schema);
  }
}

/** 
 * Categories model module
 * @module Categories
*/
module.exports = new Categories;