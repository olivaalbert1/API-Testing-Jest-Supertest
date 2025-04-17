import app from '../src/app.js';
import request from 'supertest';


describe('POST /product', () => {
    test('should respond with status code 200', async () => {
        const response = await request(app)
            .post('/product')
            .send({
                name: 'Product 11',
                price: 1100
            })

        expect(response.statusCode).toBe(200);
    });

    test('should respond with id', async () => {
        const response = await request(app)
            .post('/product')
            .send({
                name: 'Product 12',
                price: 1200
            })

        expect(typeof response.body).toBe('number');
    });
});

describe('GET /product', () => {
    test('should respond with 404 Not Found', async () => {
        const response = await request(app).get('/product');
        expect(response.statusCode).toBe(404)
    });
});


