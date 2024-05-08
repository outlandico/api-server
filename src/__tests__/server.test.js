'use strict';

require('dotenv').config();
const supertest = require('supertest');
const { app } = require('../server.js');

const mockRequest = supertest(app);

const { db } = require('../models/index.js');

beforeAll(async () => {
  await db.sync();
});

afterAll(async () => {
  await db.drop();
});

describe('API Server', () => {

  it('should respond with a 404 on an invalid route', async () => {
    const response = await mockRequest.get('/no-thing');
    expect(response.status).toBe(404);
  });

  it('should respond with a 500 when errors are thrown', async () => {
    const response = await mockRequest.get('/broken');
    expect(response.status).toBe(500);
  });

  it('can add a food item', async () => {
    const data = { name: 'Pizza', type: 'Italian', price: 10.99 };
    const response = await mockRequest.post('/food').send(data);
    expect(response.status).toBe(201);
    expect(response.body.id).toBeDefined();
    expect(response.body.name).toBe('Pizza');
    expect(response.body.type).toBe('Italian');
    expect(response.body.price).toBe(10.99);
  });

  it('can get a list of food items', async () => {
    const response = await mockRequest.get('/food');
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
    expect(response.body.length).toBeGreaterThan(0);
    expect(response.body[0]).toHaveProperty('name');
  });

  it('can get a food item', async () => {
    const response = await mockRequest.get('/food/1');
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Object);
    expect(response.body).toHaveProperty('name');
    expect(response.body.name).toBeDefined();
  });

  it('can update a food item', async () => {
    const data = { name: 'New Pizza', type: 'Italian', price: 12.99 };
    const response = await mockRequest.put('/food/1').send(data);
    expect(response.status).toBe(200);
    // Assert other properties if needed
  });

  it('can delete a food item', async () => {
    // Add a food item first
    const data = { name: 'Pizza', type: 'Italian', price: 10.99 };
    const postResponse = await mockRequest.post('/food').send(data);
    const id = postResponse.body.id;

    // Delete that food item
    const deleteResponse = await mockRequest.delete(`/food/${id}`);
    expect(deleteResponse.status).toBe(204);
  });

  it('can add an entertainment item', async () => {
    const data = { name: 'Movie', type: 'Film', rating: 'PG', duration: '2h 30m' };
    const response = await mockRequest.post('/entertainment').send(data);
    expect(response.status).toBe(201);
    expect(response.body.id).toBeDefined();
    expect(response.body.name).toBe('Movie');
    expect(response.body.type).toBe('Film');
    expect(response.body.rating).toBe('PG');
    expect(response.body.duration).toBe('2h 30m');
  });

  it('can get a list of entertainment items', async () => {
    const response = await mockRequest.get('/entertainment');
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
    expect(response.body.length).toBeGreaterThan(0);
    expect(response.body[0]).toHaveProperty('name');
  });

  it('can get an entertainment item', async () => {
    const response = await mockRequest.get('/entertainment/1');
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Object);
    expect(response.body).toHaveProperty('name');
    expect(response.body.name).toBeDefined();
  });

  it('can update an entertainment item', async () => {
    const data = { name: 'New Movie', type: 'Film', rating: 'PG-13', duration: '2h 45m' };
    const response = await mockRequest.put('/entertainment/1').send(data);
    expect(response.status).toBe(200);
    // Assert other properties if needed
  });

  it('can delete an entertainment item', async () => {
    // Add an entertainment item first
    const data = { name: 'Movie', type: 'Film', rating: 'PG', duration: '2h 30m' };
    const postResponse = await mockRequest.post('/entertainment').send(data);
    const id = postResponse.body.id;

    // Delete that entertainment item
    const deleteResponse = await mockRequest.delete(`/entertainment/${id}`);
    expect(deleteResponse.status).toBe(204);
  });

});
