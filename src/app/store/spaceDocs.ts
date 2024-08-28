import { create } from "zustand";
import { getDocs, collection } from "firebase/firestore";
import { db } from "@/firebaseConfig";
import { Space } from "@/types";
import { getImageUrl } from "../firebase/fireStorage";

interface SpaceState {
  spaceDocs: Space[];
  fetchSpaceDocs: () => void;
  updateSpaceDocsWithImages: () => Promise<void>;
}

export const useSpaceStore = create<SpaceState>((set, get) => ({
  spaceDocs: [],

  fetchSpaceDocs: async () => {
    const querySnapshot = await getDocs(collection(db, "space"));
    const docs = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Space[];
    set({ spaceDocs: docs });

    get().updateSpaceDocsWithImages();
  },

  updateSpaceDocsWithImages: async () => {
    const { spaceDocs } = get();
    console.log(spaceDocs);

    const updatedDocs = await Promise.all(
      spaceDocs.map(async (doc) => {
        const imageUrl = await getImageUrl("space", doc.id);
        return { ...doc, imageUrl };
      })
    );

    set({ spaceDocs: updatedDocs });
  },
}));
