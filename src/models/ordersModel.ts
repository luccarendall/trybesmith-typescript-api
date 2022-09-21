import connection from './connection';
import OrdersInterface from '../interfaces/ordersInterface';

const selectAllOrders = async () : Promise<OrdersInterface[]> => {
  const [data] = await connection.execute(`SELECT
  O.id, O.userId, JSON_ARRAYAGG(P.id) AS productsIds
  FROM
  Trybesmith.Orders AS O
  INNER JOIN
  Trybesmith.Products AS P ON O.id = P.orderId
  GROUP BY O.id
  ORDER BY O.userId
`);
  return data as OrdersInterface[];
};

export default { selectAllOrders };