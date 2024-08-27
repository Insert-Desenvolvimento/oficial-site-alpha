import { create } from "zustand";
import { getDocs, collection } from "firebase/firestore";
import { db } from "@/firebaseConfig";
import { Partner } from "@/types";
import { getImageUrl } from "../firebase/fireStorage";

interface PartnerState {
  partnerDocs: Partner[];
  fetchPartnerDocs: () => void;
  updatePartnerDocsWithImages: () => Promise<void>;
}

export const usePartnerStore = create<PartnerState>((set, get) => ({
  partnerDocs: [],

  fetchPartnerDocs: async () => {
    const querySnapshot = await getDocs(collection(db, "partners"));
    const docs = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Partner[];
    set({ partnerDocs: docs });

    get().updatePartnerDocsWithImages();
  },

  updatePartnerDocsWithImages: async () => {
    const { partnerDocs } = get();

    const updatedDocs = await Promise.all(
      partnerDocs.map(async (doc) => {
        const imageUrl = await getImageUrl("partner", doc.id);
        return { ...doc, imageUrl };
      })
    );

    set({ partnerDocs: updatedDocs });
  },
}));
