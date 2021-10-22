import React from "react";
import "./AccountType.scss";
import { useGlobalContext } from "../../context/context";

const AccountType = ({ title, options, textOnClick, content }) => {
  const { addNewMessage } = useGlobalContext();

  const addMessage = (e) => {
    addNewMessage({
      type: "message",
      content: content,
      // text: "Savings Account",
      text: textOnClick,
      sender: "user",
    });
  };

  return (
    <div className="acc-type">
      <div className="title">Please select A/C type</div>
      {options?.map((option, index) => (
        <div className="type" onClick={addMessage} key={index}>
          {option}
        </div>
      ))}
    </div>
  );
};

export default AccountType;
