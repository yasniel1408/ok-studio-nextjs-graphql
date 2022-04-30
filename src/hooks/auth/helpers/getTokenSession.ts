import { TOKEN_KEY } from '@constants/globals';

export default function getTokenSession() {
  return JSON.parse(sessionStorage.getItem(TOKEN_KEY) || '');
}
