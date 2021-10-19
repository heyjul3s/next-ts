import React from 'react';
import Head from 'next/head';
import { DefaultSeo, NextSeoProps } from 'next-seo';

export type TLayoutHeadProps = NextSeoProps;

export default function LayoutHead({
  title,
  description,
  canonical,
  additionalMetaTags = []
}: TLayoutHeadProps): React.ReactElement {
  return (
    <React.Fragment>
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </Head>

      <DefaultSeo
        title={title}
        titleTemplate={`${process.env.NEXT_PUBLIC_APP_NAME} - %s`}
        canonical={canonical}
        description={description}
        additionalMetaTags={[
          {
            property: 'viewport',
            content: 'initial-scale=1.0, width=device-width'
          },
          {
            name: 'msapplication-TileColor',
            content: '#ffffff'
          },
          {
            name: 'msapplication-TileImage',
            content: '/ms-icon-144x144.png'
          },
          {
            name: 'theme-color',
            content: '#ffffff'
          },
          ...additionalMetaTags
        ]}
      />
    </React.Fragment>
  );
}
