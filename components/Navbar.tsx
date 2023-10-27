"use client";

import React, { useState } from 'react';
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { useLang, langs } from "./LangProvider";
import DropDown from './DropDown';

const Navbar = () => {
  const { lang, changeLang } = useLang();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
        <select
          id="langsSelect"
          onChange={(e) => {
            let lang: string = e.target.value;
            localStorage.setItem("lang", lang);
            changeLang(langs(lang));
          }}>
          <option value="en">English</option>
          <option value="ka">ქართული</option>
        </select>
      </div>
      <DropDown />
      <div className="lg:flexCenter hidden group">
        <Link href="tel:+995593220038">
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
        <Image
          rel="preload"
          src="menu.svg"
          alt="menu"
          width={32}
          height={32}
          className="inline-block cursor-pointer"
          onClick={toggleMenu}
        />
      </div>

      {isMenuOpen && (
        <div className='h-full gap-20 lg:hidden fixed top-0 w-full -left-0 backdrop-blur-[10px]'>
          <ul className="flex flex-col justify-center items-center">
            {NAV_LINKS.map((link) => ( 
              <li
                key={link.key}
                className="bold-20 text-my flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold p-8 hover-opacity underline-hover"
              >
                <Link href={link.href}>{lang[link.key]}</Link>
              </li>
            ))}
          </ul>
          <div className='flex flex-col justify-center items-center p-8'>
            <select
              id="langsSelect"
              onChange={(e) => {
                let lang: string = e.target.value;
                localStorage.setItem("lang", lang);
                changeLang(langs(lang));
              }}>
              <option value="en">English</option>
              <option value="ka">ქართული</option>
            </select>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
