import React from "react";
import "./AccoutDetailsCard.scss";
import acIcon from "../../assets/icons/AC.svg";
import angledArrow from "../../assets/icons/angled-arrow.svg";

const AccoutDetailsCard = () => {
  return (
    <div className="acc-details">
      <div className="acc-details-icon">
        <img src={acIcon} alt="ac-icon" />
      </div>
      <div className="acc-details-title">Saving account</div>

      <div className="acc-details-data">₹ 23,49,422</div>

      <div className="acc-details-meta">
        <div className="left">
          <img src={angledArrow} alt="angledArrow" />
          <span>₹4500</span>
        </div>
        <div className="right">20 min ago</div>
      </div>
    </div>
  );
};

export default AccoutDetailsCard;
