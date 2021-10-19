import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';

import {
  ChakraProvider,
  cookieStorageManager,
  localStorageManager
} from '@chakra-ui/react';

import type { AppTheme } from '@/theme/index';

type TChakraProps = {
  cookies?: string;
  theme: AppTheme;
  children: React.ReactNode;
};

export default function Chakra({
  cookies,
  theme,
  children
}: TChakraProps): React.ReactElement {
  const colorModeManager =
    typeof cookies === 'string'
      ? cookieStorageManager(cookies)
      : localStorageManager;

  return (
    <ChakraProvider colorModeManager={colorModeManager} theme={theme}>
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
