import React from 'react';
import { AnchorLink } from './AnchorLink';
import { Box, Container, Flex, Spacer, Text } from '@chakra-ui/react';

import { Newsletter } from './Newsletter';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box as="footer" p={6} background="gray.200">
      <Container maxW="container.xl">
        <Flex py="4">
          <Newsletter />
        </Flex>

        <Flex py="4">
          <Box py="2">
            <Text size="xs">{`© Copyright ${currentYear} ${process.env.NEXT_PUBLIC_APP_NAME} All rights reserved`}</Text>
          </Box>

          <Spacer />

          <Box>
            <AnchorLink href="/terms" mr="4">
              Terms of use
            </AnchorLink>
            <AnchorLink href="/privacy-policy">Privacy Policy</AnchorLink>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
