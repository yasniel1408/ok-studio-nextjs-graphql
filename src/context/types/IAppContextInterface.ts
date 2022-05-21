import { Dispatch } from 'react';

export type IAppContextInterface = {
  auth: boolean;
  setAuth: Dispatch<boolean>;
};
