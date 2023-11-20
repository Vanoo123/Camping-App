"use client";
import { FEATURES } from '@/constants'
import Image from 'next/image'
import React from 'react'
import { useLang } from "./LangProvider";

const Features = () => {

  const { getLang } = useLang();
  return getLang.then((lang:any) => {
    return (
      <section className="flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24">
        <div className="max-container padding-container relative w-full flex justify-end">
          <div className="flex flex-1 lg:min-h-[900px]">
            <Image
              rel="preload"
              src="/assets/phone.webp"
              alt="A screenshot of the site in mobile device"
              width={0} 
              height={0} 
              style={{width: "440px", height: "auto"}}
              className="feature-phone"
            />
          </div>
  
          <div className="flex w-full flex-col lg:w-[60%]">
            <div className='relative'>
              <Image
                rel="preload"
                src="/assets/bouquet.svg"
                alt="A bouquet icon"
                width={50}
                height={50}
                className="absolute left-[-5px] top-[-28px] w-10 lg:w-[50px]"
              />
              <h1 className="bold-40 lg:bold-64">{lang('features')}</h1>
            </div>
            <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mg-20 lg:gap-20">
              {FEATURES.map((feature) => (
                <FeatureItem 
                  key={feature.key}
                  title={lang(feature.key +'.title')}
                  icon={feature.icon}
                  description={lang(feature.key + '.description')}
                />
              ))}
            </ul>
          </div>
        </div>
      </section>
    )
  })
}

type FeatureItem = {
  title: string;
  icon: string;
  description: string;
}

const FeatureItem = ({ title, icon, description }: FeatureItem) => {
  return (
    <li className="flex w-full flex-1 flex-col items-start">
      <div className="rounded-full p-4 lg:p-7 bg-green-50">
        <Image src={icon} alt="Icons" width={28} height={28} />
      </div>
      <h1 className="bold-20 lg:bold-32 mt-5 capitalize">
        {title}
      </h1>
      <p className="regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none">
        {description}
      </p>
    </li>
  )
}

export default Features