import React from 'react';
import { Heading, HeadingProps } from '@chakra-ui/react';

type HeadingsProps = {
  children: React.ReactNode;
} & HeadingProps;

const Headings = {
  H1({
    children,
    isTruncated,
    as = 'h1',
    ...props
  }: HeadingsProps): React.ReactElement {
    return (
      <Heading as={as} variant="h1" isTruncated={isTruncated} {...props}>
        {children}
      </Heading>
    );
  },

  H2({
    children,
    isTruncated,
    as = 'h2',
    ...props
  }: HeadingsProps): React.ReactElement {
    return (
      <Heading as={as} variant="h2" isTruncated={isTruncated} {...props}>
        {children}
      </Heading>
    );
  },

  H3({
    children,
    isTruncated,
    as = 'h3',
    ...props
  }: HeadingsProps): React.ReactElement {
    return (
      <Heading as={as} variant="h3" isTruncated={isTruncated} {...props}>
        {children}
      </Heading>
    );
  },

  H4({
    children,
    isTruncated,
    as = 'h4',
    ...props
  }: HeadingsProps): React.ReactElement {
    return (
      <Heading as={as} variant="h4" isTruncated={isTruncated} {...props}>
        {children}
      </Heading>
    );
  }
};

export const { H1, H2, H3, H4 } = Headings;
