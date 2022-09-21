import { Request, Response } from 'express';
import productsService from '../services/productsService';

const createProduct = async (req: Request, res: Response) => {
  const data = req.body;
  const productData = await productsService.createProduct(data);

  return res.status(201).json(productData);
}; 

export default { createProduct };