import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebaseConfig";
import { useAuthUser } from "@react-query-firebase/auth";
import { HeaderProps } from "../../interfaces";
import { IoSunny, IoMoon } from "react-icons/io5";
import { signOut } from "firebase/auth";

const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  color: ${props => props.theme.text};
  background-color: ${props => props.theme.body};
  border-bottom: 1px solid var(--lightgray4);
  display: grid;
  grid-template-columns: [column-start] 200px [column1] minmax(300px, auto) [column2] 200px [column-end];
  position: sticky;
  top: 0;
  z-index: 20;
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.text};
    background: none;
    border: none;
    margin-right: 20px;
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

const StartContainer = styled.div`
  grid-column-start: column-start;
  grid-column-end: 1;
`
const MiddleContainer = styled.div`
  grid-column-start: column1;
  grid-column-end: column2;
`
const EndContainer = styled.div`
  grid-column-start: column2;
  grid-column-end: column-end;
`

export default function TopBar({isLightMode, setMode, handleSignInModal}: HeaderProps) {
  const navigate = useNavigate();
  const user = useAuthUser(["user"], auth);

  const handleSignInOut = () => {
    if (!user.data) {
      handleSignInModal(true)
      return null;
    }
    signOut(auth).catch((error) => {
      console.log(error)
    })
  }
  return (
    <Wrapper>
      <StartContainer>
        <button onClick={() => navigate('/')}>
          <h1>Good Dayz</h1>
        </button>
      </StartContainer>
      <MiddleContainer style={{ justifyContent: 'flex-start' }}>
        <button onClick={() => navigate('/board')}>
          <h2>일기장</h2>
        </button>
        <button>
          <h2>마이페이지</h2>
        </button>
      </MiddleContainer>
      <EndContainer>
        <button onClick={() => setMode(prev => !prev)}>
          {isLightMode? <IoSunny /> : <IoMoon /> }
        </button>
        <button onClick={handleSignInOut}>
          <h2> { user.data ? '로그아웃' : '로그인' } </h2>
        </button>
      </EndContainer>
    </Wrapper>
  );
}