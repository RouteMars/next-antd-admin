import React, { Key } from 'react';

import { Layout, Table } from 'antd';
import { ColumnsType } from 'antd/lib/table';

import StyleProperty from '@util/StyleProperty';

interface DataType {
  key: Key;
  name: string;
  age: number;
  address: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    render: (text: string) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Disabled User',
    age: 99,
    address: 'Sydney No. 1 Lake Park',
  },
];

const Submenu2Layout = () => {
  return (
    <Layout style={styles.grid}>
      <Table columns={columns} dataSource={data} pagination={false} />
    </Layout>
  );
};

const styles = StyleProperty.create({
  grid: {
    padding: 8,
    // backgroundColor: 'blue',
  },
});

export default Submenu2Layout;
