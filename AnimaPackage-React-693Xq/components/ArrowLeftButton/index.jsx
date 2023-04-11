import React from "react";
import "./ArrowLeftButton.css";

function ArrowLeftButton(props) {
  const { arrowLeft } = props;

  return (
    <div className="arrow-left-button">
      <img className="arrow-left" src={arrowLeft} alt="arrow-left" />
    </div>
  );
}

export default ArrowLeftButton;
