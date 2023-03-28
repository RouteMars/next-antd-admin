type getContainer = () => HTMLElement;

export interface BaseModalProps {
  container?: HTMLElement | getContainer | null;
  isShow: boolean;
  onClose: () => void;
}

export interface BaseCenterModalProps extends BaseModalProps {
  title?: string;
  onOk: () => void;
  okTitle?: string;
  cancelTitle?: string;
}
