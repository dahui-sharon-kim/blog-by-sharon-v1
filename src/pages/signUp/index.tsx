import { useState } from "react";
import { SignUp } from "../../components/Modal/Modal";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";
import { useMutation } from "react-query";

export interface User {
  email: string;
  password: string;
}

const register = async (email: string, password: string) => {
  const response = await createUserWithEmailAndPassword(auth, email, password)
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
}

export default function SignUpPage() {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const submitAvailable = true;

  function createAccount(username: string, password: string) {
    createUserWithEmailAndPassword(auth, username, password)
       .then(userCredential => {
         //  signed in
         const user = userCredential.user
         console.log(user)
         alert(`계정 생성 완료`)
       })
       .catch(error =>{
         const errorCode = error.code
         const errorMessage = error.message
         console.log(errorCode, errorMessage)
       })
     }
  

  return (
    <SignUp
      submitAvailable={submitAvailable}
      onSubmit={() => createAccount(userName, password)}
      userName={userName}
      name={name}
      password={password}
      passwordConfirm={passwordConfirm}
      setUserName={setUserName}
      setName={setName}
      setPassword={setPassword}
      setPasswordConfirm={setPasswordConfirm}
    />
  );
}
