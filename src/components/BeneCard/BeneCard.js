import React from "react";
import "./BeneCard.scss";

const BeneCard = () => {
  return (
    <div className="bene-card">
      <div className="bene-card-icon"></div>
      <div className="bene-card-data">
        <div className="bene-card-data-title">Person Name</div>
        <div className="bene-card-data-sub-title">bank name</div>
        <div className="bene-card-data-text">XXXX-0123</div>
      </div>
      <div className="bene-card-action">
        <button className="bene-card-action-btn">Action</button>
      </div>
    </div>
  );
};

export default BeneCard;
