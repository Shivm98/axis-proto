import React from "react";
import Body from "../../components/Body/Body";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./Chatbot.scss";

const Chatbot = () => {
  return (
    <div className="chatbot">
      <div className="header-container">
        <Header />
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
