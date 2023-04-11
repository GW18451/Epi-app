import React from "react";
import StatusBarIPhone14 from "../StatusBarIPhone14";
import ArrowLeftButton from "../ArrowLeftButton";
import "./LoginIn.css";

function LoginIn(props) {
  const {
    spanText1,
    image28,
    spanText2,
    spanText3,
    ellipse9,
    spanText4,
    statusBarIPhone14Props,
    arrowLeftButton1Props,
    arrowLeftButton2Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="login-in screen">
        <StatusBarIPhone14 className={statusBarIPhone14Props.className} />
        <div className="top-navigation-3">
          <ArrowLeftButton arrowLeft={arrowLeftButton1Props.arrowLeft} />
          <div className="sign-in-1 poppins-bold-white-20px-2">
            <span className="poppins-bold-white-20px-2">{spanText1}</span>
          </div>
          <ArrowLeftButton arrowLeft={arrowLeftButton2Props.arrowLeft} />
        </div>
        <img className="image-28" src={image28} alt="image 28" />
        <div className="overlap-group1-4">
          <div className="email-2 poppins-normal-black-16px">
            <span className="poppins-normal-black-16px">{spanText2}</span>
          </div>
        </div>
        <div className="overlap-group2-4">
          <div className="password-1 poppins-normal-black-16px">
            <span className="poppins-normal-black-16px">{spanText3}</span>
          </div>
        </div>
        <div className="overlap-group3-3">
          <img className="ellipse-9-2" src={ellipse9} alt="Ellipse 9" />
          <div className="ellipse-container-2">
            <div className="ellipse-10-4"></div>
            <div className="ellipse-11-8"></div>
            <div className="ellipse-11-9"></div>
          </div>
          <div className="next-2 poppins-normal-white-12px">
            <span className="poppins-normal-white-12px">{spanText4}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginIn;
