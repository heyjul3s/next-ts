import { atom } from 'recoil';
import type { TPost } from '@/api/index';

export const postsState = atom({
  key: 'postsState',
  default: [] as TPost[]
});
