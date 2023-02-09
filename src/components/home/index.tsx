import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
`;

export default function Home({ children = "" }) {
  return <Wrapper>{children}</Wrapper>;
}
