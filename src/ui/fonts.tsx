import { Montserrat, Italiana } from 'next/font/google';


export const montserrat = Montserrat({
  weight: ['300', '400'],
  style: ['normal', 'italic'],
  // preload: false,
  subsets: ['latin'],
});

export const italiana = Italiana({
  weight: ['400'],
  subsets: ['latin'],
});