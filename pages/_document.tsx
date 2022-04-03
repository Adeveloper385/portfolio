import React from "react";
import Document, {
  DocumentContext,
  DocumentInitialProps,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(
    context: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = context.renderPage;

    try {
      context.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(context);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render(): JSX.Element {
    return (
      <Html lang="es">
        <Head>
          <meta charSet="utf-8" />
          <link rel="preload" href="https://fonts.googleapis.com/" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100;400&display=swap"
          />
        </Head>
        <body style={{height: '100%'}}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
