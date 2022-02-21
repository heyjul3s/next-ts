import React from 'react';
import { Container, ContainerProps } from '@chakra-ui/react';

import LayoutHead, { TLayoutHeadProps } from './LayoutHead';

type TLayoutProps = {
  children: JSX.Element | JSX.Element[];
} & TLayoutHeadProps &
  ContainerProps;

export function Layout({
  title,
  description,
  canonical,
  additionalMetaTags = [],
  children,
  ...props
}: TLayoutProps): React.ReactElement {
  return (
    <React.Fragment>
      <LayoutHead
        title={title}
        description={description}
        canonical={canonical}
        additionalMetaTags={additionalMetaTags}
      />

      <main id="main">
        <Container
          display="flex"
          flexDir="column"
          maxW="container.lg"
          __css={{
            paddingRight: '1em',
            paddingLeft: '1em'
          }}
          {...props}
        >
          {children}
        </Container>
      </main>
    </React.Fragment>
  );
}
