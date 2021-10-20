import React from "react";
import "./Body.scss";

const Body = () => {
  return (
    <div className="body">
      <div className="messages">
        <div className="message user">
          <div className="icon"></div>
          <div className="text">hello</div>
        </div>
        <div className="message bot">
          <div className="icon"></div>
          <div className="text">hi</div>
        </div>
        <div className="message user">
          <div className="icon"></div>
          <div className="text">how are you ?</div>
        </div>
        <div className="message bot">
          <div className="icon"></div>
          <div className="text">hi</div>
        </div>
      </div>
    </div>
  );
};

export default Body;
