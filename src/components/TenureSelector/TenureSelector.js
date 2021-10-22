import React from "react";
import "./TenureSelector.scss";
import { useGlobalContext } from "../../context/context";

import Selector from "../Selector/Selector";

const TenureSelector = ({ textOnClick }) => {
  const { addNewMessage } = useGlobalContext();

  const addMessage = (e) => {
    addNewMessage({
      type: "message",
      content: "nomineeforfd",
      text: "1 Year 5 Months",
      sender: "user",
    });
  };
  return (
    <div className="tenure-selector">
      <div className="tenure-selector-top">
        <div className="tenure-selector-title">Select Tenure</div>
        <div className="tenure-selector-actions">
          <Selector title="Years" />
          <Selector title="Months" />
          <Selector title="Days" />
        </div>
      </div>
      <div className="tenure-selector-bottom">
        <button className="tenure-selector-submit" onClick={addMessage}>
          Submit Tenure
        </button>
      </div>
    </div>
  );
};

export default TenureSelector;
