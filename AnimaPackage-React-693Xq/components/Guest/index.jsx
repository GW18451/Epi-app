import React from "react";
import StatusBarIPhone14 from "../StatusBarIPhone14";
import ArrowLeftButton from "../ArrowLeftButton";
import "./Guest.css";

function Guest(props) {
  const {
    spanText1,
    image25,
    spanText2,
    spanText3,
    ellipse9,
    spanText4,
    arrowLeftButton1Props,
    arrowLeftButton2Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="guest-1 screen">
        <StatusBarIPhone14 />
        <div className="top-navigation-1">
          <ArrowLeftButton arrowLeft={arrowLeftButton1Props.arrowLeft} />
          <div className="guest-2 poppins-bold-white-20px">
            <span className="poppins-bold-white-20px">{spanText1}</span>
          </div>
          <ArrowLeftButton arrowLeft={arrowLeftButton2Props.arrowLeft} />
        </div>
        <img className="image-25" src={image25} alt="image 25" />
        <div className="overlap-group3-2">
          <div className="email-1 poppins-normal-black-16px">
            <span className="poppins-normal-black-16px">{spanText2}</span>
          </div>
        </div>
        <div className="overlap-group2-2">
          <div className="full-name poppins-normal-black-16px">
            <span className="poppins-normal-black-16px">{spanText3}</span>
          </div>
        </div>
        <div className="overlap-group1-2">
          <img className="ellipse-9" src={ellipse9} alt="Ellipse 9" />
          <div className="ellipse-container-1">
            <div className="ellipse-10-2"></div>
            <div className="ellipse-11-4"></div>
            <div className="ellipse-11-5"></div>
          </div>
          <div className="next-1 poppins-normal-white-12px">
            <span className="poppins-normal-white-12px">{spanText4}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Guest;
