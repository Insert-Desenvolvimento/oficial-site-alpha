import { create } from "zustand";
import { getDocs, collection } from "firebase/firestore";
import { db } from "@/firebaseConfig";
import { Plan } from "@/types";

interface CombinationState {
  combinationDocs: Plan[];
  fetchCombinationDocs: () => void;
}

export const useCombinationStore = create<CombinationState>((set) => ({
  combinationDocs: [],

  fetchCombinationDocs: async () => {
    const querySnapshot = await getDocs(collection(db, "combination"));
    const docs = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Plan[];
    set({ combinationDocs: docs });
  },
}));
