import React, { useCallback, useState } from 'react';

import { Divider, Input, Typography } from 'antd';
import { InputProps } from 'antd/es/input/Input';

import useLocalize from '@hook/useLocalize';

import BaseCenterModal from '@component/modal/_base/BaseCenterModal';
import { BaseModalProps } from '@component/modal/_base/BaseModal.interface';

import LocalizeType from '@type/LocalizeType';

import StyleProperty from '@util/StyleProperty';

export type OnChangeAccountInfo = (name: string) => void;

interface AccountInfoModalProps extends BaseModalProps {
  id: string;
  name: string;
  onChangeInfo: OnChangeAccountInfo;
}

const AccountInfoModal = (props: AccountInfoModalProps) => {
  const { id, name, onChangeInfo, onClose } = props;

  const { to } = useLocalize(LocalizeType.COMMON);

  const [changeName, setChangeName] = useState(name);

  const getPropsByName = (): InputProps => {
    const props: InputProps = {};
    if (changeName.length === 0) props.status = 'error';
    return props;
  };

  const onCloseModal = useCallback(() => {
    setChangeName(name);
    onClose();
  }, [name, onClose]);

  const onOkModal = useCallback(() => {
    if (changeName.length > 0) {
      onChangeInfo(changeName);
      onCloseModal();
    }
  }, [changeName, onChangeInfo, onCloseModal]);

  return (
    <BaseCenterModal
      {...props}
      title={to('user.account_info')}
      okTitle={to('save')}
      cancelTitle={to('cancel')}
      onOk={onOkModal}
      onClose={onCloseModal}
    >
      <Divider />
      <Typography.Text>{to('id')}</Typography.Text>
      <Input style={styles.divider} readOnly={true} value={id} />
      <Divider style={styles.divider} dashed={true} />
      <Typography.Text>{to('name')}</Typography.Text>
      <Input
        {...getPropsByName()}
        style={styles.inputName}
        placeholder={to('user.hint_name')}
        defaultValue={name}
        value={changeName}
        onChange={(e) => setChangeName(e.target.value)}
      />
    </BaseCenterModal>
  );
};

const styles = StyleProperty.create({
  divider: {
    marginTop: 8,
    marginBottom: 8,
  },
  inputId: {
    marginTop: 8,
  },
  inputName: {
    marginTop: 8,
  },
});

export default AccountInfoModal;
