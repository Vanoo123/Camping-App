'use clinet';

import type { Metadata } from 'next'
import '../globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import LangProvider from '@/components/LangProvider'; 
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Wedding',
  description: 'Wedding In Georgia',
  icons: {
    icon:['/favicon.ico'],
    apple:['/assets/apple-touch-icon.png'],
    shortcut:['/assets/apple-touch-icon.png']
  },
  other: {
    'theme-color': '#fffff',
    "color-scheme": "white only",
    "twitter:image": 'https://i.ibb.co/Ss3fTq6/Wedding-Georgia.jpg',
    "twitter:card": "summary_large_image",
    "og:url": "wedding.gerogia",
    "og:image": 'https://i.ibb.co/Ss3fTq6/Wedding-Georgia.jpg',
    "og:type": "website",
  }
}

export interface RootLayoutProps {
  children: ReactNode;
  params: {
    lng: string;
  };
}

export async function generateStaticParams() {
  return "/";
}

const RootLayout: React.FC<RootLayoutProps> = ({ children, params: { lng } }) => {
  return (
    <html lang={lng} className='scroll-smooth'>
      <body className='scrollbar-thin scrollbar-thumb-green-50 scrollbar-track-gray-10'>
        <LangProvider params={{lng}}>
            <Navbar />
            <main className='relative overflow-hidden'>
              {children}          
            </main>
            <Footer />
        </LangProvider>
        <script src="/assets/js/main.js" async defer></script>
      </body>
    </html>
  )
}

export default RootLayout;