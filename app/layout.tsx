'use clinet';

import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import LangProvider from '@/components/LangProvider'; 

export const metadata: Metadata = {
  title: 'Wedding',
  description: 'Wedding In Georgia',
  icons: {
    icon:['/favicon.ico'],
    apple:['/apple-touch-icon.png'],
    shortcut:['/apple-touch-icon.png']
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body className='scrollbar-thin scrollbar-thumb-green-50 scrollbar-track-gray-10'>
        <LangProvider>

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
