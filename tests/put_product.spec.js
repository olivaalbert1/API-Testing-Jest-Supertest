const app = require('../src/app');
const request = require('supertest');

describe('PUT /product/:id', () => {
    test('should respond with status code 200', async () => {
        const response = await request(app)
            .put('/product/1')
            .send({
                name: 'Product 12',
                price: 999
            })

        expect(response.statusCode).toBe(200);
    });
    test('should update the product', async () => {
        const response = await request(app)
            .put('/product/1')
            .send({
                name: 'Product 12',
                price: 999
            });

        expect(response.body).toEqual({
            id: 1,
            name: 'Product 12',
            price: 999
        });
    });
    test('should respond with status code 404 if product not found', async () => {
        const response = await request(app)
            .put('/product/100')
            .send({
                name: 'Product 12',
                price: 999
            });

        expect(response.statusCode).toBe(404);
    });
});