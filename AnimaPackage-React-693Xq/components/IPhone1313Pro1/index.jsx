import React from "react";
import "./IPhone1313Pro1.css";

function IPhone1313Pro1(props) {
  const {
    spanText1,
    iconMobileSignal,
    iconSignal,
    battery,
    spanText2,
    spanText3,
    icons,
    ticketButton,
    ticket,
    image24,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="iphone-13-13-pro-1 screen">
        <div className="mask-group">
          <div className="profile-2">
            <div className="status-bar-i-phone-13">
              <div className="text-6 sfprotext-semi-bold-white-17px">
                <span className="sfprotext-semi-bold-white-17px">{spanText1}</span>
              </div>
              <div className="right-side-2">
                <img className="icon-mobile-signal-4" src={iconMobileSignal} alt="Icon / Mobile Signal" />
                <img className="icon-signal-4" src={iconSignal} alt="icon-signal" />
                <img className="battery-4" src={battery} alt="Battery" />
              </div>
            </div>
            <h1 className="title-1 poppins-normal-white-26px">
              <span className="poppins-normal-white-26px">{spanText2}</span>
            </h1>
            <p className="this-app-is-a-tool-f inter-normal-white-26px">
              <span className="inter-normal-white-26px">{spanText3}</span>
            </p>
            <div className="overlap-group2-5">
              <div className="dots">
                <div className="ellipse-14"></div>
                <div className="ellipse-1"></div>
                <div className="ellipse-1"></div>
              </div>
              <div className="overlap-group1-5">
                <div className="ellipse-container-3">
                  <div className="ellipse-10-5"></div>
                  <div className="ellipse-11-10"></div>
                  <div className="ellipse-11-11"></div>
                </div>
                <div className="base-1"></div>
                <img className="icons-1" src={icons} alt="Icons" />
                <div className="home-indicator-1"></div>
                <div className="ticket-button-1" style={{ backgroundImage: `url(${ticketButton})` }}>
                  <img className="ticket-1" src={ticket} alt="Ticket" />
                </div>
              </div>
              <img className="image-24" src={image24} alt="image 24" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IPhone1313Pro1;
