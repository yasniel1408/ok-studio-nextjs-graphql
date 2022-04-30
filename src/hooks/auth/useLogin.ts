import { gql, useMutation } from '@apollo/client';
import IUserCredentials from '@interfaces/IUserCredentials';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const LOGIN = gql`
  mutation Mutation($input: UserCredentials) {
    login(input: $input)
  }
`;

const useLogin = () => {
  const [login, { data, loading, error }] = useMutation(LOGIN);
  const router = useRouter();

  useEffect(() => {
    if (data) {
      console.log(data?.login);
      router.push(`/dashboard`);
    }
  }, [data, router]);

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
