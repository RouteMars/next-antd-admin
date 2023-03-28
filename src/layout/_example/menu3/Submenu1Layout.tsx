import React from 'react';

import { Col, Layout, Pagination, Row, Table } from 'antd';

import StyleProperty from '@util/StyleProperty';

const Submenu1Layout = () => {
  const renderTable = () => {
    return (
      <Layout style={styles.layout}>
        <Table style={styles.table}>{/* add Row~!! */}</Table>
        <Layout style={styles.pagination}>
          <Pagination
            total={85}
            defaultCurrent={1}
            defaultPageSize={20}
            // showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
          />
        </Layout>
      </Layout>
    );
  };

  const renderDetail = () => {
    return (
      <Layout style={styles.layout}>
        <Layout
          style={StyleProperty.merge(styles.layout, styles.detail)}
        ></Layout>
      </Layout>
    );
  };

  return (
    <Row style={styles.grid} gutter={8}>
      <Col md={12} xs={24}>
        {renderTable()}
      </Col>
      <Col md={12} xs={24}>
        {renderDetail()}
      </Col>
    </Row>
  );
};

const styles = StyleProperty.create({
  grid: {
    padding: 8,
    backgroundColor: 'blue',
  },
  layout: {
    height: '100%',
  },
  table: {
    width: '100%',
  },
  pagination: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  detail: {
    height: 100,
    backgroundColor: 'black',
  },
});

export default Submenu1Layout;
