import React from 'react';

import LoginLayout from '@layout/auth/LoginLayout';

import { MyPage } from '@type/TemplateType';

const Login: MyPage = () => {
  return <LoginLayout />;
};

Login.template = 'default';
export default Login;
