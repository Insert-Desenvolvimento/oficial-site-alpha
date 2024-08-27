import { create } from "zustand";
import { getDocs, collection } from "firebase/firestore";
import { db } from "@/firebaseConfig";
import { Personal } from "@/types";
import { getImageUrl } from "../firebase/fireStorage";

interface PersonalState {
  personalDocs: Personal[];
  fetchPersonalDocs: () => void;
  updatePersonalDocsWithImages: () => Promise<void>;
}

export const usePersonalStore = create<PersonalState>((set, get) => ({
  personalDocs: [],

  fetchPersonalDocs: async () => {
    const querySnapshot = await getDocs(collection(db, "personal"));
    const docs = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Personal[];
    set({ personalDocs: docs });

    get().updatePersonalDocsWithImages();
  },

  updatePersonalDocsWithImages: async () => {
    const { personalDocs } = get();

    const updatedDocs = await Promise.all(
      personalDocs.map(async (doc) => {
        const imageUrl = await getImageUrl("personal", doc.id);
        return { ...doc, imageUrl };
      })
    );

    set({ personalDocs: updatedDocs });
  },
}));
