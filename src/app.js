import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.statusCode(200).send('Hello, World!');
    console.log('Hello, World!');
});

app.get('/products', (req, res) => {
    res.status(200).send([
        { id: 1, name: 'Product 1', price: 100 },
        { id: 2, name: 'Product 2', price: 200 },
        { id: 3, name: 'Product 3', price: 300 },
        { id: 4, name: 'Product 4', price: 400 },
        { id: 5, name: 'Product 5', price: 500 },
        { id: 6, name: 'Product 6', price: 600 },
        { id: 7, name: 'Product 7', price: 700 },
        { id: 8, name: 'Product 8', price: 800 },
        { id: 9, name: 'Product 9', price: 900 },
        { id: 10, name: 'Product 10', price: 1000 }
    ]);
    console.log('Products list');
});

// Export the app for testing purposes
export default app;