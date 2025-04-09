// tests/user.test.js
const request = require('supertest');
const app = require('../src/config/server');

const userData = {
    "username": "testuser",
    "password": "testpassword",
    "email": "test@example.com"
};

describe('User Service', () => {
    it('should register a new user', async () => {
        const response = await request(app)
            .post('/api/users/register')
            .send(userData);
        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('username', 'testuser');
    });

    it('should login an existing user', async () => {
        const response = await request(app)
            .post('/api/users/login')
            .send({
                username: 'testuser',
                password: 'testpassword'
            });
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('username', 'testuser');
    });
});