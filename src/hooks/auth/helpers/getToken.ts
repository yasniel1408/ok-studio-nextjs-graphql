import { TOKEN_KEY } from '@constants/globals';

export default function getToken(): string {
  return JSON.parse(localStorage.getItem(TOKEN_KEY) || '');
}
