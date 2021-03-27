import React from "react";
import "./Header.css";
import { ReactComponent as Logo } from "../assets/edyoda-logo.svg";
import { ReactComponent as Bell } from "../assets/bell.svg";
import img1 from "../assets/profile-circle.svg";

export default function Header(props) {
  return (
    <div className="header">
      <Logo />
      <div className="header-sub">
        <Bell style={{ margin: "0px 60px" }} />
        <div> Hi {props.username}!</div>
        <img src={img1} alt="user" />
      </div>
    </div>
  );
}
