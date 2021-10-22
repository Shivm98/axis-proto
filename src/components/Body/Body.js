import React, { useEffect, useRef } from "react";
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
  const messagesContainerRef = useRef(null);

  const { allMessages, hideInit, showInit } = useGlobalContext();

  useEffect(() => {
    if (messagesContainerRef) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight;
    }
  });

  const listMessages = () => {
    return allMessages.map((msg, index) => {
      console.log(msg);
      if (msg.type === "message") {
        return (
          <div className={`message ${msg.sender}`} key={index}>
            <div className="icon"></div>
            <div className="text">{msg.text}</div>
          </div>
        );
      } else if (msg.type === "card") {
        return (
          <div
            className={
              msg.text ? "message bot text-and-card" : "message bot card"
            }
            key={index}
          >
            {msg.text ? (
              <div className="text-content">
                <div className="icon"></div>
                <div className="text">{msg.text}</div>
              </div>
            ) : (
              <div className="icon"></div>
            )}
            <div className="card-container">{msg.card}</div>
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
      <div className="messages" ref={messagesContainerRef}>
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
