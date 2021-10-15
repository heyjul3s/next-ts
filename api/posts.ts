import { Request } from '@/utils/request';
import { AxiosRequestConfig } from 'axios';
import { useQuery, UseQueryResult } from 'react-query';
import { endpoints } from './endpoints';

export type Post = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

export function fetchPosts(
  params: AxiosRequestConfig = {}
): () => Promise<Post[]> {
  return Request.get<Post[], Error>(endpoints.POSTS, params);
}

export function usePostsQuery(searchQuery = ''): UseQueryResult<Post[], Error> {
  const requestConfig = {
    params: {
      ...(!!searchQuery && { title: searchQuery })
    }
  };

  return useQuery<Post[], Error>(
    ['posts', searchQuery],
    fetchPosts(requestConfig)
  );
}
