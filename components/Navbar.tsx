"use client";

import React, { useState } from 'react';
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { useLang, } from "./LangProvider";
import DropDown from './DropDown';


const Navbar = () => {
  const { lang, } = useLang();
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

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image rel="preload" src="/logo.svg" alt="logo" width={74} height={29} />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <li
            key={link.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold underline-hover"
          >
            <Link href={link.href}>{lang[link.key]}</Link>
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
            title={lang['callNow']}
            icon="/call-black.svg"
            variant="btn_white_dark"
            alt="call"
          />
        </Link>
      </div>

      <div className="lg:hidden z-30">
        {showCloseIcon ? (
          <Image
            src="close.svg"
            alt="close menu"
            width={32}
            height={32}
            className="inline-block cursor-pointer"
            onClick={toggleMenu}
          />
        ) : (
          <Image
            src="menu.svg"
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
                <Link href={link.href}>{lang[link.key]}</Link>
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
                title={lang['callNow']}
                icon="/call-black.svg"
                variant="btn_white_dark"
                alt="call"
              />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
