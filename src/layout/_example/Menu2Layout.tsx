import React from 'react';

import { useRouter } from 'next/router';

import { Layout } from 'antd';

import Common from '@util/Common';
import Cookie from '@util/Cookie';

const Menu2Layout = () => {
  const { locale, locales, defaultLocale } = useRouter();

  Common.debug(Cookie.getToken());
  // Cookie.deleteToken()

  return (
    <Layout>
      <p>Current locale: {locale}</p>
      <p>Default locale: {defaultLocale}</p>
      <p>Configured locales: {JSON.stringify(locales)}</p>
    </Layout>
  );
};

export default Menu2Layout;
