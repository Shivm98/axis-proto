import React, { useState } from "react";
import "./Footer.scss";
import mic from "../../assets/icons/mic.svg";
import { useGlobalContext } from "../../context/context";

const Footer = () => {
  const [selectedLang, setSelectedLang] = useState("EN");
  const [currentMessage, setCurrentMessage] = useState("");

  const { addNewMessage } = useGlobalContext();

  const addMessage = (e) => {
    if (e.key == "Enter") {
      addNewMessage({
        text: e.target.value,
        sender: "user",
      });

      console.log(("eee", e.target.value));
    }
  };

  return (
    <div className="footer">
      <div className="input-container">
        <input
          type="text"
          onChange={setCurrentMessage}
          onKeyPress={(e) => {
            addMessage(e);
          }}
          value={currentMessage.text}
        />
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