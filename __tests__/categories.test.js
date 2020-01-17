'use strict';

const { server } = require('../lib/server');
const supergoose = require('@code-fellows/supergoose');
const mockRequest = supergoose(server);

describe('categories routes', () => {

  it('should get() categories', () => {
    const obj = { name: 'test' };
    return mockRequest.post('/api/v1/categories')
      .send(obj)
      .then(results => {
        console.log(results.body);
        return mockRequest.get('/api/v1/categories')
          .then(data => {
            console.log(data.body);
            Object.keys(obj).forEach(key => {
              expect(data.body.results[0][key]).toEqual(obj[key]);
            });
          });
      });
  });

  xit('should get() a categories', () => {
    const obj = { name: 'test' };
    return mockRequest.post('/api/v1/categories')
      .send(obj)
      .then(results => {
        return mockRequest.get(`/api/v1/categories/${results.body._id}`)
          .then(data => {
            Object.keys(obj).forEach(key => {
              expect(data.body[key]).toEqual(obj[key]);
            });
          });
      });
  });

  xit('should post a categories', () => {
    const obj = { name: 'test' };
    return mockRequest.post('/api/v1/categories')
      .send(obj)
      .then(results => {
        Object.keys(obj).forEach(key => {
          expect(results.body[key]).toEqual(obj[key]);
        });
      });
  });

  xit('should update a categories', () => {
    const obj = { name: 'test' };
    const updated = { name: 'newTest'};

    return mockRequest.post('/api/v1/categories')
      .send(obj)
      .then(results => {
        return mockRequest.put(`/api/v1/categories/${results.body._id}`)
          .send(updated)
          .then(data => {
            console.log(data.body);
            Object.keys(updated).forEach(key => {
              expect(data.body[key]).toEqual(updated[key]);
            });
          });
      });
  });

  xit('should delete a categories', () => {
    const obj = { name: 'test' };
    return mockRequest.post('/api/v1/categories')
      .send(obj)
      .then(results => {
        return mockRequest.delete(`/api/v1/categories/${results.body.id}`)
          .then(data => {
            Object.keys(obj).forEach(key => {
              expect(data.body[key]).not.toEqual(obj[key]);
            });
          });
      });
  });
});
