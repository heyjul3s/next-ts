import React from 'react';
import { Heading, HeadingProps } from '@chakra-ui/react';

type THeadingsProps = {
  children: React.ReactNode;
} & HeadingProps;

const Headings = {
  H1({ children, as = 'h1', ...props }: THeadingsProps): React.ReactElement {
    return (
      <Heading as={as} variant="h1" {...props}>
        {children}
      </Heading>
    );
  },

  H2({ children, as = 'h2', ...props }: THeadingsProps): React.ReactElement {
    return (
      <Heading as={as} variant="h2" {...props}>
        {children}
      </Heading>
    );
  },

  H3({ children, as = 'h3', ...props }: THeadingsProps): React.ReactElement {
    return (
      <Heading as={as} variant="h3" {...props}>
        {children}
      </Heading>
    );
  },

  H4({ children, as = 'h4', ...props }: THeadingsProps): React.ReactElement {
    return (
      <Heading as={as} variant="h4" {...props}>
        {children}
      </Heading>
    );
  }
};

export const { H1, H2, H3, H4 } = Headings;
