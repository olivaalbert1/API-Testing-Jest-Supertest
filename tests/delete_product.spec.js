import app from '../src/app.js';
import request from 'supertest';

describe('DELETE /product/:id', () => {
    test('should respond with status code 200', async () => {
        const response = await request(app)
            .delete('/product/1')
            .expect(200);
    });
    test('should respond with status code 404 if product not found', async () => {
        const response = await request(app)
            .delete('/product/100')
            .expect(404);
    });
});
