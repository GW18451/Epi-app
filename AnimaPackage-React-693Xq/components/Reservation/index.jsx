import React from "react";
import "./Reservation.css";

function Reservation(props) {
  const { button1, spanText2, spanText3, spanText4, spanText5, icons, ticketButton, ticket } = props;

  return (
    <div className="container-center-horizontal">
      <div className="reservation screen">
        <h1 className="title poppins-bold-white-40px">
          <span className="poppins-bold-white-40px">{button1}</span>
        </h1>
        <div className="overlap-group4">
          <div className="login-information valign-text-middle poppins-bold-black-18px">
            <span>
              <span className="poppins-bold-black-18px">{spanText2}</span>
            </span>
          </div>
        </div>
        <div className="overlap-group3">
          <div className="sign-in valign-text-middle poppins-bold-black-18px">
            <span>
              <span className="poppins-bold-black-18px">{spanText3}</span>
            </span>
          </div>
        </div>
        <div className="overlap-group2">
          <div className="guest poppins-bold-black-20px">
            <span className="poppins-bold-black-20px">{spanText4}</span>
          </div>
        </div>
        <p className="to-pair-with-phone-login-here inter-normal-picton-blue-15px">
          <span className="inter-normal-picton-blue-15px">{spanText5}</span>
        </p>
        <div className="tab-bar">
          <div className="overlap-group1">
            <div className="ellipse-container">
              <div className="ellipse-10"></div>
              <div className="ellipse-11"></div>
              <div className="ellipse-11-1"></div>
            </div>
            <div className="base"></div>
            <img className="icons" src={icons} alt="Icons" />
            <div className="home-indicator"></div>
            <div className="ticket-button" style={{ backgroundImage: `url(${ticketButton})` }}>
              <img className="ticket" src={ticket} alt="Ticket" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reservation;
