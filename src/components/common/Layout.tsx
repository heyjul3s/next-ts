import React from 'react';
import { Container, ContainerProps } from '@chakra-ui/react';

import { Header } from './Header';
import { Footer } from './Footer';

interface ILayoutProps extends ContainerProps {
  children: JSX.Element | JSX.Element[];
}

export function Layout({
  children,
  ...props
}: ILayoutProps): React.ReactElement {
  return (
    <React.Fragment>
      <Header />

      <main id="main">
        <Container
          maxW={[
            'container.sm',
            'container.md',
            'container.lg',
            'container.xl'
          ]}
          py={'4'}
          {...props}
        >
          {children}
        </Container>
      </main>

      <Footer />
    </React.Fragment>
  );
}
