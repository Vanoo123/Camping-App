'use clinet';

import '../globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import LangProvider from '@/components/LangProvider'; 
import { ReactNode } from 'react';
import { useTranslation } from '../i18n';

export interface RootLayoutProps {
  children: ReactNode;
  params: {
    lng: string;
  };
}

export async function generateStaticParams() {
  return "/";
}

const RootLayout: React.FC<RootLayoutProps> = async ({ children, params: { lng } }) => {
  return useTranslation(lng).then((res) => {
    const t = res.t;
  return (
    <html lang={lng} className='scroll-smooth'>
      <head>
      <title>{t('metaData.title')}</title>
        <meta name="description" content={t('metaData.description')}/>
      </head>
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
  })
}

export default RootLayout;


