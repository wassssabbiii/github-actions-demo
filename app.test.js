const request = require('supertest');
const app = require('./app');

describe('GET /', () => {
  it('should return health status 200', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.body.status).toEqual('healthy');
  });
});
