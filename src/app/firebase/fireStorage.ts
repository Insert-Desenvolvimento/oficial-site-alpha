import { ref, getDownloadURL, listAll } from "firebase/storage";
import { storage } from "@/firebaseConfig";

export const getImageUrl = async (
  folder: string,
  id: string
): Promise<string> => {
  try {
    const fileRef = ref(storage, `${folder}/${id}.jpg`);
    const url = await getDownloadURL(fileRef);
    return url;
  } catch (error) {
    console.error("Error fetching image URL: ", error);
    return "";
  }
};

export const getBannerImages = async (): Promise<string[]> => {
  try {
    const folderRef = ref(storage, "banner");
    const result = await listAll(folderRef);

    const urls = await Promise.all(
      result.items.map(async (itemRef) => {
        const url = await getDownloadURL(itemRef);
        return url;
      })
    );

    return urls;
  } catch (error) {
    console.error("Error fetching images URLs: ", error);
    return [];
  }
};
