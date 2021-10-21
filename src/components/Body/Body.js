import React, { useState, useContext } from "react";
import { useGlobalContext } from "../../context/context";
import conversations from "../../data/conversations";

import AccoutDetailsCard from "../AccoutDetailsCard/AccoutDetailsCard";
import BeneCard from "../BeneCard/BeneCard";
import Init from "../Init/Init";
import PaymentSuccess from "../PaymentSuccess/PaymentSuccess";
import PaymentSummary from "../PaymentSummary/PaymentSummary";
import RecentTrans from "../RecentTrans/RecentTrans";
import SendEmailBtn from "../SendEmailBtn/SendEmailBtn";
import TenureSelector from "../TenureSelector/TenureSelector";
import "./Body.scss";

const Body = () => {
  const [showInit, setShowInit] = useState(true);

  const { allMessages } = useGlobalContext();

  const hideInit = () => {
    setShowInit(false);
  };

  const listMessages = () => {
    return allMessages.map((msg, index) => {
      if (msg.type === "message") {
        return (
          <div className={`message ${msg.sender}`} key={index}>
            <div className="icon"></div>
            <div className="text">{msg.text}</div>
          </div>
        );
      } else if (msg.type === "card") {
        console.log(msg);
        return (
          <div className="message bot" key={index}>
            <div className="icon"></div>
            {msg.card}
          </div>
        );
      }
      //  else if (msg.type === "card&text") {
      //   console.log(msg);
      //   return (
      //     <div className="message bot card-and-text" key={index}>
      //       <div className="icon"></div>
      //       <div className="item">
      //         <div className="text">{msg.text}</div>
      //         {msg.card}
      //       </div>
      //     </div>
      //   );
      // }
    });
  };

  return (
    <div className="body">
      <div className="messages">
        {showInit ? (
          <Init click={hideInit} />
        ) : (
          <>
            {listMessages()}
            {/* 
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
            <div className="message bot">
              <div className="icon"></div>
              <TenureSelector />
            </div>
            <div className="message bot">
              <SendEmailBtn />
            </div> */}
          </>
        )}
      </div>
    </div>
  );
};

export default Body;
