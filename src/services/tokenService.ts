import JWT from 'jsonwebtoken';

const PWD = '1234';

const tokenService = {
  // https://www.youtube.com/watch?v=D0gpL8-DVrc - revisão
  tokenCreation: (id: number) => {
    const token = JWT.sign({ data: id }, PWD, { expiresIn: '1d', algorithm: 'HS256' });
    return token;
  },

  validateToken: (token: string) => {
    try {
      const decode = JWT.verify(token, PWD);
      return decode;
    } catch (error) {
      return { message: 'Expired or invalid token' };
    }
  },
};
export default tokenService;