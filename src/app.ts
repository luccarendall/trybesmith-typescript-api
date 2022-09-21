import express from 'express';
import ProductController from './controllers/productsController';

const app = express();

app.use(express.json());

app.post('/products', ProductController.createProduct);

export default app;
