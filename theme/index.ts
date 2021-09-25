import { extendTheme, Theme } from '@chakra-ui/react';
import { breakpoints, colors, config, fonts, radii } from './foundations/index';
import { components } from './components';

export const theme: Theme = extendTheme({
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
