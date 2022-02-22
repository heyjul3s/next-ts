import { selector } from 'recoil';
import Fuse from 'fuse.js';
import { postsState } from './atoms';
import { searchbarQueryState } from '../searchBar/atoms';
import { TPost } from '@/api/index';

type TPostSearchResult = {
  refIndex: number;
  score?: number;
  matches?: ReadonlyArray<Fuse.FuseResultMatch>;
} & TPost;

export const selectPosts = selector({
  key: 'selectPosts',
  get: ({ get }) => get(postsState)
});

export const selectPostsByQuery = selector({
  key: 'selectPostsByQuery',
  get: ({ get }) => {
    const posts = get(postsState);
    const searchQuery = get(searchbarQueryState);

    const fuse = new Fuse(posts, {
      includeScore: true,
      keys: ['title']
    });

    const searchResults = fuse
      .search(searchQuery)
      .reduce((results, result: Fuse.FuseResult<TPost>) => {
        return [
          ...results,
          {
            ...result.item,
            refIndex: result?.refIndex,
            score: result?.score,
            matches: result?.matches
          }
        ];
      }, [] as TPostSearchResult[]);

    return !searchQuery ? posts : searchResults;
  }
});
