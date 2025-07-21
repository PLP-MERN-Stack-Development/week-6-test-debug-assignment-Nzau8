const authController = require('../../controllers/authController');
const User = require('../../models/User');
const jwt = require('jsonwebtoken');

jest.mock('../../models/User');
jest.mock('jsonwebtoken');

describe('authController', () => {
  afterEach(() => jest.clearAllMocks());

  it('registers a user and returns a token', async () => {
    User.prototype.save = jest.fn().mockResolvedValue();
    jwt.sign.mockReturnValue('test-token');
    const req = { body: { email: 'test@test.com', password: 'pass' } };
    const res = { json: jest.fn() };
    await authController.register(req, res);
    expect(res.json).toHaveBeenCalledWith({ token: 'test-token' });
  });

  it('fails registration with error', async () => {
    User.prototype.save = jest.fn().mockRejectedValue(new Error('fail'));
    const req = { body: { email: 'test@test.com', password: 'pass' } };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    await authController.register(req, res);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ error: 'Registration failed' });
  });
}); 