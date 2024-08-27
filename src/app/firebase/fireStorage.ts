import { ref, getDownloadURL } from "firebase/storage";
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

export const getBannerImage = async (): Promise<string> => {
  try {
    const fileRef = ref(storage, "banner/cardio.jpg");
    const url = await getDownloadURL(fileRef);

    return url;
  } catch (error) {
    console.error("Error fetching image URL: ", error);
    return "";
  }
};
