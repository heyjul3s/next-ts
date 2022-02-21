import { selector } from 'recoil';
import { postsState } from './atoms';

export const selectPosts = selector({
  key: 'selectPosts',
  get: ({ get }) => get(postsState)
});
