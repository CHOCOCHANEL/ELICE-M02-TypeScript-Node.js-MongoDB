import express from 'express';

const data = require('./db/product/product1.json');

const app = express();
app.use(express.static('static'));

app.get('/product/1', (req, res) => {
    res.json(data);
})

export { app };


