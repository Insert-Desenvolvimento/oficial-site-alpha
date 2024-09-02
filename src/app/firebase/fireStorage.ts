import { ref, getDownloadURL, listAll } from "firebase/storage";
import { storage } from "@/firebaseConfig";

export const getImageUrl = async (
  folder: string,
  id: string
): Promise<string> => {
  try {
    // Tenta buscar a imagem .jpg primeiro
    const fileRefJpg = ref(storage, `${folder}/${id}.jpg`);
    const urlJpg = await getDownloadURL(fileRefJpg);
    return urlJpg;
  } catch (errorJpg) {
    console.warn("JPG image not found, trying PNG: ", errorJpg);
    try {
      // Se não encontrar .jpg, tenta buscar a imagem .png
      const fileRefPng = ref(storage, `${folder}/${id}.png`);
      const urlPng = await getDownloadURL(fileRefPng);
      return urlPng;
    } catch (errorPng) {
      console.error("Error fetching image URL for both formats: ", errorPng);
      return "";
    }
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
