import { create } from "zustand";
import { getDocs, collection } from "firebase/firestore";
import { db } from "@/firebaseConfig";
import { PageText } from "@/types";

interface PageTextState {
  pageText: PageText[];
  fetchPageText: () => void;
}

export const usePageTextStore = create<PageTextState>((set) => ({
  pageText: [],

  fetchPageText: async () => {
    const querySnapshot = await getDocs(collection(db, "pageText"));
    const docs = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as PageText[];
    set({ pageText: docs });
  },
}));
