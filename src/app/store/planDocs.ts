import { create } from "zustand";
import { getDocs, collection } from "firebase/firestore";
import { db } from "@/firebaseConfig";
import { Modality, Plan } from "@/types";

interface PlanState {
  planDocs: Plan[];
  fetchPlanDocs: () => void;
}

export const useModalityStore = create<PlanState>((set) => ({
  planDocs: [],

  fetchPlanDocs: async () => {
    const querySnapshot = await getDocs(collection(db, "plans"));
    const docs = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Plan[];
    set({ planDocs: docs });
  },
}));
