import { TOKEN_KEY } from '@constants/globals';

export default function setTokenSession({ token }: { token: string }) {
  sessionStorage.setItem(TOKEN_KEY, JSON.stringify(token));
}
