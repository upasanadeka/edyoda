import React from "react";
import "./styles.css";
import html from "../components/assets/html5.svg";
import css from "../components/assets/css.svg";
import js from "../components/assets/js.svg";
import react from "../components/assets/react.svg";
import dsa from "../components/assets/dsa.svg";

const data = [
  { title: "HTML 5", img: html, selected: false },
  { title: "CSS3", img: css, selected: false },
  { title: "JavaScript", img: js, selected: true },
  { title: "ReactJS", img: react, selected: false },
  { title: "Data Structures & Algorithms", img: dsa, selected: false },
];
export default function Modules() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ display: "flex" }} className="main">
      <div className="modules-container">
        <div
          style={{
            fontFamily: "Raleway",
            fontStyle: "normal",
            fontWeight: "bolder",
            fontSize: "25px",
            lineHeight: "30px",
            color: "#15294B",
            padding: "50px 0px 0px 50px",
          }}
        >
          Modules
        </div>

        <div>
          {data.map((item, idx) => (
            <div
              key={idx}
              style={
                item.selected
                  ? {
                      display: "flex",
                      gap: "20px",
                      alignItems: "center",
                      margin: "30px 0",
                      padding: "10px",
                      paddingLeft: "50px",
                      fontWeight: "bolder",
                      background: "rgba(21, 41, 75, 0.1)",
                    }
                  : {
                      display: "flex",
                      gap: "20px",
                      alignItems: "center",
                      margin: "30px 0",
                      padding: "10px",
                      paddingLeft: "50px",
                    }
              }
            >
              <img src={item.img} alt="img" />
              <span
                style={{
                  fontFamily: "Roboto",
                  fontStyle: "normal",
                  fontSize: "18px",
                  lineHeight: "21px",
                }}
              >
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="info">
        <div className="info-heading">JavaScript</div>
        <div
          style={{
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "300",
            fontSize: "12px",
            lineHeight: "14px",
          }}
        >
          7 February 2021, Monday
        </div>

        <div
          style={{
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "18px",
            lineHeight: "21px",
            marginTop: "30px",
          }}
        >
          Session Plan
        </div>
        <div
          style={{
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "16px",
            lineHeight: "30px",
            paddingBottom: "40px",
            borderBottom: "0.7px solid rgba(0, 0, 0, 0.4)",
          }}
        >
          <ol style={{ paddingInlineStart: "12px" }}>
            <li>Introduction to JavaScript</li>
            <li>
              Language Basics: Variables, Data Types - Primitive and Reference
            </li>
            <li>
              Number (Add, Sub, Mul, NaN, Infinity), Inbuilt Functions - Numbers
            </li>
            <li>Dialogs: Alert, Confirm, Input</li>
            <li>Control Flow</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
