export interface Modality {
  id: string;
  name: string;
  description: string;
  imgUrl?: string;
}

export interface Partner {
  id: string;
  name: string;
  description: string;
  imgUrl?: string;
}

export interface Personal {
  id: string;
  name: string;
  age: number;
  description: string;
  hobby: string;
  contactNumber: string;
  imageUrl?: string;
  photoUrl: string;
  qualify: string;
}

export interface Space {
  id: string;
  name: string;
  description: string;
  imageUrl?: string;
}

export interface Plan {
  id: string;
  name: string;
  description: string[];
  discount: number;
  imageUrl?: string;
  price: number;
}

export interface AnualPlan{
  id: string;
  name: string;
  description: string[];
  amount: number,
  parcel: number,
  economy: number,
}

export interface PageText {
  id: string;
  title: string;
  subtitle: string;
  text: string;
}

export interface FormData {
  name: string;
  modalitie: string;
  birthdate: string;
  cpf: string;
  medicalHistory: string;
  goal: string;
  observations: string;
  email: string;
  healthIssueDescription: string;
}

export interface ItemBanner {
  photoUrl?: string;
  title?: string;
  text?: string;
  [key: string]: unknown;
}
