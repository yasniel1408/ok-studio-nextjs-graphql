import { Context, createContext } from 'react';
import { IAppContextInterface } from './types/IAppContextInterface';

const AuthContext: Context<IAppContextInterface> = createContext<IAppContextInterface>({
  auth: false,
  setAuth(value: boolean): void {},
});

export default AuthContext;
