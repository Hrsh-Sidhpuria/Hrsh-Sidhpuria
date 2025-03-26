import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./LanguageSelection.css"; // Optional styling

const languages = [
  { code: "en", language: "English" },
  { code: "fr", language: "French" },
  { code: "ar", language: "Arabic" },
  { code: "gj", language: "Gujarati" },
];

function LanguageSelection() {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(
    localStorage.getItem("selectedLanguage") || "en"
  );

  useEffect(() => {
    if (localStorage.getItem("selectedLanguage")) {
      i18n.changeLanguage(localStorage.getItem("selectedLanguage"));
    }
  }, [i18n]);

  const changeLanguage = (lng) => {
    localStorage.setItem("selectedLanguage", lng);
    setSelectedLanguage(lng);
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-selector">
      <select
        value={selectedLanguage}
        onChange={(e) => changeLanguage(e.target.value)}
        className="language-dropdown"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.code}
          </option>
        ))}
      </select>
    </div>
  );
}

export default LanguageSelection;
