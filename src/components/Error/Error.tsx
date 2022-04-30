import { ApolloError } from 'apollo-boost';
import React from 'react';

const Error = ({ error }: { error?: ApolloError }) => {
  return (
    <div>
      <h4 style={{ color: 'red' }}>{error?.message}</h4>
    </div>
  );
};

export default Error;
