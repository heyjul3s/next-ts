import { atom } from 'recoil';
import type { TPost } from '@/requests/index';

export const postsState = atom({
  key: 'postsState',
  default: [] as TPost[]
});
