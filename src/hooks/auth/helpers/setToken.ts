import { TOKEN_KEY } from '@constants/globals';

export default function setToken({ token }: { token: string }) {
  localStorage.setItem(TOKEN_KEY, JSON.stringify(token));
}
