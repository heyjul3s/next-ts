import React from 'react';
import { Loader } from '@googlemaps/js-api-loader';

export const Status = {
  LOADING: 'LOADING',
  FAILURE: 'FAILURE',
  SUCCESS: 'SUCCESS'
};

export function useGoogleMapsAPI(options = { libraries: ['places'] }) {
  const [status, setStatus] = React.useState(Status.LOADING);

  React.useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.GOOGLE_MAPS_API_KEY,
      ...options
    });

    const setLoadStatus = (status) => {
      setStatus(status);
    };

    setLoadStatus(Status.LOADING);

    loader.load().then(
      () => setLoadStatus(Status.SUCCESS),
      () => setLoadStatus(Status.FAILURE)
    );
  }, []);

  return {
    status,
    loading: status === Status.SUCCESS
  };
}
