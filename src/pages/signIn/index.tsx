import { useState } from "react";
import { SignInModal } from "../../components/Modal/Modal";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";
import { useMutation } from "react-query";

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

export default function SignIn({ isOpen, handleClose }: Modal) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const submitAvailable = true;

  return (
    <SignInModal
      isOpen={isOpen}
      handleClose={handleClose}
      width={380}
      submitAvailable={submitAvailable}
      onSubmit={() => signIn(userName, password)}
      userName={userName}
      setUserName={setUserName}
      password={password}
      setPassword={setPassword}
    />
  );
}
