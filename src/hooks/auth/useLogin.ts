import { gql, useMutation } from '@apollo/client';
import IUserCredentials from '@interfaces/IUserCredentials';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import useSaveUserStorage from './useSaveUserStorage';

const LOGIN = gql`
  mutation Mutation($input: UserCredentials) {
    login(input: $input)
  }
`;

const useLogin = () => {
  const [login, { data, loading, error }] = useMutation(LOGIN);
  const router = useRouter();
  const { storageProcess } = useSaveUserStorage();
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    if (data) {
      storageProcess({
        authorization: data?.login,
        rememberMe,
      }).then(() => {
        router.push(`/dashboard`);
      });
    }
  }, [data, rememberMe, router, storageProcess]);

  const userLogin = useCallback(
    ({ email, password, rememberMe: rememberUser }: IUserCredentials) => {
      login({ variables: { input: { email, password } } });
      setRememberMe(rememberUser);
    },
    [login],
  );

  return { userLogin, loading, error, data };
};

export default useLogin;
