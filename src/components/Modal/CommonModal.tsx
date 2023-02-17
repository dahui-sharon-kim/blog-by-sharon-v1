import styled, { keyframes } from "styled-components";
import { IoClose } from "react-icons/io5";
import { FormProps, DivProps, InputProps, SignInProps, SignUpProps } from "../../interfaces";

export function SignInModal({ isOpen, handleClose, width, submitAvailable, handleSubmit, errorMessage, userName, password, setUserName, setPassword }: SignInProps) {
  
  if (!isOpen) return null;
  return (
    <ModalWrapper>
      <Modal width={width}>
        <IoClose style={{ position: 'fixed', right: 40, cursor: 'pointer' }} onClick={() => handleClose(false)} />
        <h1>안녕하세요!</h1>
        <Form
          onSubmit={(event: React.MouseEvent<HTMLElement>) => {
            event.preventDefault();
            if (!submitAvailable) {
              return null;
            }
            handleSubmit();
          }}
        >
          <Input
            height={45}
            borderRadius="5px 5px 0 0"
            placeholder="이메일"
            autoComplete="username"
            type="email"
            name="email"
            value={userName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setUserName(e.target.value)}
          />
          <Input
            height={45}
            borderRadius="0 0 5px 5px"
            margin="-1px 0 0 0"
            placeholder="비밀번호"
            autoComplete="current-password"
            type="password"
            name="password"
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setPassword(e.target.value)}
          />
          <div style={{height: 20}}>
            <p style={{fontSize: 12, color: 'var(--red)', margin: '5px 0'}}>
              {errorMessage}
            </p>
          </div>
          <ModalButton
            height={45}
            margin="10px 0 5px 0"
            type="submit"
            isInvalid={!submitAvailable}
            backgroundColor="linear-gradient(90deg, var(--blue5), var(--blue6))"
          >
            <h3>로그인</h3>
          </ModalButton>
        </Form>
      </Modal>
    </ModalWrapper>
  );
}


export function SignUp({
  submitAvailable,
  handleSubmit,
  errorMessage,
  userName,
  name,
  password, 
  passwordConfirm, 
  setUserName, 
  setName, 
  setPassword, 
  setPasswordConfirm 
}: SignUpProps) {
  return (
    <Form
      onSubmit={(event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
        if (!submitAvailable) {
          return null;
        }
        handleSubmit();
        return null;
      }}
    >
        <Input
          placeholder="이메일"
          autoComplete="username"
          type="email"
          value={userName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setUserName(e.target.value)}
        />
        <div style={{height: 20}}>
          <p style={{fontSize: 12, color: 'var(--red)', margin: '5px 0'}}>
            {errorMessage}
          </p>
        </div>
        <Input
          placeholder="이름"
          autoComplete="name"
          type="name"
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setName(e.target.value)}
        />
        <div style={{height: 20}}>
          <p style={{fontSize: 12, color: 'var(--red)', margin: '5px 0'}}>
            {errorMessage}
          </p>
        </div>
        <Input
          placeholder="비밀번호"
          autoComplete="current-password"
          type="password"
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setPassword(e.target.value)}
        />
        <div style={{height: 20}}>
          <p style={{fontSize: 12, color: 'var(--red)', margin: '5px 0'}}>
            {errorMessage}
          </p>
        </div>
        <Input
          placeholder="비밀번호 확인"
          autoComplete="new-password"
          type="password"
          value={passwordConfirm}
          onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setPasswordConfirm(e.target.value)}
        />
        <div style={{height: 20}}>
          <p style={{fontSize: 12, color: 'var(--red)', margin: '5px 0'}}>
            {errorMessage}
          </p>
        </div>
        <ModalButton
          margin="10px 0 5px 0"
          type="submit"
          isInvalid={!submitAvailable}
          backgroundColor="linear-gradient(90deg, var(--blue5), var(--blue6))"
        >
          <h3>MANEE 로그인</h3>
        </ModalButton>
    </Form>
  );
}

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 30;
`

const boxDropAnimation = keyframes`
  0% {
    opacity: 0%;
    transform: translate(-60%, -55%);
  }
  70% {
    transform: translate(-60%, 75%);
  }
  100% {
    opacity: 100%;
    transform: translate(-60%, 65%);
  }
`;

export const Modal = styled.div<DivProps>`
  position: fixed;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  padding: 30px 40px 40px 40px;
  transform: translate(-60%, 65%);
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
  & > h1 {
    font-size: ${(props) => (props.fontSize ? props.fontSize : 18)}px;
    margin: 20px;
  }
`;

export const ModalButton = styled.button<DivProps>`
  width: ${(props) => props.width ? `${props.width}px` : "100%"};
  height: ${(props) => props.height}px;
  margin: ${(props) => props.margin};
  font-size: 16px;
  background: ${(props) =>
    props.isInvalid
      ? "var(--lightgray4)"
      : props.backgroundColor
      ? props.backgroundColor
      : "var(--blue6)"};
  color: ${(props) => (props.isInvalid ? "var(--gray1)" : "var(--white)")};
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

export const Input = styled.input<InputProps>`
  width: ${(props) => props.width ? `${props.width}px` : '100%' };
  height: ${(props) => props.height}px;
  border-radius: ${(props) => props.borderRadius};
  border: 1px solid var(--lightgray4);
  background-color: ${(props) => props.backgroundColor};
  margin: ${(props) => props.margin};
  padding: 4px 13px;
  outline: none;
  box-sizing: border-box;
  font-size: 16px;
  &:focus {
    z-index: 10;
    border: 1px solid var(--blue4);
  }
`;

export function ErrorMessageContainer(errorMessage: string) {
  return (
    <div style={{height: 20}}>
      <p style={{fontSize: 12, color: 'var(--red)', margin: '5px 0'}}>
        {errorMessage}
      </p>
    </div>
  )
}

export const Form = styled.form<FormProps>`
  width: 100%;
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
