"use client";
import React from 'react'
import {useLang} from "./LangProvider"

const Banner = () => {
  const { getLang } = useLang();
  return getLang.then((lang:any) => {
  return (
    <section className='banner'>
        <div className='flex items-center justify-center bg-fixed bg-parallax bg-conatin bg-center h-96'>
            <h1 className='text-5xl text-white uppercase'>{lang('banner')}</h1>
        </div>
    </section>
  )
  })
}

export default Banner