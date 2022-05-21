import { TOKEN_KEY } from '@constants/globals';

export default function getToken(): string {
  return localStorage.getItem(TOKEN_KEY) || '';
}
