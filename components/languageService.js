import en from "../app/languages/en.json";
import ka from "../app/languages/ka.json";

let currentLanguage = "en";

const translations = {
  en,
  ka,
};

export function setLanguage(lang) {
  currentLanguage = lang;
}

export function getTranslation(key) {
  return translations[currentLanguage][key];
}

export default {
  setLanguage,
  getTranslation,
};
