import styled from "styled-components";
import { useState } from "react";
import { auth, db } from "../../firebase/firebaseConfig";
import { useAuthUser } from "@react-query-firebase/auth";
import { createUserData } from "../../utils/api";
import StarRating from "../../components/Diary/StarRating";
import DiaryDatePicker from "../../components/Diary/DiaryDatePicker";
import SingleConfirmButtonModal from "../../components/Modal/SingleButtonModal";
import { ref, onValue } from "firebase/database";

const BoardWrapper = styled.div`
  min-height: 100vh;
  display: grid;
  background-color: ${props => props.theme.body};
  color: ${props => props.theme.text};
  grid-template-rows: 100px auto 100px;
  gap: 30px;
  padding: 100px;
`

const FirstRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-row: 1 / 2;
`
const MiddleRow = styled.div`
  display: flex;
  flex-direction: column;
  grid-row: 2 / 3;
`
const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  background: ${props => props.theme.bg};
  margin-bottom: 30px;
  padding: 20px;
  h3 {
    margin-right: 15px;
  }
`
const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: ${props => props.theme.bg};
  margin-bottom: 30px;
  padding: 20px;
  input {
    width: 100%;
    height: 45px;
    border-bottom: 1px solid ${props => props.theme.text};
    border-width: 0 0 1px 0;
    font-size: 1.2rem;
    margin-bottom: 20px;
    background-color: transparent;
    &:focus {
      outline: none;
      border-bottom: 1px solid var(--blue3);
    }
  }
  textarea {
    width: 100%;
    height: 300px;
    border: none;
    font-size: 1.2rem;
    background-color: transparent;
    &:focus {
      outline: none;
    }
  }
  h3 {
    margin-right: 15px;
  }
`

export default function Board() {

  // TODO: constants 폴더에 선언

  const OPTION_A = "optionA"
  const OPTION_B = "optionB"
  const OPTION_C = "optionC"
  const OPTION_D = "optionD"
  const OPTION_E = "optionE"
  const OPTION_F = "optionF"
  const MOODS = ["optionA","optionB", "optionC","optionD","optionE", "optionF"] 

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [mood, setMood] = useState("");
  const [date, setDate] = useState(new Date());
  const [isModalOpen, setModalOpen] = useState(false);
  const [diaryData, setDiaryData] = useState([]);

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
      setDiaryData(data);
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
        <ColumnContainer>
          <input
            value={title}
            placeholder="제목"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setTitle(event.target.value)}
          />
          <textarea
            value={content}
            placeholder="내용"
            onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => setContent(event.target.value)}
          />
          <button onClick={() => postDiary(uid, title, content, mood, date.toString())}>
            업로드
          </button>
        </ColumnContainer>
        {isModalOpen &&
          <SingleConfirmButtonModal isOpen={isModalOpen} handleClose={setModalOpen}>
            <h3>일기가 저장되었습니다</h3>
          </SingleConfirmButtonModal>
        }
      </MiddleRow>
    </BoardWrapper>
  )
}