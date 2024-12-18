import { create } from "zustand";
import { getDocs, collection } from "firebase/firestore";
import { db } from "@/firebaseConfig";
import { ItemBanner } from "@/types";


interface BannerState {
  itemBannerDocs: ItemBanner[];
  fetchItemBannerDocs: () => void;
}

export const useBannerStore = create<BannerState>((set) => ({
  itemBannerDocs: [],

  fetchItemBannerDocs: async () => {
    const querySnapshot = await getDocs(collection(db, "banner"));
    const docs = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as ItemBanner[];
    set({ itemBannerDocs: docs });
  },
}));
