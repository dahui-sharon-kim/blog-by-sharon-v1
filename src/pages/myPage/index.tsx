import { useState } from "react";
import { Input, SignInModal } from "../../components/Modal/CommonModal";
import { signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";

export interface User {
  email: string;
  password: string;
}

export default function MyPage() {
  const [displayName, setDisplayName] = useState("");
  function updateUserProfile(displayName: string) {
    if (!auth.currentUser) {
      return null;
    }
    updateProfile(auth.currentUser, {
      displayName
    }).then(
      () => alert("프로필 수정 완료")
    ).catch((error) => {
      console.log(error)
    })
  }

  if (!auth.currentUser) {
    console.log("로그인을 해주세요", auth)
  }
  return (
    <div>
      <h1>개인정보 수정</h1>
      <Input
        width={300}
        height={40}
        borderRadius="3px"
        placeholder="닉네임을 입력하세요"
        type="name"
        value={displayName}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setDisplayName(event.target.value)}
      />
      <button
        onClick={() => updateUserProfile(displayName)}
        style={{height: 40, margin: 0, padding: 0}}
      >
        확인
      </button>
    </div>
  );
}
