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
        return mockRequest.get('/api/v1/categories')
          .then(data => {
            Object.keys(obj).forEach(key => {
              expect(data.body.results[0][key]).toEqual(obj[key]);
            });
          });
      });
  });

  it('should get() a categories', () => {
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

  it('should post a categories', () => {
    const obj = { name: 'test' };
    return mockRequest.post('/api/v1/categories')
      .send(obj)
      .then(results => {
        Object.keys(obj).forEach(key => {
          expect(results.body[key]).toEqual(obj[key]);
        });
      });
  });

  it('should update a categories', () => {
    const obj = { name: 'test' };
    const updated = { name: 'newTest'};

    return mockRequest.post('/api/v1/categories')
      .send(obj)
      .then(results => {
        return mockRequest.put(`/api/v1/categories/${results.body._id}`)
          .send(updated)
          .then(data => {
            Object.keys(updated).forEach(key => {
              expect(data.body[key]).toEqual(updated[key]);
            });
          });
      });
  });

  it('should delete a categories', () => {
    const obj = { name: 'test' };
    return mockRequest.post('/api/v1/categories')
      .send(obj)
      .then(results => {
        return mockRequest.delete(`/api/v1/categories/${results.body._id}`)
          .then(results => {
            return mockRequest.get(`/api/v1/categories/${results.body._id}`)
              .then(data => {
                expect(data.body).toBeNull;
              });
          });
      });
  });
});
