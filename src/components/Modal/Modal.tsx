import styled, { keyframes } from "styled-components";
import { Props } from "../../interfaces";

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 30;
`;

const boxDropAnimation = keyframes`
  0% {
    opacity: 0%;
    transform: translate(-50%, -100%);
  }
  70% {
    transform: translate(-50%, -30%)
  }
  100% {
    opacity: 100%;
    transform: translate(-50%, -50%)
  }
`;

export const Modal = styled.div<Props>`
  position: fixed;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  top: 50%;
  left: 50%;
  padding: 30px 40px 40px 40px;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 40;
  background-color: var(--white);
  box-shadow: var(--shadow1);
  border-radius: var(--border-radius2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  animation: ${boxDropAnimation} 300ms linear;
  & > h3 {
    font-size: ${(props) => (props.fontSize ? props.fontSize : 15)}px;
    margin: 10px;
  }
`;

const ModalButtonContainer = styled.button<Props>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  font-size: 16px;
  background: ${(props) =>
    props.isInvalid
      ? "var(--lightgray4)"
      : props.backgroundColor
      ? props.backgroundColor
      : "var(--blue-main)"};
  color: ${(props) => (props.isInvalid ? "var(--gray-main)" : "var(--white)")};
  border-radius: 6px;
  border: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  & > h3 {
    font-size: 16px;
  }
  & > p {
    font-size: 13px;
  }
`;

export function ModalButton({
  children,
  width,
  height,
  margin,
  backgroundColor,
  isInvalid,
  onClick,
}: Props) {
  return (
    <ModalButtonContainer
      width={width}
      height={height}
      margin={margin}
      backgroundColor={backgroundColor}
      isInvalid={isInvalid}
      onClick={onClick}
    >
      {children}
    </ModalButtonContainer>
  );
}

export const InputContainer = styled.div<Props>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  margin: ${(props) => props.margin};
`;

export const Input = styled.input<Props>`
  width: 100%;
  height: ${(props) => props.height};
  border-radius: ${(props) => props.borderRadius};
  border: 1px solid var(--lightgray4);
  background-color: ${(props) => props.backgroundColor};
  margin: ${(props) => props.margin};
  padding: 4px 13px;
  outline: none;
  box-sizing: border-box;
  font-size: 16px;
`;

export const ErrorMessageContainer = styled.div`
  height: 20px;
  & > p {
    font-size: 12px;
    color: var(--red);
    margin: 5px 0;
  }
`;

export const ModalForm = styled.form`
  width: 100%;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TitleArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  & > h1 {
    font-size: 20px;
    margin-left: 10px;
    color: var(--black);
  }
`;

const SocialSignInDividerContainer = styled.div<Props>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: ${(props) => props.margin};
  & > p {
    font-size: 13px;
    color: var(--lightgray4);
  }
`;

const Divider = styled.div`
  width: 43%;
  height: 1px;
  background-color: var(--lightgray4);
`;

export function SocialSignInDivider({ margin }: Props) {
  return (
    <SocialSignInDividerContainer margin={margin}>
      <Divider />
      <p> or </p>
      <Divider />
    </SocialSignInDividerContainer>
  );
}

export function SignInModal({ children, isOpen, handleClose, width }: Props) {
  if (!isOpen) {
    return null;
  }
  return (
    <ModalWrapper onClick={handleClose}>
      <Modal
        width={width}
        isOpen={isOpen}
        onClick={(event: React.MouseEvent<HTMLElement>) => {
          event.stopPropagation();
        }}
      >
        <h3>{children}</h3>
        <button type="button" onClick={handleClose}>
          닫아죠
        </button>
      </Modal>
    </ModalWrapper>
  );
}
