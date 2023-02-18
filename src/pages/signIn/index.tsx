import { useState } from "react";
import { SignInModal } from "../../components/Modal/CommonModal";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";
import { useQuery, useMutation } from "react-query";

export interface User {
  email: string;
  password: string;
}

interface Modal {
  isOpen: boolean;
  handleClose: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SignIn({ isOpen, handleClose }: Modal) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [signInError, setSignInError] = useState("");
  const submitAvailable = true;

  const signInFirebase = async (email: string, password: string) => {
    const response = await signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        console.log(userCredential);
        setSignInError("")
        const user = userCredential.user;
      })
      .catch(error => {
        if (error.code === "auth/user-not-found") {
          setSignInError("존재하지 않는 계정입니다")
          return null;
        }
        if (error.code === "auth/invalid-email") {
          setSignInError("이메일을 확인하세요")
          return null;
        }
        if (error.code === "auth/wrong-password") {
          setSignInError("비밀번호가 틀렸습니다")
          return null;
        }
        console.log(error)
        setSignInError("알 수 없는 오류입니다")
      })
    return response;
  };

  // const submitAvailable = (email: string, password: string) => {
  //   const emailReg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  //   const passwordReg = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  //   return email.length !== 0 && emailReg.test(email) && passwordReg.test(password);
  // };

  return (
    <SignInModal
      isOpen={isOpen}
      handleClose={handleClose}
      width={250}
      submitAvailable={submitAvailable}
      handleSubmit={() => signInFirebase(userName, password)}
      userName={userName}
      setUserName={setUserName}
      password={password}
      setPassword={setPassword}
      errorMessage={signInError}
    />
  );
}
