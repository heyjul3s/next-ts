import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import qs from 'qs';
import deepExtend from 'deep-extend';

export class Request {
  static DEFAULT_API_CONFIG = {
    returnRejectedPromiseOnError: true,
    timeout: 30000,
    baseURL: process.env.NEXT_PUBLIC_API,
    headers: {
      common: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    },
    paramsSerializer: (params: string): string =>
      qs.stringify(params, { indices: false })
  };

  public static get<Data extends unknown, Error extends unknown>(
    endpoint: string,
    config: AxiosRequestConfig = {}
  ): () => Promise<Data> {
    return Request.send<Data, Error>(endpoint, { ...config, method: 'GET' });
  }

  public static post<Data extends unknown, Error extends unknown>(
    endpoint: string,
    config: AxiosRequestConfig = {}
  ): () => Promise<Data> {
    return Request.send<Data, Error>(endpoint, { ...config, method: 'POST' });
  }

  public static send<Data extends unknown, Error extends unknown>(
    endpoint: string,
    config: AxiosRequestConfig = {}
  ): () => Promise<Data> {
    return async () => {
      const response: AxiosResponse<Data> | AxiosError<Error> = await axios({
        ...deepExtend(this.DEFAULT_API_CONFIG, config),
        url: endpoint
      });

      return response.data;
    };
  }
}
