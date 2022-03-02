import { selector } from 'recoil';
import { searchbarQueryState } from './atoms';

export const selectSearchbarQuery = selector({
  key: 'selectSearchbarQuery',
  get: ({ get }) => get(searchbarQueryState)
});
