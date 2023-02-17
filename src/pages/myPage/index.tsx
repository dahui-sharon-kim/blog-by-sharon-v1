import { useState } from "react";
import { Input, SignInModal } from "../../components/Modal/CommonModal";
import { signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";

export interface User {
  email: string;
  password: string;
}

const signIn = async (email: string, password: string) => {
  const response = await signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      console.log(userCredential);
      const user = userCredential.user;
    })
    .catch(error => {
      if (error.code === "email-already-in-use") {
        console.log("이미 사용 중인 이메일입니다")
      } else (
        console.log("알 수 없는 오류입니다")
      )
    })
  return response;
};

interface Modal {
  isOpen: boolean;
  handleClose: React.Dispatch<React.SetStateAction<boolean>>;
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
