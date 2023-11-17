"use client";
import React from 'react'
import Image from 'next/image'
import {useLang} from "./LangProvider"
import Accordion from './Accordion';

const Services = () => {
  const { getLang } = useLang();
  return getLang.then((lang:any) => {

  return (
    <section className='max-container padding-container  padding-bottom lg:py-5 xl:pb-12 md:pb-12'>
      <div className='max-container padding-bottom flex flex-col-reverse gap-10 py-5 md:gap-28 lg:py-5 xl:flex-row xl:pb-12 md:pb-12'>      
        <div className="hero-map"/>
          <div className='relative z-20 flex flex-1 flex-col xl:w-1/2 card shadow'>
              <div className='flex flex-col gap-4 relative z-20 flex-1  '>
                <h1 className='text-3xl italic font-semibold'>{lang("serviceTitle")}</h1>
                <p className=' w-12/12 py-5'>
                  {lang("serviceDescription")}
                </p>
              </div>
              <div className='flex flex-col gap-5 relative z-20 flex-1'>
                <h1 className='font-bold underline text-xl'>{lang("servicePrice")}</h1>
                <ul className='flex flex-col gap-5 font-semibold '>
                  <li>{lang("serviceItem1")}</li>
                  <li>{lang("serviceItem2")}</li>
                  <li>{lang("serviceItem3")}</li>
                  <li>{lang("serviceItem4")}</li>
                  <li>{lang("serviceItem5")}</li>
                  <li>{lang("serviceItem6")}</li>
                </ul>
                <p>{lang("serviceLast")}</p>
              </div>
          </div>
          <div className='relative flex-col flex flex-1 items-start z-20'>
          <Image
              rel="preload"
              src="/assets/image1.webp"
              alt="marriagephoto"
              width={440}
              height={1000}
              className="relative z-20 flex w-auto shadow"
            />
          </div>
        </div>
        <Accordion />
    </section>
  )
  })
}

export default Services