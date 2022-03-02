import { Request } from '@/utils/request';
import { AxiosRequestConfig } from 'axios';
import { useQuery } from 'react-query';
import { endpoints } from './endpoints';

export type TPost = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

export function fetchPosts(params: AxiosRequestConfig = {}) {
  return Request.get<TPost[], Error>(endpoints.POSTS, params);
}

export function usePostsQuery() {
  return useQuery<TPost[], Error>(['posts'], fetchPosts());
}
