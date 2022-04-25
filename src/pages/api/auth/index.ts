import type { NextApiHandler } from 'next';

const credentialsAuth: NextApiHandler = (request, response) => {
  if (request.method !== 'POST') {
    response.status(405).end();
    return;
  }

  // logica de conexion a la base de datos y demas
  if (request.body.password === '123456') {
    const user: any = {
      name: 'Platzi Student',
      email: 'student@platzi.com',
      image: '',
    };
    // eslint-disable-next-line consistent-return
    return response.status(200).json(user);
  }

  response.status(401).end();
};

export default credentialsAuth;
