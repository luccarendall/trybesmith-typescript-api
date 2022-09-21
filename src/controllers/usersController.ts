import { Request, Response } from 'express';
import usersService from '../services/usersService';

const createUser = async (req: Request, res: Response) => {
  const data = req.body;

  const result = await usersService.createUser(data);
  return res.status(201).json({ token: result });
};

export default { createUser };