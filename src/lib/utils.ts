import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Image } from "./unsplash";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function capitalize(stringToCapitalize: string) {
  if (stringToCapitalize.length === 0) return "";
  return stringToCapitalize[0].toUpperCase() + stringToCapitalize.slice(1);
}

type PaginatedImages = {
  paginatedImages: { images: Image[]; nextPage: number }[];
};

export type ColImages = {
  col1: Image[] | null;
  col2: Image[] | null;
  col3: Image[] | null;
};

// export function sortPaginatedImages({ paginatedImages }: PaginatedImages): ColImages {
//   let col1: Image[], col2: Image[], col3: Image[];
//   paginatedImages.forEach((paginatedImage)=> {
//     const { images } = paginatedImage;
//     col1.push()
//   })
//   return;
// };
