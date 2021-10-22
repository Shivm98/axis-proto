import React from "react";
import "./BeneCard.scss";
import { useGlobalContext } from "../../context/context";

const BeneCard = () => {
  const { addNewMessage } = useGlobalContext();

  const addMessage = () => {
    console.log("888888888888-> adding");
    addNewMessage({
      type: "message",
      content: "paymentsucess",
      text: "continue",
      sender: "user",
    });
  };

  return (
    <div className="bene-cards">
      <div className="bene-card" onClick={addMessage}>
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
      <div className="bene-card" onClick={addMessage}>
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
    </div>
  );
};

export default BeneCard;
