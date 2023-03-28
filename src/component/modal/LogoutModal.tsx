import React, { useCallback } from 'react';

import { Typography } from 'antd';

import useLocalize from '@hook/useLocalize';

import BaseCenterModal from '@component/modal/_base/BaseCenterModal';
import { BaseModalProps } from '@component/modal/_base/BaseModal.interface';

import LocalizeType from '@type/LocalizeType';

export type OnLogout = () => void;

interface LogoutModalProps extends BaseModalProps {
  onLogout: OnLogout;
}

const LogoutModal = (props: LogoutModalProps) => {
  const { onLogout, onClose } = props;

  const { to } = useLocalize(LocalizeType.COMMON);

  const onOkModal = useCallback(() => {
    onLogout();
    onClose();
  }, [onClose, onLogout]);

  return (
    <BaseCenterModal
      {...props}
      title={to('user.logout')}
      okTitle={to('ok')}
      cancelTitle={to('cancel')}
      onOk={onOkModal}
    >
      <Typography.Text>{to('logout.message')}</Typography.Text>
    </BaseCenterModal>
  );
};

export default LogoutModal;
