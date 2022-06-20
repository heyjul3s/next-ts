import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';

import {
  ChakraProvider,
  cookieStorageManagerSSR,
  localStorageManager
} from '@chakra-ui/react';

import type { AppTheme } from '@/theme/index';

type TChakraProps = {
  cookies?: string;
  theme: AppTheme;
  children: React.ReactNode;
};

// * Wrapper for SSR
// * Refer to https://chakra-ui.com/docs/styled-system/features/color-mode#add-colormodemanager-optional-for-ssr
export function Chakra({
  cookies,
  theme,
  children
}: TChakraProps): React.ReactElement {
  const colorModeManager =
    typeof cookies === 'string'
      ? cookieStorageManagerSSR(cookies)
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
