import express from 'express';

const app = express();

// Middleware to parse JSON request body
app.use(express.json());
// Middleware to log request details
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

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
    // add a new product to the list
    const newProduct = {
        id: products.length + 1,
        name: req.body.name,
        price: req.body.price
    };
    products.push(newProduct);

    // send the id of the new product
    res.send(Number(newProduct.id));
});

app.put('/product/:id', (req, res) => {
    // update the product with the given id
    const id = Number(req.params.id);
    const product = products.find(p => p.id === id);
    if (!product) {
        return res.status(404).send('Product not found');
    }
    product.name = req.body.name;
    product.price = req.body.price;

    // send the updated product
    res.send(product);
});

// Middleware to handle 404 errors
app.use((req, res, next) => {
    // console.error(err.stack);
    res.status(404).send('Not Found');
});

// Middleware to handle 500 errors
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Internal Server Error');
});
// Middleware to handle CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});
// Middleware to handle OPTIONS requests
app.options(/(.*)/, (req, res) => {
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.sendStatus(200);
});

// Export the app for testing purposes
export default app;