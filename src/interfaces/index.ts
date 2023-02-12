export interface CommentType {
  writer: string;
  createdAt: string;
}

export interface Props {
  children: any;
  width?: number;
  height?: number;
  fontSize?: number;
  margin?: string;
  padding?: string;
  isInvalid?: boolean;
  isOpen?: boolean;
  backgroundColor?: string;
  borderRadius?: string;

  onClick?: any;
  handleClose?: () => void;
}
