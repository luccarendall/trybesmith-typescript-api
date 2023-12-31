import ProductModel from '../models/productsModel';
import ProductsInterface from '../interfaces/productsInterface';

const createProduct = async (data: ProductsInterface): Promise<ProductsInterface> => {
  const dataProducts = await ProductModel.createProduct(data);
  
  // https://bit.ly/3BWy2hJ
  const productInfo = { id: dataProducts.insertId, name: data.name, amount: data.amount };
  
  return productInfo;
};

const selectProductsAll = async (): Promise<ProductsInterface[]> => {
  const products = await ProductModel.selectProductsAll();
  return products;
};

export default { 
  createProduct, 
  selectProductsAll,
};