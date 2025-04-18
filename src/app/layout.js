import './globals.css';
import { Montserrat } from 'next/font/google';
import { Rubik } from 'next/font/google';
import Header from '../components/Header';
import Head from 'next/head';
import Script from 'next/script';
import { GoogleTagManager,GoogleAnalytics  } from '@next/third-parties/google'
const rubik = Rubik({ subsets: ['latin'] });
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: 'swap',
});

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
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href={metadata.icons.icon} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:locale" content={metadata.openGraph.locale} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.images[0].url} />
      </Head>
      <GoogleTagManager gtmId="GTM-NCZK936H" />
      <body className={`${rubik.className} ${montserrat.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
