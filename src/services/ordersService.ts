import ordersModel from '../models/ordersModel';
import OrdersInterface from '../interfaces/ordersInterface';

const selectAllOrders = async () : Promise<OrdersInterface[]> => {
  const allOrdersData = await ordersModel.selectAllOrders();
  return allOrdersData;
};

export default { selectAllOrders };