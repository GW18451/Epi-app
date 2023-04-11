import React from "react";
import StatusBarIPhone14 from "../StatusBarIPhone14";
import ArrowLeftButton from "../ArrowLeftButton";
import "./Profile.css";

function Profile(props) {
  const {
    spanText1,
    image26,
    overlapGroup2,
    spanText2,
    ellipse9,
    spanText3,
    spanText4,
    spanText5,
    spanText6,
    spanText7,
    spanText8,
    spanText9,
    spanText10,
    statusBarIPhone14Props,
    arrowLeftButton1Props,
    arrowLeftButton2Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="profile screen">
        <StatusBarIPhone14 className={statusBarIPhone14Props.className} />
        <div className="top-navigation-2">
          <ArrowLeftButton arrowLeft={arrowLeftButton1Props.arrowLeft} />
          <div className="profile-1 poppins-bold-white-20px">
            <span className="poppins-bold-white-20px">{spanText1}</span>
          </div>
          <ArrowLeftButton arrowLeft={arrowLeftButton2Props.arrowLeft} />
        </div>
        <img className="image-26" src={image26} alt="image 26" />
        <div className="overlap-group2-3" style={{ backgroundImage: `url(${overlapGroup2})` }}>
          <div className="bibliography-1 poppins-normal-white-16px">
            <span className="poppins-normal-white-16px">{spanText2}</span>
          </div>
        </div>
        <div className="overlap-group1-3">
          <img className="ellipse-9-1" src={ellipse9} alt="Ellipse 9" />
          <div className="overlap-group-1 poppins-normal-white-15px">
            <div className="ellipse-10-3"></div>
            <div className="ellipse-11-6"></div>
            <div className="ellipse-11-7"></div>
            <div className="seizure-rate-per-month">
              <span className="poppins-normal-white-15px">{spanText3}</span>
            </div>
            <div className="heart-rate">
              <span className="poppins-normal-white-15px">{spanText4}</span>
            </div>
            <div className="glucose-level">
              <span className="poppins-normal-white-15px">{spanText5}</span>
            </div>
            <div className="age">
              <span className="poppins-normal-white-15px">{spanText6}</span>
            </div>
            <div className="weight">
              <span className="poppins-normal-white-15px">{spanText7}</span>
            </div>
          </div>
          <div className="text-4 poppins-normal-white-26px">
            <span className="poppins-normal-white-26px">{spanText8}</span>
          </div>
          <div className="medical-statistics poppins-normal-white-20px">
            <span className="poppins-normal-white-20px">{spanText9}</span>
          </div>
          <div className="height poppins-normal-white-15px">
            <span className="poppins-normal-white-15px">{spanText10}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
