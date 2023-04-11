import React from "react";
import StatusBarIPhone14 from "../StatusBarIPhone14";
import ArrowLeftButton from "../ArrowLeftButton";
import "./Login.css";

function Login(props) {
  const {
    spanText1,
    overlapGroup2,
    spanText2,
    spanText3,
    spanText4,
    spanText5,
    spanText6,
    spanText7,
    overlapGroup4,
    spanText8,
    arrowLeftButtonProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="login screen">
        <StatusBarIPhone14 />
        <div className="top-navigation">
          <ArrowLeftButton arrowLeft={arrowLeftButtonProps.arrowLeft} />
          <div className="login-1 poppins-bold-white-20px">
            <span className="poppins-bold-white-20px">{spanText1}</span>
          </div>
        </div>
        <div className="overlap-group2-1" style={{ backgroundImage: `url(${overlapGroup2})` }}>
          <div className="bibliography poppins-normal-black-16px">
            <span className="poppins-normal-black-16px">{spanText2}</span>
          </div>
        </div>
        <div className="overlap-group3-1">
          <div className="first-name poppins-normal-black-16px">
            <span className="poppins-normal-black-16px">{spanText3}</span>
          </div>
        </div>
        <div className="overlap-group">
          <div className="last-name poppins-normal-black-16px">
            <span className="poppins-normal-black-16px">{spanText4}</span>
          </div>
        </div>
        <div className="overlap-group1-1 poppins-normal-black-16px">
          <div className="ellipse-10-1"></div>
          <div className="ellipse-11-2"></div>
          <div className="ellipse-11-3"></div>
          <div className="rectangle-4"></div>
          <div className="rectangle-5"></div>
          <div className="rectangle-6"></div>
          <div className="email">
            <span className="poppins-normal-black-16px">{spanText5}</span>
          </div>
          <div className="username">
            <span className="poppins-normal-black-16px">{spanText6}</span>
          </div>
          <div className="password">
            <span className="poppins-normal-black-16px">{spanText7}</span>
          </div>
        </div>
        <div className="overlap-group4-1" style={{ backgroundImage: `url(${overlapGroup4})` }}>
          <div className="next poppins-normal-white-12px">
            <span className="poppins-normal-white-12px">{spanText8}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
