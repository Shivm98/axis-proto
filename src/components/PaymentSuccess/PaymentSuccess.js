import React from "react";
import "./PaymentSuccess.scss";
import PaySucess from "../../assets/confirm-graphic.svg";

const PaymentSuccess = () => {
  return (
    <div className="pay-sucess">
      <div className="pay-sucess-icon">
        <img src={PaySucess} alt="pay-success-icon" />
      </div>
      <div className="pay-sucess-text">Your Payment was successful!</div>
    </div>
  );
};

export default PaymentSuccess;
