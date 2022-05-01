import jwtDecode from 'jwt-decode';
import setToken from './helpers/setToken';
import setTokenSession from './helpers/setTokenSession';
import setUser from './helpers/setUser';
import setUserSession from './helpers/setUserSession';

const useSaveUserStorage = () => {
  const storageProcess = async ({
    authorization,
    rememberMe,
  }: {
    authorization: string;
    rememberMe: boolean;
  }) => {
    const token = authorization.replace('Bearer ', '');
    const objectToken: any = jwtDecode(token);
    const user = objectToken.appUser;

    if (rememberMe) {
      setToken({ token });
      setUser({ user });
    } else {
      setTokenSession({ token });
      setUserSession({ user });
    }
    return user;
  };
  return { storageProcess };
};

export default useSaveUserStorage;
