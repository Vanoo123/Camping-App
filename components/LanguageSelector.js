import React from "react";
import { setLanguage } from "./languageService";

function LanguageSelector() {
  const handleChangeLanguage = (e) => {
    setLanguage(e.target.value);
  };

  if (typeof window !== "undefined") {
    return (
      <select onChange={handleChangeLanguage}>
        <option value="ka">ქართული</option>
        <option value="en">English</option>
      </select>
    );
  }

  return null;
}

export default LanguageSelector;
