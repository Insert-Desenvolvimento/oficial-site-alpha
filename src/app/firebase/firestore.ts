import { db } from "@/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

export const getPersonalDocs = async () => {
  try {
    const querySnapShot = await getDocs(collection(db, "personal"));
    const docs = querySnapShot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return docs;
  } catch (e) {
    console.error("Error geting data: ", e);
  }
};

export const getPlansDocs = async () => {
  try {
    const querySnapShot = await getDocs(collection(db, "plan"));
    const docs = querySnapShot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return docs;
  } catch (e) {
    console.error("Error geting data: ", e);
  }
};
