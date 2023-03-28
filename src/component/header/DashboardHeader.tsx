import React, { useCallback, useRef, useState } from 'react';
import { FullScreenHandle } from 'react-full-screen';

import { useRouter } from 'next/router';

import { Avatar, Badge, Button, Layout, Popover, Typography } from 'antd';
import {
  FullscreenExitOutlined,
  FullscreenOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from '@ant-design/icons';

import useLocalize from '@hook/useLocalize';

import styles from '@component/header/DashboardHeader.style';
import DashboardUserInfoMenu from '@component/menu/DashboardUserInfoMenu';
import AccountInfoModal, {
  OnChangeAccountInfo,
} from '@component/modal/AccountInfoModal';
import ChangePasswordModal, {
  OnChangePassword,
} from '@component/modal/ChangePasswordModal';
import LogoutModal, { OnLogout } from '@component/modal/LogoutModal';

import LocalizeType from '@type/LocalizeType';
import { UserInfoMenuType } from '@type/MenuType';

import Common from '@util/Common';
import Cookie from '@util/Cookie';
import StyleProperty from '@util/StyleProperty';

interface DashboardHeaderProps {
  fullScreenHandle: FullScreenHandle;
  isMenuCollapsed: boolean;
  onMenuCollapsed: (collapsed: boolean) => void;
}

const DashboardHeader = (props: DashboardHeaderProps) => {
  const { fullScreenHandle, isMenuCollapsed, onMenuCollapsed } = props;

  const router = useRouter();
  const { to } = useLocalize(LocalizeType.COMMON);

  const headerRef = useRef<HTMLElement>(null);

  // const id = useAppSelector(state => state.user.id);
  // console.log(id);

  const [showUserInfoMenu, setShowUserInfoMenu] = useState(false);
  const [showAccountInfoModal, setShowAccountInfoModal] = useState(false);
  const [showChangePasswordModal, setShowChangePasswordModal] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const onOpenChange = useCallback(
    (newOpen: boolean) => {
      setShowUserInfoMenu(newOpen);
    },
    [setShowUserInfoMenu],
  );

  const onChangeAccountInfo: OnChangeAccountInfo = useCallback((name) => {
    // TODO - 유저 정보 변경 로직 추가
    Common.debug('~~~onChangeAccountInfo');
    Common.debug(name);
  }, []);

  const onChangePassword: OnChangePassword = useCallback(() => {
    // TODO - 비밀번호 변경 로직 추가
  }, []);

  const onLogout: OnLogout = useCallback(() => {
    Cookie.deleteToken();
    void router.push(`/`);
  }, [router]);

  const renderMenuButton = () => (
    <Button
      icon={isMenuCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      onClick={() => onMenuCollapsed(!isMenuCollapsed)}
    />
  );

  const renderFullscreenButton = () => (
    <Button
      icon={
        fullScreenHandle.active ? (
          <FullscreenExitOutlined />
        ) : (
          <FullscreenOutlined />
        )
      }
      onClick={
        fullScreenHandle.active ? fullScreenHandle.exit : fullScreenHandle.enter
      }
    />
  );

  const renderUserInfoContent = () => {
    return (
      <DashboardUserInfoMenu
        onSelectMenu={(type) => {
          setShowUserInfoMenu(false);
          switch (type) {
            case UserInfoMenuType.ACCOUNT_INFO:
              Common.debug('~~~ UserInfoMenuType.ACCOUNT_INFO');
              setShowAccountInfoModal(true);
              break;

            case UserInfoMenuType.CHANGE_PASSWORD:
              Common.debug('~~~ UserInfoMenuType.CHANGE_PASSWORD');
              setShowChangePasswordModal(true);
              break;

            case UserInfoMenuType.LOGOUT:
              Common.debug('~~~ UserInfoMenuType.LOGOUT');
              setShowLogoutModal(true);
              break;
          }
        }}
      />
    );
  };

  const renderUserInfoButton = () => (
    <Popover
      getPopupContainer={(triggerNode) => {
        return headerRef.current ?? triggerNode;
      }}
      overlayInnerStyle={{ paddingLeft: 0, paddingRight: 0 }}
      placement={'bottomRight'}
      trigger={'click'}
      content={renderUserInfoContent}
      open={showUserInfoMenu}
      onOpenChange={onOpenChange}
    >
      <Badge dot={false}>
        <Avatar
          style={styles.buttonUserInfo}
          shape={'square'}
          icon={<UserOutlined />}
          onClick={() => setShowUserInfoMenu(!showUserInfoMenu)}
        />
      </Badge>
    </Popover>
  );

  return (
    <Layout.Header
      ref={headerRef}
      style={StyleProperty.merge(styles.header, styles.headerHeight)}
    >
      <Layout
        style={StyleProperty.merge(styles.headerInLayout, styles.headerHeight)}
      >
        {renderMenuButton()}
        <Typography.Title style={styles.title} level={4}>
          {to('title')}
        </Typography.Title>
        {/*<Text style={styles.title}>{t('count', { count: 100 })}</Text>*/}
        {renderFullscreenButton()}
        {renderUserInfoButton()}
      </Layout>

      {/* Modal */}
      <AccountInfoModal
        container={headerRef.current}
        isShow={showAccountInfoModal}
        id={'addmmin'}
        name={'요맨'}
        onChangeInfo={onChangeAccountInfo}
        onClose={() => setShowAccountInfoModal(false)}
      />
      <ChangePasswordModal
        container={headerRef.current}
        isShow={showChangePasswordModal}
        onChangePassword={onChangePassword}
        onClose={() => setShowChangePasswordModal(false)}
      />
      <LogoutModal
        container={headerRef.current}
        isShow={showLogoutModal}
        onLogout={onLogout}
        onClose={() => setShowLogoutModal(false)}
      />
    </Layout.Header>
  );
};

export default DashboardHeader;
