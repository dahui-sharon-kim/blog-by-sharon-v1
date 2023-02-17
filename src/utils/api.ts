import { set, ref } from "firebase/database";
import { db } from "../firebase/firebaseConfig";

export async function createUserData(location: string, payload: object) {
  const response = await set(ref(db, location), payload)
  return response;
}