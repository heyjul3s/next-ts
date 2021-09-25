import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import qs from 'qs';
import deepExtend from 'deep-extend';

export function useRequest<Data extends any, Error extends any>(
  endpoint: string,
  config: AxiosRequestConfig = {}
): () => Promise<Data> {
  const DEFAULT_API_CONFIG = {
    returnRejectedPromiseOnError: true,
    timeout: 30000,
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
    headers: {
      common: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    },
    paramsSerializer: (params: string) =>
      qs.stringify(params, { indices: false })
  };

  return async () => {
    const response: AxiosResponse<Data> | AxiosError<Error> = await axios({
      ...deepExtend(DEFAULT_API_CONFIG, config),
      url: endpoint
    });

    return response.data;
  };
}
