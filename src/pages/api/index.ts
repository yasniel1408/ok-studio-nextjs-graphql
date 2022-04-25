import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

const index: NextApiHandler = (_request: NextApiRequest, response: NextApiResponse) => {
  response.end('Hello World!');
};

export default index;
