import React from "react";

export interface CommentType {
  writer: string;
  createdAt: string;
}

export interface Props {
  children?: React.ReactNode;
  width?: number;
  height?: number;
  fontSize?: number;
  margin?: string;
  padding?: string;
  errorMessage?: string;
  isInvalid?: boolean;
  isOpen?: boolean;
  backgroundColor?: string;
  borderRadius?: string;
  submitAvailable: boolean;
  Modal?: React.ReactNode;

  onClick?: any;
  handleClose?: () => void;
  onSubmit: () => void;
}

export interface SignInProps {
  children?: React.ReactNode;
  width?: number;
  height?: number;
  fontSize?: number;
  margin?: string;
  padding?: string;
  errorMessage?: string;
  isInvalid?: boolean;
  isOpen?: boolean;
  backgroundColor?: string;
  borderRadius?: string;
  submitAvailable: boolean;
  Modal?: React.ReactNode;

  onClick?: any;
  handleClose: React.Dispatch<React.SetStateAction<boolean>>;
  handleSubmit: any;

  userName?: string;
  password: string;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
}

export interface SignUpProps {
  width?: number;
  height?: number;
  fontSize?: number;
  margin?: string;
  padding?: string;
  errorMessage?: string;
  isInvalid?: boolean;
  backgroundColor?: string;
  borderRadius?: string;
  submitAvailable: boolean;
  handleSubmit: () => void;
  userName: string;
  name: string;
  password: string;
  passwordConfirm: string;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  setPasswordConfirm: React.Dispatch<React.SetStateAction<string>>;
}

export interface InputProps {
  placeholder: string;
  value: string | undefined;
  onChange: any;
  autoComplete?: string;
  type?: string;
  name?: string;
  width?: number;
  height?: number;
  fontSize?: number;
  margin?: string;
  padding?: string;
  backgroundColor?: string;
  borderRadius?: string;
  Input?: React.ReactNode
}

export interface DivProps {
  children?: React.ReactNode;
  isInvalid?: boolean;
  isOpen?: boolean;
  width?: number;
  height?: number;
  fontSize?: number;
  margin?: string;
  padding?: string;
  borderRadius?: string;
  backgroundColor?: string;
  onClick?: any;
}

export interface FormProps {
  children?: React.ReactNode;
  isInvalid?: boolean;
  isOpen?: boolean;
  height?: number;
  width?: number;
  fontSize?: number;
  margin?: string;
  padding?: string;
  backgroundColor?: string;
  onSubmit: any;
  // onSubmit: () => void | {event: React.FormEvent => {return null};
}

export interface FormProps {
  height?: number;
  width?: number;
  margin?: string;
  padding?: string;
}

export interface HeaderProps {
  isLightMode: boolean;
  setMode: (value: React.SetStateAction<boolean>) => void
  handleSignInModal: (value: React.SetStateAction<boolean>) => void
}

export interface ModeProps {
  isLightMode: boolean;
  setMode: (value: React.SetStateAction<boolean>) => void;
  isModalOpen: boolean;
  handleModalClose: (value: React.SetStateAction<boolean>) => void;
}