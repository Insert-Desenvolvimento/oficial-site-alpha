import { storage } from "@/firebaseConfig";
import { ref, listAll, getDownloadURL } from "firebase/storage";

export const lisFilesInFolder = async (
  folderName: string
): Promise<string[]> => {
  const folderRef = ref(storage, `${folderName}`);
  const urls: string[] = [];

  try {
    const res = await listAll(folderRef);
    for (const itemRef of res.items) {
      const url = await getDownloadURL(itemRef);
      urls.push(url);
    }
  } catch (e) {
    console.error(`Error not found ${folderName} for list itens: `, e);
  }

  return urls;
};

export const listModalityImages = async (): Promise<string[]> => {
  return lisFilesInFolder("modalities");
};

export const listPartnersImages = async (): Promise<string[]> => {
  return lisFilesInFolder("partners");
};

export const listPersonalImages = async (): Promise<string[]> => {
  return lisFilesInFolder("personal");
};

export const listSpaceImages = async (): Promise<string[]> => {
  return lisFilesInFolder("space");
};
