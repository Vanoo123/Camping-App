"use client";
import React from 'react'
import ContactForm from '@/components/ContactForm'
import {useLang} from "./LangProvider"

const GetApp = () => {
  const { lang } = useLang();
  return (
    <section className="flex-center w-full flex-col pb-[100px]">
      <div className="get-app" id='contact'>
        <div className='p-4 max-w-2xl mx-auto'>
          <h1 className='text-3xl font-bold'>{lang['formTitle']}</h1>
          <p>{lang['formDescription']}</p>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}

export default GetApp