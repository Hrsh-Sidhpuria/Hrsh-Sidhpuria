// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

const availableLanguages = ["en", "fr", "gu", "hi", "kn"];

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: false,
    supportedLngs: availableLanguages,
    nonExplicitSupportedLngs: true,
    returnObjects: true,
    // detection: {
    //   // order: ["localStorage", "navigator"],
    //   // // lookupLocalStorage: "selectedLanguage",
    // },
    backend: {
      loadPath: "/locales/{{lng}}/translation.json",
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
