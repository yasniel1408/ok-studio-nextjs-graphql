import { USER_INFO_KEY } from '@constants/globals';

export default function getUserSession() {
  return JSON.parse(sessionStorage.getItem(USER_INFO_KEY) || '');
}
