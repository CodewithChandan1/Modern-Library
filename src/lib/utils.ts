import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const OPEN_LIBRARY_API = 'https://openlibrary.org';

export async function fetchApi(endpoint: string) {
  const response = await fetch(`${OPEN_LIBRARY_API}${endpoint}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}