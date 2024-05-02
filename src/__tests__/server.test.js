'use strict';

// Import only the necessary modules from the models/index.js file
const { Food, Entertainment } = require('../models/index');

// Import necessary modules for testing
const supertest = require('supertest');
const { app } = require('../server.js');

// Define a mockRequest for testing
const mockRequest = supertest(app);

describe('API Server', () => {

  beforeEach(async () => {
    // Clean up the database before each test
    await Food.destroy({ where: {} });
    await Entertainment.destroy({ where: {} });
  });

  it('should respond with a 404 on an invalid route', async () => {
    let response = await mockRequest.get('/no-thing');
    expect(response.status).toBe(404);
  });

  it('should respond with a 500 when errors are thrown', async () => {
    let response = await mockRequest.get('/broken');
    expect(response.status).toBe(500);
  });

  it('can add a food record', async () => {
    let data = { 'name': 'Pizza', 'type': 'Italian', 'price': 10.99 };
    let response = await mockRequest.post('/food').send(data);
    expect(response.status).toBe(201);
    expect(response.body.id).toBeDefined();
    expect(response.body.name).toBe('Pizza');
    expect(response.body.type).toBe('Italian');
    expect(response.body.price).toBe(10.99);
  });

  it('can add an entertainment record', async () => {
    let data = { 'name': 'Concert', 'type': 'Music', 'location': 'City Hall' };
    let response = await mockRequest.post('/entertainment').send(data);
    expect(response.status).toBe(201);
    expect(response.body.id).toBeDefined();
    expect(response.body.name).toBe('Concert');
    expect(response.body.type).toBe('Music');
    expect(response.body.location).toBe('City Hall');
  });

  it('can get a list of food records', async () => {
    // Add some food records first
    await Food.bulkCreate([
      { 'name': 'Pizza', 'type': 'Italian', 'price': 10.99 },
      { 'name': 'Burger', 'type': 'American', 'price': 8.99 },
    ]);

    let response = await mockRequest.get('/food');
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
    expect(response.body.length).toBe(2); // Assuming 2 food records were added
    expect(response.body[0]).toHaveProperty('name');
    // Add more specific checks for the returned data if needed
  });

  // Add more tests for other endpoints...

});
