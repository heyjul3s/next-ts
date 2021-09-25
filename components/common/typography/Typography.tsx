import React from 'react';
import { Text, TextProps } from '@chakra-ui/react';

type TextsProps = {
  children: React.ReactNode;
} & TextProps;

const Typography = {
  LargeP({
    children,
    isTruncated,
    noOfLines,
    as = 'p',
    ...props
  }: TextsProps): React.ReactElement {
    return (
      <Text
        as={as}
        variant="largeP"
        isTruncated={isTruncated}
        noOfLines={noOfLines}
        {...props}
      >
        {children}
      </Text>
    );
  },

  P({
    children,
    isTruncated,
    noOfLines,
    as = 'p',
    ...props
  }: TextsProps): React.ReactElement {
    return (
      <Text
        as={as}
        variant="p"
        isTruncated={isTruncated}
        noOfLines={noOfLines}
        {...props}
      >
        {children}
      </Text>
    );
  },

  SmallP({
    children,
    isTruncated,
    noOfLines,
    as = 'p',
    ...props
  }: TextsProps): React.ReactElement {
    return (
      <Text
        as={as}
        variant="smallP"
        isTruncated={isTruncated}
        noOfLines={noOfLines}
        {...props}
      >
        {children}
      </Text>
    );
  },

  XSmallP({
    children,
    isTruncated,
    noOfLines,
    as = 'p',
    ...props
  }: TextsProps): React.ReactElement {
    return (
      <Text
        as={as}
        variant="xSmallP"
        isTruncated={isTruncated}
        noOfLines={noOfLines}
        {...props}
      >
        {children}
      </Text>
    );
  },

  PullQuote({
    children,
    isTruncated,
    noOfLines,
    as = 'blockquote',
    ...props
  }: TextsProps): React.ReactElement {
    return (
      <Text
        as={as}
        variant="pullQuote"
        isTruncated={isTruncated}
        noOfLines={noOfLines}
        {...props}
      >
        {children}
      </Text>
    );
  },

  Meta({
    children,
    isTruncated,
    noOfLines,
    as = 'p',
    ...props
  }: TextsProps): React.ReactElement {
    return (
      <Text
        as={as}
        variant="meta"
        isTruncated={isTruncated}
        noOfLines={noOfLines}
        {...props}
      >
        {children}
      </Text>
    );
  }
};

export const { LargeP, P, SmallP, XSmallP, PullQuote, Meta } = Typography;
