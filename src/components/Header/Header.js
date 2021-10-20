import React from "react";
import "./Header.scss";
import minimize from "../../assets/icons/minimize.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="logo"></div>
      <div className="title">Axis AHA!</div>
      <div className="icon">
        <img src={minimize} alt="minimize" />
      </div>
    </div>
  );
};

export default Header;
