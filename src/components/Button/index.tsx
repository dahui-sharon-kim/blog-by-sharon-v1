import styled from "styled-components";

interface ButtonProps {
  children: React.ReactNode;
  width: number;
  height: number;
  margin?: string;
  isInvalid: boolean;
  backgroundColor: string;
  borderRadius: string;
  border: string;
}
export const Button = styled.button<ButtonProps>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  margin: ${(props) => props.margin};
  background: ${(props) =>
    props.isInvalid
      ? "var(--lightgray4)"
      : props.backgroundColor
      ? props.backgroundColor
      : "var(--blue6)"};
  color: ${(props) => (props.isInvalid ? "var(--gray1)" : "var(--white)")};
  border-radius: ${(props) => props.borderRadius};
  border: ${(props) => props.border};
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