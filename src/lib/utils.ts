import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function capitalize(stringToCapitalize: string) {
  if (stringToCapitalize.length === 0) return "";
  return stringToCapitalize[0].toUpperCase() + stringToCapitalize.slice(1);
}
