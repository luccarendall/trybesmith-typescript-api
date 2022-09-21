import { ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import ProductsInterface from '../interfaces/productsInterface';

// https://bit.ly/3BWy2hJ
const createProduct = async (product: ProductsInterface): Promise<ResultSetHeader> => {
  const { name, amount } = product;

  const [data] = await connection.execute<ResultSetHeader>(`INSERT INTO 
      Trybesmith.Products (name, amount) VALUES (?, ?);`, [name, amount]);
  return data;
};

const selectProductsAll = async (): Promise<ProductsInterface[]> => {
  const [result] = await connection.execute('SELECT * FROM Trybesmith.Products');
  return result as ProductsInterface[];
};

export default { 
  createProduct, 
  selectProductsAll,
};