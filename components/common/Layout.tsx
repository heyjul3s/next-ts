import React from 'react';
import { Container, ContainerProps } from '@chakra-ui/react';

import { Header } from './Header';
import { Footer } from './Footer';
import { LayoutHead } from './LayoutHead';

import type { TLayoutHeadProps } from './LayoutHead';

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

      <Header />

      <main id="main">
        <Container
          maxW={[
            'container.sm',
            'container.md',
            'container.lg',
            'container.xl'
          ]}
          {...props}
        >
          {children}
        </Container>
      </main>

      <Footer />
    </React.Fragment>
  );
}
