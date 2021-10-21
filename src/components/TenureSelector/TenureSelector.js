import React from "react";
import "./TenureSelector.scss";

import Selector from "../Selector/Selector";
import { useState } from "react/cjs/react.development";

const TenureSelector = () => {
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
        <button className="tenure-selector-submit">Submit Tenure</button>
      </div>
    </div>
  );
};

export default TenureSelector;
