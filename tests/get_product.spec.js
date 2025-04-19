const app = require('../src/app');
const request = require('supertest');

describe('Products', () => {
    describe('GET /products', () => {

        test('should respond with an array of products and status code 200', async () => {
            const response = await request(app)
                .get('/products')
                .expect('Content-Type', /json/)
                .expect(200);

            // Check if the response body is an array
            expect(Array.isArray(response.body)).toBe(true);
        });

        test('should respond with Array (another way)', async () => {
            const response = await request(app).get('/products');
            expect(response.body).toBeInstanceOf(Array);
        });

        test('should respond with 10 products', async () => {
            const response = await request(app).get('/products');
            expect(response.body.length).toBe(10);
        });

        test('should respond with property id', async () => {
            const response = await request(app).get('/products');
            expect(response.body[0]).toHaveProperty('id');
        });

        test('should respond with property name', async () => {
            const response = await request(app).get('/products');
            expect(response.body[0]).toHaveProperty('name');
        });

        test('should respond with property price', async () => {
            const response = await request(app).get('/products');
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
