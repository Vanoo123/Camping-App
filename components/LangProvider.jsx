"use client";
import en from "../app/languages/en.json";
import ka from "../app/languages/ka.json";
import ru from "../app/languages/ru.json";
import de from "../app/languages/de.json"

import React, { createContext, useState, useContext, useEffect } from 'react';

const LangContext = createContext();

const LangProvider = ({ children }) => {
  const [lang, setLang] = useState(langs('en'));

  const changeLang = (newLang) => {
    setLang(newLang);
  };

  useEffect(() => {
    let tmpLang = localStorage.getItem("lang");
    tmpLang = tmpLang && tmpLang.length > 0 ? tmpLang : "en";
    document.querySelector("#langsSelect").value = tmpLang;
    setLang(langs(tmpLang));
  }, []);

  return (
    <LangContext.Provider value={{ lang, changeLang }}>
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

export const langs = (lang) => {
  const langSelect = {
    "ka": ka,
    "en": en,
    "ru": ru,
    "de": de
  }

  return langSelect[lang];
};

export default LangProvider;
