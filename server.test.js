const request = require('supertest');
const app = require('./server'); // You'll create server.js later

describe('Restaurant Server', () => {
  it('should return a list of restaurants', async () => {
    const response = await request(app).get('/restaurants'); //Create (POST) Read (GET) Update (PUT) Delete (DELETE)
    expect(response.status).toBe(200); // RFC
    expect(response.body).toEqual([{ name: 'Pizza Place' }, { name: 'Burger Joint' }]);
  });
//   it('should return a list of menus', async () => {});
//   it('should show a list of alergies', async () => {});
//   it('Should show a list of prices', async () => {});
});

