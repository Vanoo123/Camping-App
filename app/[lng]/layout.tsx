'use clinet';

import '../globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import LangProvider from '@/components/LangProvider'; 
import { ReactNode } from 'react';
import Metadatacomp from '@/components/Metadatacomp';


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

  return (
    <html lang={lng} className='scroll-smooth'>
     <Metadatacomp params={{ lng }} children={undefined}/>
      <body className='scrollbar-thin scrollbar-thumb-green-50 scrollbar-track-gray-10'>
        <LangProvider params={{lng}}>
            <Navbar />
            <main className='relative overflow-hidden'>
              {children}          
            </main>
            <Footer />
        </LangProvider>
        <script async src={`https://www.googletagmanager.com/gtag/js?id=G-DSYRE1686Q`}/>
        <script dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-DSYRE1686Q', {
            page_path: window.location.pathname,
          });
          `,
        }}/>
      </body>
    </html>
    )
}

export default RootLayout;


