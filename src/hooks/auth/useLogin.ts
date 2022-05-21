import { gql, useMutation } from '@apollo/client';
import IUserCredentials from '@interfaces/IUserCredentials';
import { useEffect, useState } from 'react';
import { NextRouter, useRouter } from 'next/router';
import useSaveUserStorage from './useSaveUserStorage';
import useAuth from '../../context/hooks/useAuth';
import { IAppContextInterface } from '../../context/types/IAppContextInterface';

const LOGIN = gql`
  mutation Mutation($input: UserCredentials) {
    login(input: $input)
  }
`;

const useLogin = () => {
  const [login, { data, loading, error }] = useMutation(LOGIN);
  const { storageProcess } = useSaveUserStorage();
  const [rememberMe, setRememberMe] = useState(false);
  const { setAuth }: IAppContextInterface = useAuth();
  const router: NextRouter = useRouter();

  useEffect(() => {
    if (data) {
      storageProcess({
        authorization: data?.login,
        rememberMe,
      }).then(() => {
        setAuth(true);
        router.push('/admin/dashboard');
      });
    }
  }, [data, rememberMe, router, setAuth, storageProcess]);

  const userLogin = ({ email, password, rememberMe: rememberUser }: IUserCredentials) => {
    login({ variables: { input: { email, password } } });
    setRememberMe(rememberUser);
  };

  return { userLogin, loading, error, data };
};

export default useLogin;
