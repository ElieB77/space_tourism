export interface MenuItem {
  index: string;
  link: string;
  to: string;
  id: number;
}

export interface ButtonSliderLayoutType {
  id: number;
  header: string;
  name: string;
  description: string;
  images: {
    portrait: string;
    width: number;
    height: number;
  };
}

export interface DotSliderLayoutType {
  id: number;
  role: string;
  name: string;
  bio: string;
  images: {
    webp: string;
    width: number;
    height: number;
  };
}

export interface TabSliderLayoutType {
  id: number;
  name: string;
  description: string;
  distance: string;
  travel: string;
  images: {
    webp: string;
  };
  avgDistance: string;
  estTravel: string;
}
