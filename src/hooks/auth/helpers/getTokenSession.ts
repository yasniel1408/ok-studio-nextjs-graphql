import { TOKEN_KEY } from '@constants/globals';

export default function getTokenSession() {
  return sessionStorage.getItem(TOKEN_KEY) || '';
}
