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
}

export interface Space {
  id: string;
  name: string;
  description: string;
  imgUrl?: string;
}

export interface Plan {
  id: string;
  name: string;
  description: string[];
  discount: number;
  imgUrl?: string;
  price: number;
}

export interface PageText {
  id: string;
  title: string;
  subtitle: string;
  text: string;
}
