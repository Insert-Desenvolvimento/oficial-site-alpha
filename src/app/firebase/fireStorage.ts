import { db } from "@/firebaseConfig";
import { Modality, Partner, Personal, Space } from "@/types";
import { collection, getDocs, QuerySnapshot } from "firebase/firestore";
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "@/firebaseConfig";

export const getImageUrl = async (path: string): Promise<string> => {
  try {
    const imageRef = ref(storage, path);
    const url = await getDownloadURL(imageRef);
    return url;
  } catch (error) {
    console.error("Error getting image URL:", error);
    throw error;
  }
};

export const fetchModalities = async (): Promise<Modality[]> => {
  const querySnapshot: QuerySnapshot = await getDocs(
    collection(db, "modalities")
  );
  return querySnapshot.docs.map(
    (doc) => ({ id: doc.id, ...doc.data() } as Modality)
  );
};

export const fetchPartners = async (): Promise<Partner[]> => {
  const querySnapshot: QuerySnapshot = await getDocs(
    collection(db, "partners")
  );
  return querySnapshot.docs.map(
    (doc) => ({ id: doc.id, ...doc.data() } as Partner)
  );
};

export const fetchPersonal = async (): Promise<Personal[]> => {
  const querySnapshot: QuerySnapshot = await getDocs(
    collection(db, "personal")
  );
  console.log(querySnapshot);
  return querySnapshot.docs.map(
    (doc) => ({ id: doc.id, ...doc.data() } as Personal)
  );
};

export const fetchSpace = async (): Promise<Space[]> => {
  const querySnapshot: QuerySnapshot = await getDocs(collection(db, "space"));
  return querySnapshot.docs.map(
    (doc) => ({ id: doc.id, ...doc.data() } as Space)
  );
};
