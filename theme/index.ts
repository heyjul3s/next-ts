import { extendTheme } from '@chakra-ui/react';
import { breakpoints, colors, config, fonts, radii } from './foundations/index';
import { components } from './components';

export type AppTheme = typeof theme;

export const theme = extendTheme({
  breakpoints,
  colors,
  components,
  config,
  fonts,
  radii,
  styles: {
    global: () => ({
      body: {
        fontFamily: 'body',
        lineHeight: 'base'
      }
    })
  }
});
