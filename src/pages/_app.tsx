import React from 'react';

import { Provider } from 'react-redux';

import store from '@redux/Store';

import { Templates } from '@template/Template';

import { MyDynamicProps } from '@type/TemplateType';

const MyApp = ({ Component, pageProps }: MyDynamicProps) => {
  const type = Component.template ?? 'dashboard';
  const Template = Templates[type];

  return (
    <Provider store={store}>
      <Template>
        <Component {...pageProps} />
      </Template>
    </Provider>
  );
};

export default MyApp;
