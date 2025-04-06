import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./LanguageSelection.css";
import translationPng from "../../image/translation.png";
import { select } from "framer-motion/client";

const languages = [
  { code: "en", language: "English" },
  { code: "hi", language: "Hindi" },
  { code: "gu", language: "Gujarati" },
  { code: "fr", language: "French" },
  { code: "kn", language: "kannada" },
];

function LanguageSelection() {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);
  const userLang = navigator.language || navigator.userLanguage;
  console.log(userLang);

  useEffect(() => {
    i18n.changeLanguage(userLang);
  }, []);

  useEffect(() => {
    setSelectedLanguage(i18n.language);
  }, [i18n.language]);
  useEffect(() => {
    document.body.dir = i18n.dir();
  }, [i18n, i18n.language]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-selector">
      <img
        src={translationPng}
        alt="png"
        onFocus={select}
        className="language-img"
      />
      <select
        value={selectedLanguage}
        onChange={(e) => {
          changeLanguage(e.target.value);
        }}
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code} className="language-menu">
            {lang.language}
          </option>
        ))}
      </select>
    </div>
  );
}

export default LanguageSelection;
