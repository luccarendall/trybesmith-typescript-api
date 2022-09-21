import express from 'express';
import ProductController from './controllers/productsController';
import UsersController from './controllers/usersController';
import OrdersController from './controllers/ordersController';

const app = express();

app.use(express.json());

app.post('/products', ProductController.createProduct);
app.get('/products', ProductController.selectProductsAll);

app.post('/users', UsersController.createUser);
app.get('/orders', OrdersController.selectAllOrders);

export default app;
