import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Reservation from "./components/Reservation";
import Login from "./components/Login";
import Guest from "./components/Guest";
import Profile from "./components/Profile";
import LoginIn from "./components/LoginIn";
import IPhone1313Pro1 from "./components/IPhone1313Pro1";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/reservation">
          <Reservation {...reservationData} />
        </Route>
        <Route path="/login">
          <Login {...loginData} />
        </Route>
        <Route path="/guest">
          <Guest />
        </Route>
        <Route path="/profile">
          <Profile {...profileData} />
        </Route>
        <Route path="/login-in">
          <LoginIn {...loginInData} />
        </Route>
        <Route path="/iphone-13-13-pro-1">
          <IPhone1313Pro1 {...iPhone1313Pro1Data} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const arrowLeftButton1Data = {
    arrowLeft: "/img/arrow-left-1@2x.png",
};

const loginData = {
    spanText1: "Login",
    overlapGroup2: "/img/rectangle-7-1@2x.png",
    spanText2: "bibliography...",
    spanText3: "First name...",
    spanText4: "Last Name...",
    spanText5: "email...",
    spanText6: "Username...",
    spanText7: "password...",
    overlapGroup4: "/img/ellipse-9-1@2x.png",
    spanText8: "Next",
    arrowLeftButtonProps: arrowLeftButton1Data,
};

const arrowLeftButton2Data = {
    arrowLeft: "/img/arrow-left-1@2x.png",
};

const arrowLeftButton3Data = {
    arrowLeft: "/img/ellipse-7-2@2x.png",
};

const statusBarIPhone143Data = {
    className: "status-bar-i-phone-14-2",
};

const arrowLeftButton4Data = {
    arrowLeft: "/img/arrow-left-1@2x.png",
};

const arrowLeftButton5Data = {
    arrowLeft: "/img/ellipse-7-2@2x.png",
};

const profileData = {
    spanText1: "Profile",
    image26: "/img/image-26-1@2x.png",
    overlapGroup2: "/img/rectangle-5-1@2x.png",
    spanText2: <React.Fragment>Bibliography....<br />,,,,,<br />....<br />....<br />...<br />...</React.Fragment>,
    ellipse9: "/img/ellipse-9-1@2x.png",
    spanText3: <React.Fragment><br />Seizure Rate per Month</React.Fragment>,
    spanText4: "Heart Rate",
    spanText5: "Glucose Level",
    spanText6: "Age",
    spanText7: "Weight",
    spanText8: "?",
    spanText9: "Medical Statistics",
    spanText10: "Height",
    statusBarIPhone14Props: statusBarIPhone143Data,
    arrowLeftButton1Props: arrowLeftButton4Data,
    arrowLeftButton2Props: arrowLeftButton5Data,
};

const statusBarIPhone144Data = {
    className: "status-bar-i-phone-14-3",
};

const arrowLeftButton6Data = {
    arrowLeft: "/img/arrow-left-1@2x.png",
};

const arrowLeftButton7Data = {
    arrowLeft: "/img/ellipse-7-2@2x.png",
};

const loginInData = {
    spanText1: "Sign In",
    image28: "/img/image-28-1@2x.png",
    spanText2: "email...",
    spanText3: "Password",
    ellipse9: "/img/ellipse-9-1@2x.png",
    spanText4: "Next",
    statusBarIPhone14Props: statusBarIPhone144Data,
    arrowLeftButton1Props: arrowLeftButton6Data,
    arrowLeftButton2Props: arrowLeftButton7Data,
};

const reservationData = {
    spanText1: "Connect to Watch",
    spanText2: "Login information",
    spanText3: "Sign in",
    spanText4: "Guest",
    spanText5: "To pair with phone: login here",
    icons: "/img/icons-1@2x.png",
    ticketButton: "/img/ellipse-17-1@2x.png",
    ticket: "/img/ticket-1@2x.png",
};

const iPhone1313Pro1Data = {
    spanText1: "9:41",
    iconMobileSignal: "/img/icon---mobile-signal-6@2x.png",
    iconSignal: "/img/wifi-6@2x.png",
    battery: "/img/battery-6@2x.png",
    spanText2: "About",
    spanText3: <React.Fragment>This app is a tool for them to track these seizures . <br /><br />With this app also you will be able to link it to the health app on IOS to find certain triggers or irregularrities for your doctor!</React.Fragment>,
    icons: "/img/icons-2@2x.png",
    ticketButton: "/img/ellipse-17-2@2x.png",
    ticket: "/img/ticket-2@2x.png",
    image24: "/img/image-24-1@2x.png",
};

