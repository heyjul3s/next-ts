import React from 'react';
import { Container, ContainerProps } from '@chakra-ui/react';
import LayoutHead, { LayoutHeadProps } from './LayoutHead';

type LayoutProps = {
  children: JSX.Element | JSX.Element[];
} & LayoutHeadProps &
  ContainerProps;

export default function Layout({
  title,
  description,
  canonical,
  additionalMetaTags = [],
  children,
  ...props
}: LayoutProps): React.ReactElement {
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
