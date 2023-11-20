"use client";

import React from 'react'
import GetApp from './GetApp';
import Link from 'next/link';
import Image from 'next/image'
import {useLang} from "./LangProvider"

function Contact() {
    const { getLang } = useLang();
    return getLang.then((lang:any) => {
  return (
    <section className='max-container flex flex-col gap-20 py-5 md:gap-28 lg:py-5 xl:flex-row'>
        <div className="hero-map"/>
        <div className='relative z-20 flex flex-col gap-10 padding-container'>
            <p className='text-xl italic font-semibold w-11/12 '>
                {lang('contactPage')}
            </p>
            <Link className='phone xl:text-3xl text-3xl font-bold underline-hover-phone socials' href="tel:+995-557-77-91-17">+995-557-77-91-17</Link>
            <Link className='phone xl:text-3xl text-2xl font-bold underline-hover-phone socials ' href="mailto:marriageguide117@gmail.com">Marriageguide117@gmail.com</Link>
            <div className='flex gap-10 font-bold'>
                <Link className='underline-hover-socials socials facebook smallsize ' href="https://www.facebook.com/MarriageGuide117" target='_blank'>
                    Facebook
                </Link>
                <Link className='underline-hover-socials socials instagram smallsize' href="https://www.instagram.com/marriageguide117" target='_blank'>
                    Instagram
                </Link>
                <Link className='underline-hover-socials socials whatsapp smallsize' href="https://wa.me/995557779117" target='_blank'>
                    WhatsApp
                </Link>
                <Link className='underline-hover-socials socials telegram smallsize' href="https://t.me/marriageguide117" target='_blank'>
                    Telegram
                </Link>
            </div>
            <div>
                <Image
                    rel="preload"
                    src="/assets/image9.webp"
                    alt="A photo of couple hugging together"
                    width={440}
                    height={1000}
                    className="relative z-20 flex w-auto shadow"
                  />    
            </div>
        </div>
        <GetApp />
    </section>
  )
  })
}

export default Contact