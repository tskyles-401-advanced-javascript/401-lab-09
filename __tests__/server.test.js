'use strict';

const { server } = require('../lib/server');
const supergoose = require('@code-fellows/supergoose');
const mockRequest = supergoose(server);

describe('server', () => {
  
  it('should give 404 error on bad route', () => {
    return mockRequest.get('/api/v1/wrong')
      .then(result => {
        expect(result.status).toBe(404);
      }) ;
  });

  it('should give 500 error on error', () => {
    const badObj = { quantity: 10 };
    return mockRequest.post('/api/v1/products')
      .then(result => {
        expect(result.status).toBe(500);
      });
  });
});