import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';

import {
  ChakraProvider,
  cookieStorageManager,
  localStorageManager
} from '@chakra-ui/react';

type ChakraProps = {
  cookies?: string;
  children: React.ReactNode;
};

export default function Chakra({
  cookies,
  children
}: ChakraProps): React.ReactElement {
  const colorModeManager =
    typeof cookies === 'string'
      ? cookieStorageManager(cookies)
      : localStorageManager;

  return (
    <ChakraProvider colorModeManager={colorModeManager}>
      {children}
    </ChakraProvider>
  );
}

export function getServerSideProps({
  req
}: GetServerSidePropsContext): GetServerSidePropsResult<{ cookies: string }> {
  return {
    props: {
      cookies: req.headers.cookie || ''
    }
  };
}
