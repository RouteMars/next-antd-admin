import React, { PropsWithChildren } from 'react';

import { Modal } from 'antd';
import { ModalProps } from 'antd/es/modal/Modal';

import { BaseCenterModalProps } from '@component/modal/_base/BaseModal.interface';

import Common from '@util/Common';

const BaseCenterModal = (props: PropsWithChildren<BaseCenterModalProps>) => {
  const { children, isShow, onOk, onClose } = props;

  const createModalProps = (): ModalProps => {
    const { container, title, okTitle, cancelTitle } = props;
    const modalProps: ModalProps = {
      centered: true,
      closable: false,
      maskClosable: false,
    };
    if (container) modalProps.getContainer = container;
    if (!Common.isEmpty(title)) modalProps.title = title;
    if (!Common.isEmpty(okTitle)) modalProps.okText = okTitle;
    if (!Common.isEmpty(cancelTitle)) modalProps.cancelText = cancelTitle;
    return modalProps;
  };

  return (
    <Modal {...createModalProps()} open={isShow} onOk={onOk} onCancel={onClose}>
      {children}
    </Modal>
  );
};

export default BaseCenterModal;
