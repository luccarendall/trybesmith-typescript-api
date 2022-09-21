import usersModel from '../models/usersModel';
import UsersInterface from '../interfaces/usersInterface';
import tokenService from './tokenService';

const createUser = async (data: UsersInterface) => {
  const result = await usersModel.createUser(data);

  // https://bit.ly/3BWy2hJ
  const JWToken = tokenService.tokenCreation(result.insertId);
  return JWToken;
};

export default { createUser };