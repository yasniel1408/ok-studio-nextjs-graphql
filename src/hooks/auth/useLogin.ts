import { gql, useMutation } from '@apollo/client';
import IUserCredentials from '@interfaces/IUserCredentials';

const LOGIN = gql`
  mutation Mutation($input: UserCredentials) {
    login(input: $input)
  }
`;

const useLogin = () => {
  const [login, { data, loading, error }] = useMutation(LOGIN);

  // falta un effecto para guardar el token en localStorage

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
