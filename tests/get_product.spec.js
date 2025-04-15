import app from '../src/app.js';
import request from 'supertest';

describe('GET /', () => {
    describe('GET /products', () => {
        test('should respond with 200 OK', async () => {
            const response = await request(app).get('/products');
            expect(response.statusCode).toBe(200)
            expect(response.body).toBeInstanceOf(Array);
            expect(response.body.length).toBe(10);
            expect(response.body[0]).toHaveProperty('id');
            expect(response.body[0]).toHaveProperty('name');
            expect(response.body[0]).toHaveProperty('price');
        });
    });
    
    describe('GET /nonexistent', () => {
        test('should respond with 404 Not Found', async () => {
            const response = await request(app).get('/nonexistent');
            expect(response.statusCode).toBe(404)
        });
    });
});
