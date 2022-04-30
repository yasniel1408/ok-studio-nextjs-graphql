import { useCallback } from 'react';
import { useRouter } from 'next/router';
import setLogout from './helpers/setLogout';

const useLogout = () => {
  const history = useRouter();

  const logout = useCallback(async () => {
    setLogout();
    history.push('/auth/login');
  }, [history]);

  return { logout };
};

export default useLogout;
