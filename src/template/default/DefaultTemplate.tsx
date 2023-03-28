import React, { PropsWithChildren } from 'react';

import { Layout } from 'antd';

import BaseTemplate from '@template/_base/BaseTemplate';

import StyleProperty from '@util/StyleProperty';

const DefaultTemplate = (props: PropsWithChildren) => {
  return (
    <BaseTemplate>
      <Layout style={styles.layout}>{props.children}</Layout>
    </BaseTemplate>
  );
};

const styles = StyleProperty.create({
  layout: {
    height: '100vh',
  },
});

export default DefaultTemplate;
