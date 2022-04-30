import { USER_INFO_KEY } from '@constants/globals';
import IUser from '@interfaces/IUser';

export default function setUser({ user }: { user: IUser }) {
  localStorage.setItem(USER_INFO_KEY, JSON.stringify(user));
}
