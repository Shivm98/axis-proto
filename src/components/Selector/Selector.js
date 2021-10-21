import React from "react";
import "./Selector.scss";
import plus from "../../assets/icons/plus.svg";
import minus from "../../assets/icons/minus.svg";
import { useState } from "react/cjs/react.development";

const Selector = ({ title }) => {
  const [number, setNumber] = useState(0);

  const incNumber = () => {
    setNumber((prev) => prev + 1);
  };
  const decNumber = () => {
    setNumber((prev) => prev - 1);
  };

  return (
    <div className="selector-btns">
      <div className="selector-btns-title">{title}</div>
      <div className="selector">
        <button className="selector-inc" onClick={decNumber}>
          <img src={minus} alt="minus-icon" />
        </button>
        <div className="selector-value">{number}</div>
        <button className="selector-dec" onClick={incNumber}>
          <img src={plus} alt="plus-icon" />
        </button>
      </div>
    </div>
  );
};

export default Selector;
