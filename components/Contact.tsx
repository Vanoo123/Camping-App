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
            <Link className='phone xl:text-3xl text-3xl font-bold underline-hover-phone socials' href="tel:+995-593-22-00-38">+995-593-22-00-38</Link>
            <Link className='phone xl:text-3xl text-2xl font-bold underline-hover-phone socials ' href="mailto:zdarova@gmail.com">Vanotvildiani7@gmail.om</Link>
            <div className='flex gap-10 font-bold'>
                <Link className='underline-hover-socials socials facebook smallsize ' href="https://www.facebook.com/your_facebook_page">
                    Facebook
                </Link>
                <Link className='underline-hover-socials socials instagram smallsize' href="https://www.instagram.com/your_instagram_page">
                    Instagram
                </Link>
                <Link className='underline-hover-socials socials whatsapp smallsize' href="https://wa.me/995593220038">
                    WhatsApp
                </Link>
                <Link className='underline-hover-socials socials telegram smallsize' href="https://te.me/">
                    Telegram
                </Link>
            </div>
            <div>
                <Image
                    rel="preload"
                    src="/assets/image9.webp"
                    alt="marriagePhoto"
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