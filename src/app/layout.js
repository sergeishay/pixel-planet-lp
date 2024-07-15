import './globals.css';
import { Inter } from 'next/font/google';
import { Rubik } from 'next/font/google';
import Header from '../components/Header';

const inter = Inter({ subsets: ['latin'] });
const rubik = Rubik({ subsets: ['latin'] });

export const metadata = {
  title: 'Pixel Planet',
  description: 'הפכו את העסק שלכם למותג מוביל עם עיצוב ופיתוח אתרים ב-Planet Pixel. פתרון כולל לכל פרויקט.',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Pixel Planet',
    description: 'הפכו את העסק שלכם למותג מוביל עם עיצוב ופיתוח אתרים ב-Planet Pixel. פתרון כולל לכל פרויקט.',
    url: 'https://lp.pixel-planet.co.il/',
    siteName: 'Pixel Planet',
    images: [
      {
        url: 'https://lp.pixel-planet.co.il/main-image.jpg', 
        width: 1200,
        height: 630,
        alt: 'Pixel Planet',
      },
    ],
    locale: 'he_IL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pixel Planet',
    description: 'הפכו את העסק שלכם למותג מוביל עם עיצוב ופיתוח אתרים ב-Planet Pixel. פתרון כולל לכל פרויקט.',
    images: [
      {
        url: 'https://lp.pixel-planet.co.il/main-image.jpg', 
        width: 1200,
        height: 630,
        alt: 'Pixel Planet',
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
