import styled from "styled-components";
import SignIn from "../signUp";

const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
`;

export default function Home() {
  return (
    <Wrapper>
      <SignIn />
    </Wrapper>
  );
}
