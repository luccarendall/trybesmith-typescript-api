import express from 'express';
import ProductController from './controllers/productsController';
import UsersController from './controllers/usersController';

const app = express();

app.use(express.json());

app.post('/products', ProductController.createProduct);
app.get('/products', ProductController.selectProductsAll);

app.post('/users', UsersController.createUser);

export default app;
