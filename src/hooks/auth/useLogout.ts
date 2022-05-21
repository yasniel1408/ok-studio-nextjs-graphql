import { useCallback } from 'react';
import { NextRouter, useRouter } from 'next/router';
import setLogout from './helpers/setLogout';
import { IAppContextInterface } from '../../context/types/IAppContextInterface';
import useAuth from '../../context/hooks/useAuth';

const useLogout = () => {
  const { setAuth }: IAppContextInterface = useAuth();
  const router: NextRouter = useRouter();

  const logout = useCallback(async () => {
    setLogout();
    setAuth(false);
    router.push('/auth/login');
  }, [router, setAuth]);

  return { logout };
};

export default useLogout;
