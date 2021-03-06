import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

import type {
  DocumentContext,
  DocumentProps,
  DocumentInitialProps
} from 'next/document';

import type { AppPropsType } from 'next/dist/shared/lib/utils';
import type { NextRouter } from 'next/router';

export default class Document extends NextDocument<DocumentProps | unknown> {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const originalRenderPage = ctx.renderPage;
    const initialProps = await NextDocument.getInitialProps(ctx);

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => {
            const EnhancedApp = (
              props: AppPropsType<NextRouter, Record<string, unknown>>
            ) => <App {...props} />;
            return EnhancedApp;
          }
        });
    } catch (error) {
      // eslint-disable-next-line
      console.error(error);
    }

    return {
      ...initialProps,
      styles: [<>{initialProps.styles}</>]
    };
  }

  render(): React.ReactElement {
    return (
      <Html lang="en-AU">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />

          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />

          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap"
            rel="stylesheet"
          />
        </Head>

        <body className="loading">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
