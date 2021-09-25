import { GetServerSidePropsContext } from 'next';

import {
  ChakraProvider,
  cookieStorageManager,
  localStorageManager
} from '@chakra-ui/react';

type ChakraProps = {
  cookies?: string;
  children: React.ReactNode;
};

export default function Chakra({ cookies, children }: ChakraProps) {
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

export function getServerSideProps({ req }: GetServerSidePropsContext) {
  return {
    props: {
      cookies: req.headers.cookie ?? ''
    }
  };
}
