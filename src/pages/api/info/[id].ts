import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

const index: NextApiHandler = (request: NextApiRequest, response: NextApiResponse) => {
  const { id }: { id?: string } = request.query;

  response.status(200).json({ message: `Hello World with id = ${id} !` });
};

export default index;
