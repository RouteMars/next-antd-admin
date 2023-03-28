import React from 'react';

import { Menu } from 'antd';

import { MenuInfo } from 'rc-menu/lib/interface';

import DashboardMenuItem from '@component/menu/item/DashboardMenuItem';

import StyleProperty from '@util/StyleProperty';

interface DashboardUserInfoMenuProps {
  onSelectMenu: (type: string) => void;
}

const DashboardUserInfoMenu = (props: DashboardUserInfoMenuProps) => {
  const { onSelectMenu } = props;

  const onClickMenu = ({ key }: MenuInfo) => {
    onSelectMenu(key);
  };

  return (
    <Menu
      style={styles.menu}
      items={DashboardMenuItem.UserInfoMenuItems()}
      selectedKeys={['']}
      onClick={onClickMenu}
    />
  );
};

const styles = StyleProperty.create({
  menu: {
    borderRight: 0,
  },
});

export default DashboardUserInfoMenu;
