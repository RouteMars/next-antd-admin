import React, { useCallback } from 'react';

import { Typography } from 'antd';

import useLocalize from '@hook/useLocalize';

import BaseCenterModal from '@component/modal/_base/BaseCenterModal';
import { BaseModalProps } from '@component/modal/_base/BaseModal.interface';

import LocalizeType from '@type/LocalizeType';

import StyleProperty from '@util/StyleProperty';

export type OnChangePassword = () => void;

interface ChangePasswordModalProps extends BaseModalProps {
  onChangePassword: OnChangePassword;
}

const ChangePasswordModal = (props: ChangePasswordModalProps) => {
  const { onChangePassword, onClose } = props;

  const { to } = useLocalize(LocalizeType.COMMON);

  const onOkModal = useCallback(() => {
    onChangePassword();
    onClose();
  }, [onChangePassword, onClose]);

  return (
    <BaseCenterModal {...props} onOk={onOkModal}>
      <Typography>ChangePasswordModal</Typography>
    </BaseCenterModal>
  );
};

const styles = StyleProperty.create({});

export default ChangePasswordModal;
