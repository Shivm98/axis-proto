import React from "react";
import "./AccoutDetailsCard.scss";
import acIcon from "../../assets/icons/AC.svg";
import angledArrow from "../../assets/icons/angled-arrow.svg";
import { useGlobalContext } from "../../context/context";

const AccoutDetailsCard = ({ content, textOnClick }) => {
  const { addNewMessage } = useGlobalContext();

  const addMessage = () => {
    addNewMessage({
      type: "message",
      content: content,
      text: textOnClick,
      sender: "user",
    });
  };

  return (
    <div className="acc-details-container">
      <div className="acc-details" onClick={addMessage}>
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
      <div className="acc-details" onClick={addMessage}>
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
    </div>
  );
};

export default AccoutDetailsCard;
