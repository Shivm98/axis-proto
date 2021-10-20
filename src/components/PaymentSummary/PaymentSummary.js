import React from "react";
import "./PaymentSummary.scss";

const PaymentSummary = () => {
  return (
    <div className="payment-summary">
      <div className="payment-summary-title">Payment Summary</div>
      <div className="payment-summary-content">
        <div className="transaction">
          <div className="head">
            <div className="title">Debit Card issuance charges</div>
            <div className="sub-title">Insculsive of 18% GST</div>
          </div>
          <div className="ammount">₹ 590</div>
        </div>
        <div className="transaction">
          <div className="head">
            <div className="title">FUnding Amount</div>
            <div className="sub-title">Will be added to your bank balance </div>
          </div>
          <div className="ammount">₹ 15000</div>
        </div>
        <div className="total">
          <div>Total</div>
          <div>₹ 15,386</div>
        </div>
      </div>

      <div className="desc">
        <div className="title">Payment modes accepted</div>
        <div className="sub-title">UPI I Debit Card I Net Banking</div>
      </div>
      <div className="warning">Credit cards not accepted</div>
    </div>
  );
};

export default PaymentSummary;
