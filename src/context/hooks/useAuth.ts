import { useContext } from 'react';
import AuthContext from '../AuthContext';
import { IAppContextInterface } from '../types/IAppContextInterface';

const useAuth: () => IAppContextInterface = () => useContext<IAppContextInterface>(AuthContext);

export default useAuth;
