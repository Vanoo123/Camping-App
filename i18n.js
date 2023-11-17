import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  fallbackLng: "en",
  debug: process.env.NODE_ENV === "development", // Enable debug in development
  interpolation: {
    escapeValue: false, // Not needed for React as it escapes by default
  },
  // Add other i18n configurations as needed
});

export default i18n;
