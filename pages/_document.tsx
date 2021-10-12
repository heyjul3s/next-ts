import NextDocument, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentProps,
  DocumentInitialProps
} from 'next/document';

import { GA_TRACKING_ID } from '@/utils/analytics';

export default class Document extends NextDocument<DocumentProps | unknown> {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const originalRenderPage = ctx.renderPage;
    const initialProps = await NextDocument.getInitialProps(ctx);
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => <App {...props} />
        });
    } catch (error) {
      // eslint-disable-next-line
      console.error(error);
    }
    return {
      ...initialProps,
      styles: <>{initialProps.styles}</>
    };
  }

  render(): React.ReactElement {
    return (
      <Html lang="en-AU">
        <Head>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}', {
                    page: window.location.pathname
                });`
            }}
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
