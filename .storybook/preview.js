import {
  ChakraProvider,
  CSSReset,
  Flex,
  IconButton,
  useColorMode,
  useColorModeValue
} from '@chakra-ui/react';

import React from 'react';
import { withPerformance } from 'storybook-addon-performance';
import { GlobalStyles } from '../src/components/common/GlobalStyles';
import { theme } from '../src/theme';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

export const globalTypes = {
  direction: {
    name: 'Direction',
    description: 'Direction for layout',
    defaultValue: 'LTR',
    toolbar: {
      icon: 'globe',
      items: ['LTR', 'RTL']
    }
  }
};

const ColorModeToggleBar = () => {
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(MoonIcon, SunIcon);
  const nextMode = useColorModeValue('dark', 'light');

  return (
    <Flex justify="flex-start" mb={4}>
      <IconButton
        size="md"
        fontSize="lg"
        aria-label={`Switch to ${nextMode} mode`}
        variant="ghost"
        color="current"
        marginLeft="2"
        onClick={toggleColorMode}
        icon={<SwitchIcon />}
      />
    </Flex>
  );
};

const withChakra = (StoryFn, context) => {
  const { direction } = context.globals;
  const dir = direction.toLowerCase();

  React.useEffect(() => {
    document.documentElement.dir = dir;
  }, [dir]);

  return (
    <ChakraProvider theme={theme}>
      <div dir={dir} id="story-wrapper" style={{ minHeight: '100vh' }}>
        <ColorModeToggleBar />
        <GlobalStyles />
        <CSSReset />
        <StoryFn />
      </div>
    </ChakraProvider>
  );
};

export const decorators = [withChakra, withPerformance];
