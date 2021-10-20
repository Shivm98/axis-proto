import React, { useState } from "react";
import "./Footer.scss";
import mic from "../../assets/icons/mic.svg";

const Footer = () => {
  const [selectedLang, setSelectedLang] = useState("EN");

  return (
    <div className="footer">
      <div className="input-container">
        <input type="text" />
        <img src={mic} alt="mic" />
      </div>
      <div className="lang-selector">
        <button
          className={selectedLang === "EN" ? "btn selected" : "btn"}
          onClick={() => setSelectedLang("EN")}
        >
          EN
        </button>
        <button
          className={selectedLang === "हिं" ? "btn selected" : "btn"}
          onClick={() => setSelectedLang("हिं")}
        >
          हिं
        </button>
      </div>
    </div>
  );
};

export default Footer;
