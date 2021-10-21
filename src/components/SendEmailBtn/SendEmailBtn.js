import React from "react";
import "./SendEmailBtn.scss";
import RightArrowWhite from "../../assets/icons/right-arrow-white.svg";

const SendEmailBtn = () => {
  return (
    <button className="send-email-btn">
      <div className="send-email-btn-text">Send Receipt on Email</div>
      <div className="send-email-btn-icon">
        <img src={RightArrowWhite} alt="right-arrow-white" />
      </div>
    </button>
  );
};

export default SendEmailBtn;
