import getUserLocal from './getUserLocal';
import getUserSession from './getUserSession';

export default function getUserStorage() {
  return getUserLocal() || getUserSession();
}
