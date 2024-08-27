import { create } from "zustand";
import { getDocs, collection } from "firebase/firestore";
import { db } from "@/firebaseConfig";
import { Modality } from "@/types";
import { getImageUrl } from "../firebase/fireStorage";

interface ModalitieState {
  modalityDocs: Modality[];
  fetchModalityDocs: () => void;
  updateModalityDocsWithImages: () => Promise<void>;
}

export const useModalityStore = create<ModalitieState>((set, get) => ({
  modalityDocs: [],

  fetchModalityDocs: async () => {
    const querySnapshot = await getDocs(collection(db, "modalities"));
    const docs = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Modality[];
    set({ modalityDocs: docs });

    get().updateModalityDocsWithImages();
  },

  updateModalityDocsWithImages: async () => {
    const { modalityDocs } = get();

    const updatedDocs = await Promise.all(
      modalityDocs.map(async (doc) => {
        const imageUrl = await getImageUrl("modalities", doc.id);
        return { ...doc, imageUrl };
      })
    );

    set({ modalityDocs: updatedDocs });
  },
}));
