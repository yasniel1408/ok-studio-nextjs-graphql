import jwtDecode from 'jwt-decode';
import { useCallback } from 'react';
import getToken from '@hooks/auth/helpers/getToken';
import getTokenSession from '@hooks/auth/helpers/getTokenSession';

const useVerifyToken = () => {
  const verifyToken = useCallback(async () => {
    try {
      jwtDecode(getToken() || getTokenSession());
      return true;
    } catch (error) {
      return false;
    }
    return false;
  }, []);

  return { verifyToken };
};

export default useVerifyToken;
