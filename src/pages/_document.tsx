import React from 'react';

import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang={this.props.__NEXT_DATA__.locale}>
        <Head>
          <meta charSet={'utf-8'} />
          <link
            rel={'shortcut icon'}
            type={'images/x-icon'}
            href={'/favicon.ico'}
          />
          <link
            rel={'stylesheet'}
            href={'https://unpkg.com/nprogress@0.2.0/nprogress.css'}
          />
        </Head>
        <body style={{ overflow: 'hidden', margin: 0 }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
