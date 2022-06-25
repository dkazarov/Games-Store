export interface IProduct {
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;
  genres: string[];
  count: number;
  video: string;
}

export interface ICart {
  id: number;
  image: string;
  title: string;
  price: number;
  count: number;
}

export interface ISelectedItem {
  video: string;
  description: string;
  genres: string[];
  image: string;
  title: string;
}
