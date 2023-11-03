"use client";
import React from 'react'
import GetApp from './GetApp';
import Link from 'next/link';
import {useLang} from "./LangProvider"

function Contact() {
    const { lang } = useLang();
  return (
    <section className='max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row'>
        <div className='flex flex-col gap-20'>
            <p className='text-2xl italic font-semibold'>
                {lang['contactPage']}
            </p>
            <Link className='phone xl:text-5xl text-3xl font-bold underline-hover-phone socials' href="tel:+995-593-22-00-38">+995-593-22-00-38</Link>
            <Link className='phone xl:text-4xl text-2xl font-bold underline-hover-phone socials' href="mailto:zdarova@gmail.com">Vanotvildiani7@gmail.om</Link>
            <div className='flex gap-10 font-bold'>
                <Link className='underline-hover socials facebook' href="https://www.facebook.com/your_facebook_page">
                    Facebook
                </Link>
                <Link className='underline-hover socials instagram' href="https://www.instagram.com/your_instagram_page">
                    Instagram
                </Link>
                <Link className='underline-hover socials whatsapp' href="https://wa.me/995593220038">
                    WhatsApp
                </Link>
                <Link className='underline-hover socials telegram' href="https://te.me/">
                    Telegram
                </Link>
            </div>
        </div>
        <GetApp />
    </section>
  )
}

export default Contact