import React from 'react';
import { Text, TextProps } from '@chakra-ui/react';

interface ITextsProps extends TextProps {
  children: React.ReactNode;
}

const Typography = {
  LargeP({
    children,
    noOfLines,
    as = 'p',
    ...props
  }: ITextsProps): React.ReactElement {
    return (
      <Text as={as} variant="largeP" noOfLines={noOfLines} {...props}>
        {children}
      </Text>
    );
  },

  P({
    children,
    noOfLines,
    as = 'p',
    ...props
  }: ITextsProps): React.ReactElement {
    return (
      <Text as={as} variant="p" noOfLines={noOfLines} {...props}>
        {children}
      </Text>
    );
  },

  SmallP({
    children,
    noOfLines,
    as = 'p',
    ...props
  }: ITextsProps): React.ReactElement {
    return (
      <Text as={as} variant="smallP" noOfLines={noOfLines} {...props}>
        {children}
      </Text>
    );
  },

  XSmallP({
    children,
    noOfLines,
    as = 'p',
    ...props
  }: ITextsProps): React.ReactElement {
    return (
      <Text as={as} variant="xSmallP" noOfLines={noOfLines} {...props}>
        {children}
      </Text>
    );
  },

  PullQuote({
    children,
    noOfLines,
    as = 'blockquote',
    ...props
  }: ITextsProps): React.ReactElement {
    return (
      <Text as={as} variant="pullQuote" noOfLines={noOfLines} {...props}>
        {children}
      </Text>
    );
  },

  Meta({
    children,
    noOfLines,
    as = 'p',
    ...props
  }: ITextsProps): React.ReactElement {
    return (
      <Text as={as} variant="meta" noOfLines={noOfLines} {...props}>
        {children}
      </Text>
    );
  }
};

export const { LargeP, P, SmallP, XSmallP, PullQuote, Meta } = Typography;
