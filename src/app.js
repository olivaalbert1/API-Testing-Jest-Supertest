import express from 'express';

const app = express();

// Middleware to parse JSON request body
app.use(express.json());

let products = [
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
]

app.get('/', (req, res) => {
    res.send(products);
    });

app.get('/products', (req, res) => {
    res.status(200).send(products);
});

app.post('/product', (req, res) => {
    console.log(req.body)

    // add a new product to the list
    const newProduct = {
        id: products.length + 1,
        name: req.body.name,
        price: req.body.price
    };
    products.push(newProduct);

    // send the id of the new product
    res.send(Number(newProduct.id));
}
);

// Export the app for testing purposes
export default app;