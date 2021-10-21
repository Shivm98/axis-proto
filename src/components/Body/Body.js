import React, { useState, useContext } from "react";
import { useGlobalContext } from "../../context/context";
import AccountType from "../AccountType/AccountType";
import AccoutDetailsCard from "../AccoutDetailsCard/AccoutDetailsCard";
import BeneCard from "../BeneCard/BeneCard";
import Init from "../Init/Init";
import PaymentSuccess from "../PaymentSuccess/PaymentSuccess";
import PaymentSummary from "../PaymentSummary/PaymentSummary";
import RecentTrans from "../RecentTrans/RecentTrans";
import "./Body.scss";

const Body = () => {
  const [showInit, setShowInit] = useState(true);

  const { allMessages } = useGlobalContext();

  const hideInit = () => {
    setShowInit(false);
  };
  return (
    <div className="body">
      <div className="messages">
        {showInit ? (
          <Init click={hideInit} />
        ) : (
          <>
            {/* {allMessages.map((msg, index) => (
              <div className={`message ${msg.sender}`} key={index}>
                <div className="icon"></div>
                <div className="text">{msg.text}</div>
              </div>
            ))} */}

            <div className="message bot">
              <div className="icon"></div>

              <div className="card">
                <PaymentSuccess />
                <PaymentSummary />
              </div>
            </div>

            <div className="message bot">
              <div className="icon"></div>
              <AccountType />
            </div>

            <div className="message bot">
              <div className="icon"></div>
              <BeneCard />
            </div>

            <div className="message bot">
              <div className="icon"></div>
              <AccoutDetailsCard />
            </div>

            <div className="message bot">
              <div className="icon"></div>
              <RecentTrans />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Body;
