import { TOKEN_KEY, USER_INFO_KEY } from '@constants/globals';
import clear from './clear';

export default function setLogout() {
  clear(USER_INFO_KEY);
  clear(TOKEN_KEY);
}
