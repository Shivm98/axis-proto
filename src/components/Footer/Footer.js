import React, { useState } from "react";
import "./Footer.scss";
import mic from "../../assets/icons/mic.svg";
import { useGlobalContext } from "../../context/context";

const Footer = () => {
  const [selectedLang, setSelectedLang] = useState("EN");
  const [currentMessage, setCurrentMessage] = useState("");

  const { addNewMessage, hideInit } = useGlobalContext();

  const addMessage = (e) => {
    if (e.key == "Enter") {
      setCurrentMessage("");
      hideInit();

      if (e.target.value === "Order Cheque Book") {
        addNewMessage({
          type: "message",
          content: "orderchequebook",
          text: e.target.value,
          sender: "user",
        });
      } else if (e.target.value === "Show Transactions") {
        addNewMessage({
          type: "message",
          content: "showtransactions",
          text: e.target.value,
          sender: "user",
        });
      } else if (e.target.value === "Fund Transfer") {
        addNewMessage({
          type: "message",
          content: "fundtransfer",
          text: e.target.value,

          sender: "user",
        });
      } else if (e.target.value === "50000") {
        addNewMessage({
          type: "message",
          content: "acctype",
          text: e.target.value,
          sender: "user",
        });
      } else if (e.target.value === "12345678") {
        addNewMessage({
          type: "message",
          content: "paymentsucess",
          text: e.target.value,
          sender: "user",
        });
      } else if (e.target.value === "Book FD") {
        addNewMessage({
          type: "message",
          content: "selectfdplan",
          text: e.target.value,
          sender: "user",
        });
      } else if (e.target.value === "10000") {
        addNewMessage({
          type: "message",
          content: "interesttime",
          text: e.target.value,
          sender: "user",
        });
      } else if (e.target.value === "No") {
        addNewMessage({
          type: "message",
          content: "fddetails",
          text: e.target.value,
          sender: "user",
        });
      } else if (e.target.value === "Proceed") {
        addNewMessage({
          type: "message",
          content: "enterpannumber",
          text: e.target.value,
          sender: "user",
        });
      } else if (e.target.value === "1122334455") {
        addNewMessage({
          type: "message",
          content: "paymentsucessemail",
          text: e.target.value,
          sender: "user",
        });
      }

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
          className={selectedLang === "?????????" ? "btn selected" : "btn"}
          onClick={() => setSelectedLang("?????????")}
        >
          ?????????
        </button>
      </div>
    </div>
  );
};

export default Footer;
