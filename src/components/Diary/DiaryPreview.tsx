import styled from "styled-components";

const DiaryPreviewContainer = styled.li<{background: string, grayscale: boolean}>`
  min-height: 100px;
  background: ${props => props.grayscale? props.background : props.theme.bg };
  border: ${props => props.grayscale? "none" : `solid 1px ${props.theme.text}`};
  border-radius: var(--border-radius4);
  padding: 20px;
  display: flex;
  flex-direction: column;
  h1 {
    margin-bottom: 10px;
  }
`

type DiaryProps = {
  children: React.ReactNode;
  background: string;
  grayscale: boolean;
}

export default function DiaryPreview({children, background, grayscale}: DiaryProps): JSX.Element {
  return (
    <DiaryPreviewContainer background={background} grayscale={grayscale}>
      {children}
    </DiaryPreviewContainer>
  )
}