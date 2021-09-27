import React from 'react';
import { Loader, LoaderOptions } from '@googlemaps/js-api-loader';

enum LoadStatus {
  LOADING = 'LOADING',
  FAILURE = 'FAILURE',
  SUCCESS = 'SUCCESS'
}

type TLoadStatus = { [key in keyof LoadStatus]: LoadStatus[key] };

export const loadingStatus = {
  LOADING: LoadStatus.LOADING,
  FAILURE: LoadStatus.FAILURE,
  SUCCESS: LoadStatus.SUCCESS
};

export function useGoogleMapsAPI(options = { libraries: ['places'] }) {
  const [status, setStatus] = React.useState<TLoadStatus>(
    loadingStatus.LOADING
  );

  React.useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.GOOGLE_MAPS_API_KEY,
      ...options
    } as LoaderOptions);

    const setLoadStatus = (status: TLoadStatus) => {
      setStatus(status);
    };

    setLoadStatus(loadingStatus.LOADING);

    loader.load().then(
      () => setLoadStatus(loadingStatus.SUCCESS),
      () => setLoadStatus(loadingStatus.FAILURE)
    );
  }, []);

  return {
    status,
    loading: status === loadingStatus.SUCCESS
  };
}
