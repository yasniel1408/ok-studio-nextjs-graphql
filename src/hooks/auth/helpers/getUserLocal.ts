import { USER_INFO_KEY } from '@constants/globals';

export default function getUserLocal() {
  return JSON.parse(localStorage.getItem(USER_INFO_KEY) || '');
}
