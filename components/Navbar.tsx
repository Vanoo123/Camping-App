"use client";

import React, { useState } from 'react';
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

import DropDown from './DropDown';
import { useLang } from './LangProvider';

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showCloseIcon, setShowCloseIcon] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setShowCloseIcon(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  };

  const handleMenuLinkClick = () => {
    setIsMenuOpen(false);
    setShowCloseIcon(false);
    document.body.classList.remove('overflow-hidden');
  };

  const changePage:any = (href:any) => {
    window.location.href = window.location.origin  + "/" + curLang + href;
  }

  const { curLang,getLang } = useLang();
  return getLang.then((t:any) => {

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image rel="preload" src="/assets/logo.svg" alt="logo" width={0} height={0} style={{width: "100px", height: "auto"}}/>
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <li
            key={link.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all underline-hover socials" >
            <a onClick={() => {changePage(link.href)}}>{t(link.key)}</a>
          </li>
        ))}
      </ul>
      <div className='hidden lg:flex'>
        <DropDown />
      </div>
      <div className="lg:flexCenter hidden group lg:flex">
        <Link href="https://wa.me/995593220038" target='_blank'>
          <Button 
            type="button"
            title={t('callNow')}
            icon="/assets/call-black.svg"
            variant="btn_white_dark"
            alt="call"
          />
        </Link>
      </div>

      <div className="lg:hidden z-30">
        {showCloseIcon ? (
          <Image
            rel="preload"
            src="/assets/close.svg"
            alt="close menu"
            width={32}
            height={32}
            className="inline-block cursor-pointer"
            onClick={toggleMenu}
          />
        ) : (
          <Image
            rel="preload"
            src="/assets/menu.svg"
            alt="menu"
            width={32}
            height={32}
            className="inline-block cursor-pointer"
            onClick={toggleMenu}
          />
        )}
      </div>

      {isMenuOpen && (
        <div className='h-full gap-20 lg:hidden fixed top-0 w-full -left-0 backdrop-blur-[10px]'>
          <ul className="flex flex-col justify-center items-center">
            {NAV_LINKS.map((link) => ( 
              <li
                key={link.key}
                className="bold-20 text-my flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold p-8 hover-opacity underline-hover"
                onClick={handleMenuLinkClick}
              >
                <a onClick={() => {changePage(link.href)}}>{t(link.key)}</a>
              </li>
            ))}
          </ul>
          <div className='flex flex-col justify-center items-center'>
            <DropDown />
          </div>
          <div className="flex flex-col justify-center items-center">
            <Link href="https://wa.me/995593220038" target='_blank'>
              <Button
                type="button"
                title={t('callNow')}
                icon="/assets/call-black.svg"
                variant="btn_white_dark"
                alt="call"
              />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
})
};

export default Navbar;
