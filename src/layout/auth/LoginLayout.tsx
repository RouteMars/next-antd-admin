import React, { useCallback } from 'react';

import { useRouter } from 'next/router';

import { Button, Card, Col, Form, Input, Layout, Row, Typography } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

import useLocalize from '@hook/useLocalize';

import styles from '@layout/auth/LoginLayout.style';

import LocalizeType from '@type/LocalizeType';

import Common from '@util/Common';
import Cookie from '@util/Cookie';

interface FormData {
  username: string;
  password: string;
}

const LoginLayout = () => {
  const router = useRouter();
  const { to } = useLocalize(LocalizeType.COMMON);

  const onFinish = useCallback(
    (data: FormData) => {
      Common.debug(data);
      Cookie.setToken('test111111');
      void router.push(`/`);
    },
    [router],
  );

  const renderTitle = () => {
    return (
      <Layout style={styles.titleLayout}>
        <Typography.Title style={styles.title} level={3}>
          CarmeleOn
          <br />
          Admin
        </Typography.Title>
      </Layout>
    );
  };

  const renderLoginForm = () => {
    return (
      <Form initialValues={{ remember: true }} onFinish={onFinish}>
        {renderTitle()}
        <Form.Item
          style={styles.formItem}
          name={'username'}
          rules={[
            {
              required: true,
              message: to('login.error_id_empty'),
            },
          ]}
        >
          <Input
            style={styles.input}
            placeholder={to('login.hint_id')}
            prefix={<UserOutlined />}
          />
        </Form.Item>
        <Form.Item
          style={styles.formItem}
          name={'password'}
          rules={[
            {
              required: true,
              message: to('login.error_password_empty'),
            },
          ]}
        >
          <Input
            style={styles.input}
            type={'password'}
            placeholder={to('login.hint_password')}
            prefix={<LockOutlined />}
          />
        </Form.Item>
        <Form.Item>
          <Button style={styles.button} type={'primary'} htmlType={'submit'}>
            {to('login.title')}
          </Button>
        </Form.Item>
      </Form>
    );
  };

  return (
    <Row style={styles.row}>
      <Col md={8} xs={4} />
      <Col md={8} xs={16}>
        <Card>{renderLoginForm()}</Card>
      </Col>
      <Col md={8} xs={4} />
    </Row>
  );
};

export default LoginLayout;
