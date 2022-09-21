import { Request, Response } from 'express';
import OrdersService from '../services/ordersService';

const selectAllOrders = async (_req: Request, res: Response): Promise<Response> => {
  const allOrdersData = await OrdersService.selectAllOrders();
  return res.status(200).json(allOrdersData);
};

export default { selectAllOrders };