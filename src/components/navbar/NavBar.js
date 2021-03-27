import React, { useState } from "react";
import "./NavBar.css";
import dropdown from "../assets/dropdown-icon-white.svg";
import uparrow from "../assets/uparrow.svg";

export default function NavBar(props) {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <div className="navbar">
        <div style={{ display: "flex", gap: "50px", alignItems: "center" }}>
          <div
            className="navbar-text"
            style={{ display: "flex", gap: "10px", alignItems: "center" }}
            onClick={() => setVisible(!visible)}
          >
            TEST-010120
            <span>
              {visible ? (
                <img src={uparrow} alt="" />
              ) : (
                <img src={dropdown} alt="" />
              )}
            </span>
          </div>
          <div className="navbar-heading">Full Stack Developer Program</div>
        </div>
        <div className="percent">
          <div>38%</div>
        </div>
      </div>
      {visible ? (
        <div
          className={visible ? "fadeIn navbar2" : "fadeOut"}
          onClick={() => setVisible(!visible)}
        >
          <div
            style={{
              fontFamily: "Roboto",
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "14px",
              lineHeight: "16px",
              color: "rgba(255, 255, 255, 0.9)",
            }}
          >
            Select Program
          </div>
          <div
            style={{
              display: "flex",
              gap: "50px",
              alignItems: "center",
              margin: "10px 0",
            }}
          >
            <div
              style={{
                background: "rgba(255, 255, 255, 0.9)",
                borderRadius: "5px",
                fontFamily: "Roboto",
                fontStyle: "normal",
                fontWeight: "bold",
                fontSize: "18px",
                lineHeight: "21px",
                letterSpacing: "0.05em",
                color: "#15294B",
                padding: "5px",
              }}
            >
              TEST-010120
            </div>
            <div
              style={{
                fontFamily: "Roboto",
                fontStyle: "normal",
                fontWeight: "normal",
                fontSize: "18px",
                lineHeight: "21px",
                letterSpacing: "0.05em",
                color: "rgba(255, 255, 255, 0.9)",
              }}
            >
              TEXT-020220
            </div>
            <div
              style={{
                fontFamily: "Roboto",
                fontStyle: "normal",
                fontWeight: "normal",
                fontSize: "18px",
                lineHeight: "21px",
                letterSpacing: "0.05em",
                color: "rgba(255, 255, 255, 0.9)",
              }}
            >
              TEXT-030320
            </div>
          </div>
        </div>
      ) : (
        <div
          className={visible ? "fadeIn navbar2" : "fadeOut"}
          onClick={() => setVisible(!visible)}
        ></div>
      )}
    </div>
  );
}
