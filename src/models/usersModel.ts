import { ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import UsersInterface from '../interfaces/usersInterface';

// https://bit.ly/3f7SWBK https://bit.ly/3BXYDv6
const createUser = async (user: UsersInterface): Promise<ResultSetHeader> => {
  const { username, classe, level, password } = user;
  
  const [data] = await connection.execute<ResultSetHeader>(`INSERT INTO 
  Trybesmith.Users (username, classe, level, password) 
  VALUES (?,?,?,?)`, [username, classe, level, password]);
  return data;
};

export default { createUser };