import { TOKEN_KEY } from '@constants/globals';

export default function isLoggedIn() {
  return !!localStorage.getItem(TOKEN_KEY) || !!sessionStorage.getItem(TOKEN_KEY);
}
