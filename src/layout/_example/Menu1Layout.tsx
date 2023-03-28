import React, { useEffect } from 'react';

import { Layout, Spin } from 'antd';

import UserAction from '@redux/action/UserAction';
import { useAppDispatch, useAppSelector } from '@redux/Store';

import Common from '@util/Common';

const Menu1Layout = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.user);

  useEffect(() => {
    if (Common.isEmpty(user)) {
      dispatch(UserAction.getUser());
    } else {
      console.log(`~~~~ user`);
      console.log(user);
    }
  }, [dispatch, user]);

  return (
    <Layout
      style={{
        height: 600,
        justifyContent: 'center',
      }}
    >
      <Spin tip={'Loading'} size={'large'} />
    </Layout>
  );
};

export default Menu1Layout;
