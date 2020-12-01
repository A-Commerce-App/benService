// I have to manually start the server to run these tests
// Although, the host and port are currently hard-coded

const supertest = require('supertest');

const request = supertest('http://127.0.0.1:3000');

describe('GET route for product reviews', () => {
  it('should successfully access GET route', (done) => {
    request.get('/api/products/16/reviews').expect(200).expect(res => {
      expect(res.status).toEqual(200);
      // expect(res.data.full_text).toBeDefined();
    }).end(done);
  });

  it('should return a 404 if the product id is not included in the request', (done) => {
    request.get('/api/products/reviews').expect(404).expect(res => {
      expect(res.status).toEqual(404);
    }).end(done);
  });
});


// console.log(req.params.id);