import { useState } from "react";
import { Input } from "../../components/Modal/Modal";
import { database } from "../../firebase/firebaseConfig";
import { getDatabase, ref, set } from "firebase/database";

function writeUserData(userId: string, title: string) {
  const db = getDatabase();
  set(ref(db, 'board/' + userId), {
    title
  })
  .then(() =>
    alert('업로드 완료')
  )
  .catch(error => console.log(error))
}

export default function Board() {
  // console.log(database)
  const [title, setTitle] = useState('');
  return (
    <div>
      <h1>
        게시판입니다.
      </h1>
      <Input
        width={500}
        height={50}
        value={title}
        placeholder="제목"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setTitle(event.target.value)}
      />
      <button onClick={() => writeUserData('testUser', title)}>
        업로드
      </button>
    </div>
  )
}