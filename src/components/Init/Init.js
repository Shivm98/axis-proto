import React, { useState } from "react";
import "./Init.scss";
import banner from "../../assets/banner.png";
import { useGlobalContext } from "../../context/context";

const Init = ({ click }) => {
  const [quickLinks, selQuickLinks] = useState([
    "My Account",
    "Transfer Money",
    "Cheque",
    "Recharge/Pay Bills",
    "Credit Card",
    "Debit Card",
    "Deposit",
    "ATM/Branch Locator",
    "Offers",
    "Order cheque book",
  ]);

  const { addNewMessage } = useGlobalContext();

  const addMessage = (e) => {
    click();
    addNewMessage({
      type: "message",
      content: "orderchequebook",
      text: "Order cheque book",
      sender: "user",
    });
  };
  return (
    <div className="init">
      <div className="avatar"></div>
      <div className="text-content">
        <div className="title">Welcome to AXIS AHA!</div>
        <div className="sub-title">Let me know what I can help you with?</div>
        <div className="text">
          Type your query below or select an option to continue
        </div>
      </div>
      <div className="banner">
        <img src={banner} alt="banner-img" />
      </div>

      <div className="quick-links">
        {quickLinks.map((link, index) => (
          <div className="link" onClick={addMessage} key={index}>
            {link}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Init;
