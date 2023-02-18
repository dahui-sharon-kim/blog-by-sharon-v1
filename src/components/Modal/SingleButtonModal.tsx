import React from "react";
import styled from "styled-components";
import { Modal, ModalButton } from "./CommonModal";

const ModalWrapper = styled.div`
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

interface SingleButtomModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  handleClose: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SingleConfirmButtonModal({ children, isOpen, handleClose }: SingleButtomModalProps) {
  if (!isOpen) {
    return null;
  }
  return (
    <ModalWrapper onClick={() => handleClose(false)}>
      <Modal
        width={300}
        isOpen={isOpen}
        padding="30px"
        fontSize={16}
      >
        {children}
        <ModalButton margin="10px 0 0 0" isInvalid={false} onClick={handleClose}>
          <h3>확인</h3>
        </ModalButton>
      </Modal>
    </ModalWrapper>
  );
}
