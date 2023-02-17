import styled from "styled-components";
import { useState } from "react";
import { Input } from "../../components/Modal/CommonModal";
import { auth, db } from "../../firebase/firebaseConfig";
import { useAuthUser } from "@react-query-firebase/auth";
import { createUserData } from "../../utils/api";
import StarRating from "../../components/Diary/StarRating";
import DiaryDatePicker from "../../components/Diary/DiaryDatePicker";
import SingleConfirmButtonModal from "../../components/Modal/SingleButtonModal";
import { ref, onValue } from "firebase/database";

const BoardWrapper = styled.div`
  height: 100vh;
  display: grid;
  background-color: ${props => props.theme.body};
  color: ${props => props.theme.text};
  grid-template-rows:
    [row-start] 30px [row1] 100px [row2] 30px [row3] auto [row4] 30px [row5] 100px [row-end];
  /* grid-template-columns: [column-start] 30px  [column1] auto [column2] 30px [column-end]; */
  padding: 30px;
`

const FirstRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-row-start: row1;
  grid-row-end: row2;
  grid-column-start: column1;
  grid-column-end: column2;
`
const MiddleRow = styled.div`
  display: flex;
  flex-direction: column;
  grid-row-start: row3;
  grid-row-end: row4;
  grid-column-start: column1;
  grid-column-end: column2;
`
const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`

export default function Board() {
  const OPTION_A = "optionA";
  const OPTION_B = "optionB";
  const OPTION_C = "optionC";
  const OPTION_D = "optionD";
  const OPTION_E = "optionE";
  const MOODS = [OPTION_A, OPTION_B, OPTION_C, OPTION_D, OPTION_E];

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [mood, setMood] = useState("");
  const [date, setDate] = useState(new Date());
  const [isModalOpen, setModalOpen] = useState(false);
  const [dateString, setDateString] = useState(
    `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`
  )
  const [diaryData, setDiaryDate] = useState([]);

  const user = useAuthUser(["user"], auth);
  const uid = user.data ? user.data.uid : '';
  
  function postDiary(uid: string, title: string, content: string, mood: string, date: string) {
    createUserData(`board/${uid}/${Date.now()}`, {title, content, mood, date})
    .then(() =>
      setModalOpen(true)
    )
    .catch(error => console.log(error))
  }
  
  function getDiary(uid: string) {
    const boardRef = ref(db, 'board/' + uid);
    onValue(boardRef, (snapshot) => {
      const data = snapshot.val();
      setDiaryDate(data);
    }
    );
  }

  if (!user.data) {
    return (
      <BoardWrapper>
        <FirstRow>
          <h1>로그인 후 사용가능합니다.</h1>
        </FirstRow>
      </BoardWrapper>
    )
  }

  return (
    <BoardWrapper>
      <FirstRow>
        <h1>일기를 작성해보세요.</h1>
      </FirstRow>
      <MiddleRow>
        <RowContainer>
          <h3>날짜</h3>
          <DiaryDatePicker startDate={date} setStartDate={setDate} />
        </RowContainer>
        <RowContainer>
          <h3>오늘의 기분</h3>
          <StarRating select={mood} setSelect={setMood} options={MOODS} />
        </RowContainer>
        <Input
          width={500}
          height={50}
          value={title}
          placeholder="제목"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => setTitle(event.target.value)}
        />
        <textarea
          value={content}
          onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => setContent(event.target.value)}
        />
        <button onClick={() => postDiary(uid, title, content, mood, date.toString())}>
          업로드 new
        </button>
        {isModalOpen &&
          <SingleConfirmButtonModal isOpen={isModalOpen} handleClose={setModalOpen}>
            <h3>일기가 저장되었습니다</h3>
          </SingleConfirmButtonModal>
        }
      </MiddleRow>
    </BoardWrapper>
  )
}