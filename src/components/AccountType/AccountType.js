import React from "react";
import "./AccountType.scss";

const AccountType = () => {
  return (
    <div className="acc-type">
      <div className="title">Please select A/C type</div>
      <div className="type">Current A/C</div>
      <div className="type">Saving A/C</div>
    </div>
  );
};

export default AccountType;
