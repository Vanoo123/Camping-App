"use client";

import React, { useEffect } from 'react';
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

import DropDown from './DropDown';
import { useLang } from './LangProvider';

const Navbar = () => {
  const { curLang, getLang } = useLang();

  let isMenuOpen = false;

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    const mobileMenu:any = document.querySelector("#mobileMenu");
    const menuIcon:any = document.querySelector("#menuIcon") as HTMLImageElement;
  
    if (mobileMenu && menuIcon) {
      updateMenuVisibility(mobileMenu, menuIcon);
      updateMenuIcon(menuIcon);
    }
  };
  
  const updateMenuVisibility = (menu: HTMLElement, icon: HTMLImageElement) => {
    const isMenuOpen = menu.style.display === "block";
    document.body.classList.toggle('overflow-hidden', !isMenuOpen);
    menu.style.display = isMenuOpen ? "none" : "block";
  };
  
  const updateMenuIcon = (icon: HTMLImageElement) => {
    const isMenuOpen = icon.alt === "menu close";
    icon.alt = isMenuOpen ? "menu" : "menu close";
    icon.src = isMenuOpen ? "/assets/menu.svg" : "/assets/close.svg";
  };
  

  const handleMenuLinkClick = () => {
    document?.body?.classList?.remove('overflow-hidden');
    toggleMenu();
  };

  return getLang.then((t:any) => (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href={"/" + curLang}>
        <Image rel="preload" src="/assets/logo.svg" alt="logo" width={0} height={0} style={{width: "100px", height: "auto"}} />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <li
            key={link.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all underline-hover socials"
          >
            <Link href={"/" + curLang + link.href}>{t(link.key)}</Link>
          </li>
        ))}
      </ul>
      <div className='hidden lg:flex'>
        <DropDown />
      </div>
      <div className="lg:flexCenter hidden group lg:flex">
        <Link href="https://wa.me/995557779117" target='_blank'>
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
        <Image
          id='menuIcon'
          rel="preload"
          src={"/assets/menu.svg"}
          alt={"menu"}
          width={32}
          height={32}
          className="inline-block cursor-pointer"
          onClick={toggleMenu}
        />
      </div>
      <div id='mobileMenu' className='h-full gap-20 lg:hidden fixed top-0 w-full -left-0 backdrop-blur-[10px]' style={{ display: 'none' }}>
        <ul className="flex flex-col justify-center items-center">
          {NAV_LINKS.map((link) => ( 
            <li
              key={link.key}
              className="bold-20 text-my flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold p-8 hover-opacity underline-hover"
              onClick={handleMenuLinkClick}
            >
              <Link href={"/" + curLang + link.href}>{t(link.key)}</Link>
            </li>
          ))}
        </ul>
        <div className='flex flex-col justify-center items-center'>
          <DropDown />
        </div>
        <div className="flex flex-col justify-center items-center">
          <Link href="https://wa.me/995557779117" target='_blank'>
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
    </nav>
  ));
};

export default Navbar;
