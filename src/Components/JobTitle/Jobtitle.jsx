import { color } from "framer-motion";
import "./jobTitle.css";

import React from "react";
import { useTranslation } from "react-i18next";

function Jobtitle() {
  const { t } = useTranslation();
  return (
    <div className="j-wrapper">
      <div className="j-text">{t("job-greet")}</div>
      <div className="dynamic-text">
        <ul className="j-typing-text">
          <li>
            <span style={{ color: "red" }}>{t("job-title1")}</span>
          </li>
          <li>
            <span style={{ color: "orange" }}>{t("job-title2")}</span>
          </li>
          <li>
            <span style={{ color: "blue" }}>{t("job-title3")}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Jobtitle;
