import { ReactElement, useEffect, useState } from 'react';
import AuthContext from './AuthContext';

const AuthProvider = ({ children }: { children: ReactElement }) => {
  const [auth, setAuth] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
