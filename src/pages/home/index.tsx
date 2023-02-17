import { useEffect, useState } from "react";
import styled from "styled-components";
import { auth, db } from "../../firebase/firebaseConfig";
import { useAuthUser } from "@react-query-firebase/auth"
import DiaryPreview from "../../components/Diary/DiaryPreview";

const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  display: grid;
  grid-template-columns: [column-start] 100px [column1] auto [column2] 100px [column-end];
  grid-template-rows: 150px auto 100px;
  row-gap: 30px;
`;

const FirstRowContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  grid-column: 2 / 3;
  grid-row: 1 / 2;
`
const SecondRowContainer = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  row-gap: 20px;
  gap: 20px;
  column-gap: 40px;
  grid-column: 2 / 3;
  @media (max-width: 1200px) {  
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
  }
  @media (max-width: 700px) {  
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }
`

export default function Home () {
  const [position, setPosition] = useState(0);
  const [isPreviewMoodShown, showPreviewMood] = useState(true);
  function onScroll() {
    setPosition(window.scrollY);
  }
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);


  const user = useAuthUser(["user"], auth)
  // const mutation = useAuthSignOut(auth);
  // const userImg = user?.photoURL;
  // const image = userImg? userImg : 'https://picsum.photos/id/237/100/100'

  if (user.isLoading) {
    return (
      <Wrapper> 로딩 중 </Wrapper>
    )
  }
  return (
    <Wrapper>
      <FirstRowContainer>
        { user.data ?
          <h1> 안녕하세요, {user.data.displayName} 님 </h1>
          : <h1> 로그인 후 모든 기능을 즐겨보세요! </h1>
        }
        {/* style={{display: 'flex', gridRow: '1 / 2' }}  */}
      <button onClick={() => showPreviewMood(prev => !prev)}>
        {isPreviewMoodShown? '기분 보이기' : '기분 감추기'}
      </button>
      </FirstRowContainer>
      <SecondRowContainer>
        {[1, 2, 3, 4, 5, 6].map(num => 
          <DiaryPreview background={`var(--gradient${num})`} grayscale={isPreviewMoodShown}>
            <h1>제목</h1>
            <p>일기</p>
          </DiaryPreview>
        )}
      </SecondRowContainer>
    </Wrapper>
  );
  
}
