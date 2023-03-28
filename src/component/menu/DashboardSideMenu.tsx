import React, { useState } from 'react';

import { useRouter } from 'next/router';

import { Drawer, Layout, Menu } from 'antd';

import { MenuInfo } from 'rc-menu/lib/interface';

import DashboardMenuItem from '@component/menu/item/DashboardMenuItem';

import color from '@constant/Color';

import StyleProperty from '@util/StyleProperty';

interface DashboardSideMenuProps {
  isCollapsed: boolean;
  onCollapsed: (collapsed: boolean) => void;
}

const DashboardSideMenu = (props: DashboardSideMenuProps) => {
  const { isCollapsed, onCollapsed } = props;
  const router = useRouter();

  const [isBreakpoint, setIsBreakpoint] = useState(false);
  const [currentMenuKey, setCurrentMenuKey] = useState('/');

  const onClickMenu = (info: MenuInfo) => {
    setCurrentMenuKey(info.key);
    const path = info.keyPath.reverse().join('/');
    void router.push(`/${path}`);
    if (isBreakpoint) onCollapsed(!isCollapsed);
  };

  const renderMenu = () => (
    <Menu
      theme={'dark'}
      mode={'inline'}
      style={styles.menu}
      items={DashboardMenuItem.SideMenuItems()}
      selectedKeys={[currentMenuKey]}
      onClick={onClickMenu}
    />
  );

  const renderSider = () => (
    <Layout.Sider
      style={StyleProperty.merge(styles.sider, {
        display: isBreakpoint ? 'none' : 'block',
      })}
      // trigger={null}
      breakpoint={'sm'}
      onBreakpoint={setIsBreakpoint}
      collapsedWidth={isBreakpoint ? 0 : undefined}
      // collapsible={true}
      collapsed={isCollapsed}
      onCollapse={(_) => onCollapsed(!isCollapsed)}
    >
      {renderMenu()}
    </Layout.Sider>
  );

  const renderDrawer = () => (
    <Drawer
      placement={'left'}
      open={!isCollapsed}
      onClose={(_) => onCollapsed(!isCollapsed)}
      contentWrapperStyle={{ width: '70%' }}
      bodyStyle={{
        padding: 0,
        backgroundColor: color.sideMenuBackground,
      }}
      closable={false}
    >
      {renderMenu()}
    </Drawer>
  );

  return (
    <>
      {renderSider()}
      {isBreakpoint && renderDrawer()}
    </>
  );
};

const styles = StyleProperty.create({
  sider: {
    overflow: 'auto',
    backgroundColor: color.sideMenuBackground,
  },
  menu: {
    borderRight: 0,
    backgroundColor: color.sideMenuBackground,
  },
});

export default DashboardSideMenu;
