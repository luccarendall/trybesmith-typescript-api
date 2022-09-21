import express from 'express';
import ProductController from './controllers/productsController';

const app = express();

app.use(express.json());

app.post('/products', ProductController.createProduct);
app.get('/products', ProductController.selectProductsAll);

export default app;
