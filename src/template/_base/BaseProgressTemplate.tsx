import React, { PropsWithChildren } from 'react';

import Head from 'next/head';

import PageProgress from '@component/progress/PageProgress';

PageProgress.init();

interface BaseProgressTemplateProps {
  title?: string;
}

const BaseProgressTemplate = (
  props: PropsWithChildren<BaseProgressTemplateProps>,
) => {
  return (
    <>
      <Head>
        <title>{props.title ?? 'TEST'}</title>
        <meta
          name={'viewport'}
          content={
            'width=device-width, initial-scale=1.0, maximum-scale=1, minimum-scale=1'
          }
        />
      </Head>
      {props.children}
    </>
  );
};

export default BaseProgressTemplate;
