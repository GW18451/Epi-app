import React from "react";
import "./StatusBarIPhone14.css";

function StatusBarIPhone14(props) {
  const { className } = props;

  return (
    <div className={`status-bar-i-phone-14 ${className || ""}`}>
      <div className="text-1 sfprotext-semi-bold-white-17px">
        <span className="spanzepa9 sfprotext-semi-bold-white-17px">9:41</span>
      </div>
      <div className="right-side">
        <img className="icon-mobile-signal" src="/img/icon---mobile-signal-1@2x.png" alt="Icon / Mobile Signal" />
        <img className="icon-signal" src="/img/wifi-2@2x.png" alt="icon-signal" />
        <img className="battery" src="/img/battery-1@2x.png" alt="Battery" />
      </div>
    </div>
  );
}

export default StatusBarIPhone14;
