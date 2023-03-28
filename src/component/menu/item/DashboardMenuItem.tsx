import React, { Key, ReactNode } from 'react';

import { MenuProps } from 'antd';
import {
  DashboardOutlined,
  DesktopOutlined,
  KeyOutlined,
  LogoutOutlined,
  SettingOutlined,
  UserOutlined,
} from '@ant-design/icons';

import useLocalize from '@hook/useLocalize';

import LocalizeType from '@type/LocalizeType';
import { UserInfoMenuType } from '@type/MenuType';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  key: Key,
  label: ReactNode,
  icon?: ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const SideMenuItems = (): MenuProps['items'] => {
  return [
    getItem('menu1', 'MENU 1', <DesktopOutlined />),
    getItem('menu2', 'MENU 2', <DashboardOutlined />),
    // {type: 'divider'},
    getItem('menu3', 'MENU 3', <SettingOutlined />, [
      getItem('submenu1', 'Option 9'),
      getItem('submenu2', 'Option 10'),
    ]),
  ];
};

const UserInfoMenuItems = (): MenuProps['items'] => {
  const { to } = useLocalize(LocalizeType.COMMON);

  return [
    getItem(
      UserInfoMenuType.ACCOUNT_INFO,
      to('user.account_info'),
      <UserOutlined />,
    ),
    getItem(
      UserInfoMenuType.CHANGE_PASSWORD,
      to('user.change_password'),
      <KeyOutlined />,
    ),
    getItem(UserInfoMenuType.LOGOUT, to('user.logout'), <LogoutOutlined />),
  ];
};

export default {
  SideMenuItems,
  UserInfoMenuItems,
};
