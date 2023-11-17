"use client";
import React, { createContext, useState, useContext } from 'react';
import { useTranslation } from '../app/i18n'

const LangContext = createContext();

const LangProvider = ({ children, params: { lng } }) => {
  const [ getLang ] = useState(langs(lng));
  const [ curLang ] = useState(lng);


  return (
    <LangContext.Provider value={{ getLang,curLang}}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = () => {
  const context = useContext(LangContext);
  if (!context) {
    throw new Error('useLang must be used within a LangProvider');
  }

  return context;
};

export const langs = async (lang) => {
  return useTranslation(lang).then((res) => {
    return res.t;
  })
};

export default LangProvider;



