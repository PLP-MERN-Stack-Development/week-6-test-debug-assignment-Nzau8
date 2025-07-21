const request = require('supertest');
const express = require('express');
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const authRoutes = require('../../routes/auth');
const User = require('../../models/User');

let mongod, app;

describe('Auth Routes', () => {
  beforeAll(async () => {
    mongod = await MongoMemoryServer.create();
    const uri = mongod.getUri();
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    app = express();
    app.use(express.json());
    app.use('/auth', authRoutes);
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await mongod.stop();
  });

  afterEach(async () => {
    await User.deleteMany();
  });

  it('registers a user', async () => {
    const res = await request(app)
      .post('/auth/register')
      .send({ email: 'test@test.com', password: 'pass' });
    expect(res.body.token).toBeDefined();
  });

  it('logs in a user', async () => {
    await request(app)
      .post('/auth/register')
      .send({ email: 'test2@test.com', password: 'pass' });
    const res = await request(app)
      .post('/auth/login')
      .send({ email: 'test2@test.com', password: 'pass' });
    expect(res.body.token).toBeDefined();
  });
}); 