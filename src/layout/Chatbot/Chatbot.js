import React from "react";
import { useState } from "react/cjs/react.development";
import Body from "../../components/Body/Body";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./Chatbot.scss";

const Chatbot = () => {
  const [mini, setMini] = useState(false);

  const miniMizeBot = () => {
    setMini((prev) => !mini);
  };

  return (
    <div className={`${mini ? "mini chatbot" : "chatbot"}`}>
      <div className="header-container">
        <Header miniMizeBot={miniMizeBot} />
      </div>
      <div className="body-container">
        <Body />
      </div>
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
};

export default Chatbot;
