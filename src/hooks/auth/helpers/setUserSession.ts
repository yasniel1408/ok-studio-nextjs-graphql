import { USER_INFO_KEY } from '@constants/globals';
import IUser from '@interfaces/IUser';

export default function setUserSession({ user }: { user: IUser }) {
  sessionStorage.setItem(USER_INFO_KEY, JSON.stringify(user));
}
