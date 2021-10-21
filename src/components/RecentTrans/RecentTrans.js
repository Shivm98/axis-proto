import React from "react";
import "./RecentTrans.scss";
import flipkartIcon from "../../assets/icons/flipkart.png";
import rightArrow from "../../assets/icons/right-arrow.svg";

const RecentTrans = () => {
  return (
    <div className="recent-trans-container">
      <div className="recent-trans">
        <div className="recent-trans-icon">
          <img src={flipkartIcon} alt="rt-icon" />
        </div>
        <div className="recent-trans-data">
          <div className="title">Flipkart Pvt. Ltd.</div>
          <div className="sub-title">14 Aug 2019, Wed</div>
        </div>

        <div className="recent-trans-ammount">₹ 20,000</div>
        <div className="recent-trans-icon-right">
          <img src={rightArrow} alt="right-arrow" />
        </div>
      </div>

      <div className="recent-trans">
        <div className="recent-trans-icon">
          <img src={flipkartIcon} alt="rt-icon" />
        </div>
        <div className="recent-trans-data">
          <div className="title">Flipkart Pvt. Ltd.</div>
          <div className="sub-title">14 Aug 2019, Wed</div>
        </div>

        <div className="recent-trans-ammount">₹ 20,000</div>
        <div className="recent-trans-icon-right">
          <img src={rightArrow} alt="right-arrow" />
        </div>
      </div>

      <div className="recent-trans">
        <div className="recent-trans-icon">
          <img src={flipkartIcon} alt="rt-icon" />
        </div>
        <div className="recent-trans-data">
          <div className="title">Flipkart Pvt. Ltd.</div>
          <div className="sub-title">14 Aug 2019, Wed</div>
        </div>

        <div className="recent-trans-ammount">₹ 20,000</div>
        <div className="recent-trans-icon-right">
          <img src={rightArrow} alt="right-arrow" />
        </div>
      </div>
    </div>
  );
};

export default RecentTrans;
