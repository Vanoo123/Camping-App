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
      <link rel="icon" href="/favicon.ico" type="image/x-icon"/>
      <link rel="icon" href="/favicon.ico" sizes='48x48' type="image/x-icon"/>
      <link rel="icon" href="/favicon.ico" sizes='32x32' type="image/x-icon"/>
      <link rel="apple-touch-icon" sizes="57x57" href="/assets/apple-icon-57x57.png"/>
      <link rel="apple-touch-icon" sizes="60x60" href="/assets/apple-icon-60x60.png"/>
      <link rel="apple-touch-icon" sizes="72x72" href="/assets/apple-icon-72x72.png"/>
      <link rel="apple-touch-icon" sizes="76x76" href="/assets/apple-icon-76x76.png"/>
      <link rel="apple-touch-icon" sizes="114x114" href="/assets/apple-icon-114x114.png"/>
      <link rel="apple-touch-icon" sizes="120x120" href="/assets/apple-icon-120x120.png"/>
      <link rel="apple-touch-icon" sizes="144x144" href="/assets/apple-icon-144x144.png"/>
      <link rel="apple-touch-icon" sizes="152x152" href="/assets/apple-icon-152x152.png"/>
      <link rel="apple-touch-icon" sizes="180x180" href="/assets/apple-icon-180x180.png"/>
      <link rel="icon" type="image/png" sizes="192x192"  href="/assets/android-icon-192x192.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="96x96" href="/assets/favicon-96x96.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon-16x16.png"/>
      <meta name="msapplication-TileImage" content="/assets/ms-icon-144x144.png"/>
      <link rel="manifest" href="/assets/manifest.json" />
      <meta name="description" content={t('metaData.description')}/>
      <meta name='google-site-verification' content='PUy3W-uUr3Rz0eMwYpPe5-8THu0lWbvXWAmYl_5wjDc'/>
      <meta name="author" content="Marriage" />
      <meta name="publisher" content="I_T" />
      <meta property='og:url' content='https://marriageg.com/en'/>
      <meta property='og:type' content='website'/>
      <meta property='og:title' content={t('metaData.title')}/>
      <meta property='og:description' content={t('metaData.description')}/>
      <meta property='og:image' content='https://i.ibb.co/HP0SV4d/wedding.png'/>
      <meta name='theme-color' content='#fffff'/>      
      <meta property='color-scheme' content='white only'/>
      <meta property='twitter:url' content='https://marriageg.com/en'/>
      <meta name='twitter:site' content='MarriageG.com'/>
      <meta name='twitter:title' content={t('metaData.title')}/>
      <meta name="twitter:description"  content={t('metaData.description')}/>
      <meta name='twitter:card' content='summary_large_image'/>
      <meta name='twitter:image' content='https://i.ibb.co/HP0SV4d/wedding.png'/>
      <link rel="canonical" href="https://www.marriageg.com/en"/>
      <link rel="alternate" href="https://marriageg.com/en" hrefLang="en"/>
      <link rel="alternate" href="https://marriageg.com/ka" hrefLang="ka"/>
      <link rel="alternate" href="https://marriageg.com/ru" hrefLang="ru"/>
      <link rel="alternate" href="https://marriageg.com/de" hrefLang="de"/>
      <link rel="alternate" href="https://marriageg.com/ar" hrefLang="ar"/>
      <link rel="alternate" href="https://marriageg.com/zh" hrefLang="zh"/>
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
      {/* icons */}
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


