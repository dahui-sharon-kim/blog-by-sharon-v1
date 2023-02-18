import styled from "styled-components";

const DiaryPreviewContainer = styled.li<{background: string, grayscale: boolean}>`
  min-height: 100px;
  background: ${props => props.grayscale? props.background : props.theme.bg };
  border: ${props => props.grayscale? "none" : `solid 1px ${props.theme.text}`};
  border-radius: var(--border-radius4);
  padding: 20px;
  display: flex;
  flex-direction: column;
`

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${props => props.theme.text};
  margin: 15px 0 13px 0;
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