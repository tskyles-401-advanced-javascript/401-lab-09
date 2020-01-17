'use strict';

/**
 *
 *
 * @class Model
 */
class Model {
  constructor(schema){
    this.schema = schema;
  }

  /**
  *
  * get records as a whole, or a single record from database
  * @param {*} _id
  * @memberof Model
  */
  get(_id){
    if(_id){
      return this.schema.findOne( {_id} );
    }
    else return this.schema.find({});
  }
  /**
 *
 * save a record to a database
 * @param {*} record
 * @memberof Model
 */
  post(record){
    let newObject = new this.schema(record);
    return newObject.save();
  

  }
  
  /**
 *
 * update a record in a database
 * @param {*} _id
 * @param {*} record
 * @memberof Model
 */
  put(_id, record){
    if(_id && record){
      return this.schema.findByIdAndUpdate(_id, record, {new: true});
    }
    else {
      return undefined;
    }
  }
  /**
 *
 * delete a record from a database
 * @param {*} _id
 * @memberof Model
 */
  delete(_id){
    if(_id){
      return this.schema.findByIdAndDelete(_id);
    }
    else {
      return 'could not find record...';
    }
  }
}

/** 
 * @module Model
*/
module.exports = Model;
