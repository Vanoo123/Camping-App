"use client";

import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {useLang} from "./LangProvider"
import ScrollToTop from "react-scroll-to-top";

const Footer = () => {
  
  const { lang } = useLang();

  return (
    <footer className="flexCenter mb-24">
      <ScrollToTop smooth top={1110} color='#000' width='40' height='30' viewBox='0 0 256 256' className='black_bg'/>
      <div className="padding-container max-container flex w-full flex-col gap-14">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <Link href="/" className="mb-10">
            <Image rel="preload" src="/logo.svg" alt="logo" width={100} height={29}/>
          </Link>

          <div className='flex flex-wrap gap-10 sm:justify-between md:flex-1'>
          <div>
            <FooterColumn title={lang['footerTitle']}>
                <ul className="regular-14 flex flex-col gap-4 text-gray-70">
                  {FOOTER_LINKS.links.map((link, index) => (
                    <li key={index} className='underline-hover hover-opacity socials'>
                      <Link href={link.href}>{lang[link.key]}</Link>
                    </li>
                  ))}
              </ul>
             </FooterColumn>
          </div>

            <div className="flex flex-col gap-5">
              <FooterColumn title={lang['footerTitle2']}>
                {FOOTER_CONTACT_INFO.links.map((link, index) => (
                  <div
                    key={index}
                    className="flex gap-4 md:flex-col lg:flex-row">
                    <p className="whitespace-nowrap">
                      {lang[link.key]}
                    </p>
                      <p className="medium-14 whitespace-nowrap text-blue-70">
                      {link.value}
                      </p>
                  </div>
                ))}
              </FooterColumn>
            </div>

            <div className="flex flex-col gap-5">
              <FooterColumn title={lang['footerTitle3']}>
                <ul className="regular-14 flex gap-4 text-gray-70">
                {SOCIALS.links.map(({ platform, url, icon }) => (
                  <li key={platform}>
                    <Link href={url} target='_blank' rel="noopener noreferrer" className='hover-opacity socials'>
                      <Image src={icon} alt={`${platform} Logo`} width={24} height={24} />
                    </Link>
                  </li>
                ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>

        <div className="border bg-gray-20" />
        <p className="regular-14 w-full text-center text-gray-70">{lang['footerText']}</p>
      </div>
    </footer>
  )
}

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
}

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="bold-18 whitespace-nowrap">{title}</h1>
      {children}
    </div>
  )
}

export default Footer