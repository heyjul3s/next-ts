import React from 'react';
import { Link, LinkProps } from '@chakra-ui/react';
import { default as NextLink, LinkProps as NextLinkProps } from 'next/link';

type AnchorLinkProps = {
  children: React.ReactNode;
} & LinkProps &
  NextLinkProps;

export default function AnchorLink({
  children,
  href,
  variant = 'textLink',
  isExternal = false,
  ...props
}: AnchorLinkProps): React.ReactElement {
  return (
    <NextLink href={href}>
      <Link variant={variant} isExternal={isExternal} {...props}>
        {children}
      </Link>
    </NextLink>
  );
}
