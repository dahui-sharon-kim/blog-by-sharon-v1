import { useEffect, useState } from "react";
import styled from "styled-components";
import { auth, db } from "../../firebase/firebaseConfig";
import { useAuthUser } from "@react-query-firebase/auth"
import { useDatabaseSnapshot } from "@react-query-firebase/database"
import DiaryPreview, { Divider } from "../../components/Diary/DiaryPreview";
import { ref, onValue } from "firebase/database";
import Toggle from "../../components/Button/toggle";

const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  display: grid;
  grid-template-columns: 100px auto 100px;
  grid-template-rows: 300px auto 100px;
  row-gap: 60px;
`;

const FirstRowContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  padding-bottom: 30px;
  border-bottom: 1px solid ${props => props.theme.text};
  h1 {
    margin-bottom: 10px;
  }
  span {
    color: var(--blue5)
  }
`
const SecondRowContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  & > h2 {
    margin-bottom: 10px;
  }
  h3 {
    color: ${props => props.theme.textGray}
  }
`
const DiaryPreviewContainer = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  row-gap: 20px;
  gap: 20px;
  column-gap: 40px;
  grid-column: 2 / 3;
  transform: translate3d(0px, 50px, 0px);
  animation: 1000ms ease-in-out 502.2ms 1 normal forwards running;
  @media (max-width: 1200px) {  
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
  }
  @media (max-width: 700px) {  
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }
`

const RowContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`

export default function Home () {
  const [mockDiaryData, setMockDiaryData] = useState([{
    title: "",
    date: "",
    mood: "",
    content: ""
  }])
  const [position, setPosition] = useState(0);
  const [isPreviewMoodShown, showPreviewMood] = useState(true);
  function onScroll() {
    setPosition(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    getDiary('test');
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const user = useAuthUser(["user"], auth)
  const boardTestRef = ref(db, "board");
  const diaryMockData = useDatabaseSnapshot(["diaryMockData"], boardTestRef, {
    subscribe: true
  });

  const diaryMockDataSnapshot = diaryMockData.data;

  console.log('diaryMockDataSnapshot', boardTestRef);

  function getDiary(uid: string) {
    const boardRef = ref(db, 'board/' + uid);
    onValue(boardRef, (snapshot) => {
      const data = snapshot.val();
      setMockDiaryData(data);
    });
  }
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
          <>
            <h1>안녕하세요, {user.data.displayName} 님!</h1>
            <h1>오늘도 <span>Good Dayz</span>에 당신의 이야기를 들려주세요.</h1>
          </>
          : 
          <>
            <h1>안녕하세요.</h1>
            <h1>나만의 무드를 표현하는 일기앱 <span>Good Dayz</span> 입니다</h1>
            <h1>로그인 후 모든 기능을 즐겨보세요!</h1>
          </>
        }
      </FirstRowContainer>
      <SecondRowContainer>
        <h2>주간 다이어리 미리보기</h2>
        <RowContainer>
          <h3 style={{ width: 125 }}>{isPreviewMoodShown? 'Show Mood' : 'Hide Mood'}</h3>
          <Toggle checked={isPreviewMoodShown} onChange={() => showPreviewMood(prev => !prev)} />
        </RowContainer>
        <DiaryPreviewContainer>
          {mockDiaryData.map((diary, index) => 
            <DiaryPreview background={`var(--gradient${index+1})`} grayscale={isPreviewMoodShown}>
              <h2>{diary.title}</h2>
              <p style={{ fontSize: "0.8rem", marginTop: "10px", textAlign: "right" }}>
                {new Date(diary.date).getFullYear()}-{new Date().getMonth()+1}-{new Date().getDate()}
                {/* TODO: date는 유틸 함수에 넣기 */}
              </p>
              <Divider />
              <p>{diary.content}</p>
            </DiaryPreview> 
          )}
        </DiaryPreviewContainer>
      </SecondRowContainer>
    </Wrapper>
  );
  
}
