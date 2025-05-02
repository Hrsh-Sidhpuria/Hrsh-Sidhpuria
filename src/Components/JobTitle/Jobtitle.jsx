import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./jobTitle.css";

function Jobtitle() {
  const { t } = useTranslation();
  const titles = [
    { text: t("job-title1"), color: "red" },
    { text: t("job-title2"), color: "orange" },
    { text: t("job-title3"), color: "green" },
  ];

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = titles[currentTitleIndex];
    const fullText = current.text;

    let typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < fullText.length) {
        setDisplayText(fullText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setDisplayText(fullText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === fullText.length) {
        setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setCurrentTitleIndex((currentTitleIndex + 1) % titles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentTitleIndex, titles]);

  return (
    <div className="j-wrapper">
      <div className="j-text">{t("job-greet")}</div>
      <div className="dynamic-text">
        <span style={{ color: titles[currentTitleIndex].color }}>
          {displayText}
        </span>
        <span className="cursor">|</span>
      </div>
    </div>
  );
}

export default Jobtitle;
