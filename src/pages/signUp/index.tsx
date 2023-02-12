import { useState } from "react";
import { SignInModal } from "../../components/Modal/Modal";

export default function SignIn() {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [page, setPage] = useState(1);
  const [isModalOpen, setModalOpen] = useState(true);

  return (
    <SignInModal isOpen={isModalOpen} handleClose={() => setModalOpen(false)}>
      hello
    </SignInModal>
  );
}
