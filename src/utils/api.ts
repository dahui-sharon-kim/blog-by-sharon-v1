import { ref, update, onValue } from "firebase/database";
import { db } from "../firebase/firebaseConfig";

export async function createUserData(location: string, payload: object) {
  const response = await update(ref(db, location), payload)
  return response;
}