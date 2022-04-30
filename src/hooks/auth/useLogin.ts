import { gql, useMutation } from '@apollo/client';
import IUserCredentials from '@interfaces/IUserCredentials';
import { useEffect } from 'react';

const LOGIN = gql`
  mutation Mutation($input: UserCredentials) {
    login(input: $input)
  }
`;

const useLogin = () => {
  const [login, { data, loading, error }] = useMutation(LOGIN);

  useEffect(() => {
    data && console.log(data?.login);
  }, [data]);

  const userLogin = async ({ email, password }: IUserCredentials) => {
    try {
      const input = { email, password };
      await login({ variables: { input } });
    } catch (err) {
      console.log(err);
    }
  };

  return { userLogin, loading, error, data };
};

export default useLogin;
