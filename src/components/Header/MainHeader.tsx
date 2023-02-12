import styled from "styled-components";

const Wrapper = styled.div`
  width: 100vw;
  height: 50px;
  display: flex;
  background-color: ${(props) => props.theme.body};
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  position: fixed;
  top: 0;
  z-index: 20;
`;

const MainPageHeaderButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px;
  cursor: pointer;
  & > h3 {
    margin: 0;
    font-size: 17px;
    color: var(--white);
  }
`;

const renderMainPageHeaderButton = (text: string) => {
  return (
    <MainPageHeaderButton
      onClick={() => {
        alert(text);
      }}
    >
      <h3>{text}</h3>
    </MainPageHeaderButton>
  );
};
export default function MainHeader() {
  return <Wrapper>home hello</Wrapper>;
}
