import React from 'react';

import {
  Box,
  ChakraProvider,
  CSSReset,
  Container,
  Flex,
  IconButton,
  useColorMode,
  useColorModeValue,
  Text,
  Divider
} from '@chakra-ui/react';

import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { withPerformance } from 'storybook-addon-performance';

import { GlobalStyles } from '../src/components/common/GlobalStyles';
import { theme } from '../src/theme';

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
    <Box mb={8}>
      <Flex justify="space-between" mb={4} alignItems="center">
        <Text fontSize="xs">Toggle Dark/Light Mode</Text>

        <IconButton
          size="xs"
          fontSize="xs"
          m={0}
          aria-label={`Switch to ${nextMode} mode`}
          variant="ghost"
          color="current"
          onClick={toggleColorMode}
          icon={<SwitchIcon />}
        />
      </Flex>

      <Divider />
    </Box>
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
        <Container
          maxW={[
            'container.sm',
            'container.md',
            'container.lg',
            'container.xl'
          ]}
          p={8}
        >
          <ColorModeToggleBar />
          <GlobalStyles />
          <CSSReset />
          <StoryFn />
        </Container>
      </div>
    </ChakraProvider>
  );
};

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true })
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS
  }
};

export const decorators = [withChakra, withPerformance];
