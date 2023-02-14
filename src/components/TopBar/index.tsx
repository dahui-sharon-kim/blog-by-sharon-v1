import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { HeaderProps } from "../../interfaces";
import { IoSunny, IoMoon } from "react-icons/io5";

const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  padding: 0 15px;
  color: ${props => props.theme.text};
  background-color: ${props => props.theme.body};
  border-bottom: 1px solid var(--lightgray4);
  display: grid;
  grid-template-columns: [column-start] 200px [column1] auto [column2] 100px [column-end];
  position: sticky;
  top: 0;
  z-index: 20;
  button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.text};
    background: none;
    border: none;
    padding: 0;
    font-size: 18px;
    cursor: pointer;
    & > h1 {
      font-weight: 900;
    }
    & > h2 {
      font-weight: 700;
    }
  }
`;

const LogoButton = styled.button`
  grid-column-start: column-start;
  grid-column-end: 1;
`
const SignInButton = styled.button`
  grid-column-start: column2;
  grid-column-end: column-end;
`
const MiddleContainer = styled.div`
  display: flex;
  flex-direction: row;
  grid-column-start: column1;
  grid-column-end: column2;

`


export default function TopBar({isLightMode, setMode, setSignInModal}: HeaderProps) {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <LogoButton onClick={() => navigate('/')}>
        <h1>Good Dayz</h1>
      </LogoButton>
      <MiddleContainer>
        <button onClick={() => setMode(prev => !prev)}>
          {isLightMode? <IoSunny /> : <IoMoon /> }
        </button>
        <button>
          <h2>게시판</h2>
        </button>
        <button>
          <h2>마이페이지</h2>
        </button>
      </MiddleContainer>
      <SignInButton onClick={() => setSignInModal(true)}>
        <h2>로그인</h2>
      </SignInButton>
    </Wrapper>
  );
}