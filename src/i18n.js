import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";

// Define available languages
const availableLanguages = ["en", "fr", "ar", "gj"];

// Get the browser language (e.g., "en", "fr", "hi", etc.)
const browserLanguage = navigator.language.split("-")[0];

// Check if the browser language is supported
const detectedLanguage = availableLanguages.includes(browserLanguage)
  ? browserLanguage
  : null;

// Get saved language from localStorage
const savedLanguage = localStorage.getItem("selectedLanguage");

// Final language selection priority: Browser → LocalStorage → Default to English
const initialLanguage = detectedLanguage || savedLanguage || "en";

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: initialLanguage, // Set language based on priority
    fallbackLng: "en",
    debug: true,
    backend: {
      loadPath: "/locales/{{lng}}/translation.json",
    },
    interpolation: {
      escapeValue: false,
    },
  });

// Save language whenever it changes
i18n.on("languageChanged", (lng) => {
  localStorage.setItem("selectedLanguage", lng);
});

export default i18n;
