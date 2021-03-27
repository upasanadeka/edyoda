import React from "react";
import "./styles.css";
import user from "../components/assets/profile-circle.svg";
import html from "../components/assets/html5.svg";
import css from "../components/assets/css.svg";
import js from "../components/assets/js.svg";
import react from "../components/assets/react.svg";
import linkedin from "../components/assets/linkedin.svg";
import website from "../components/assets/website.svg";
import github from "../components/assets/github.svg";
import vid from "../components/assets/intro-video-placeholder.jpg";

const data = [
  {
    title: "John Doe",
    img: user,
    text1: "HTML",
    text2: "CSS",
    text3: "JAVASCRIPT",
    selected: true,
  },
  {
    title: "Daphne Doe",
    img: css,
    text1: "Python",
    text2: "Data Structures & Algorithms",
    text3: "",
    selected: false,
  },
];

const topics = [
  { title: "HTML 5", img: html },
  { title: "CSS3", img: css },
  { title: "javaScript", img: js },
  { title: "ReactJS", img: react },
];
export default function Instructors() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ display: "flex" }} className="main">
      <div className="instructors-container">
        <div
          style={{
            fontFamily: "Raleway",
            fontStyle: "normal",
            fontWeight: "bolder",
            fontSize: "25px",
            lineHeight: "30px",
            color: "#15294B",
            padding: "50px",
            paddingBottom: "20px",
          }}
        >
          Instructors
        </div>

        <div>
          {data.map((item, index) => (
            <div key={index}>
              <div
                style={
                  item.selected
                    ? {
                        display: "flex",
                        gap: "20px",
                        alignItems: "start",
                        margin: "30px 0",
                        padding: "20px 0 20px 50px",
                        background: "rgba(21, 41, 75, 0.1)",
                      }
                    : {
                        display: "flex",
                        gap: "20px",
                        alignItems: "start",
                        margin: "30px 0",
                        padding: "20px 0 20px 50px",
                      }
                }
              >
                <img src={item.img} alt="user" />
                <span
                  style={{
                    fontFamily: "Roboto",
                    fontStyle: "normal",
                    fontWeight: "bold",
                    fontSize: "18px",
                    lineHeight: "21px",
                    color: "#15294B",
                  }}
                >
                  {item.title}
                  <div
                    style={{
                      fontFamily: "Roboto",
                      fontStyle: "normal",
                      fontWeight: "normal",
                      fontSize: "10px",
                      lineHeight: "18px",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#15294B",
                      marginTop: "10px",
                    }}
                  >
                    <div>{item.text1}</div>
                    <div>{item.text2}</div>
                    <div>{item.text3}</div>
                  </div>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="info">
        <div className={"info-container"}>
          <div className={"instructors-info"}>
            <div
              style={{
                paddingBottom: "30px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  padding: "5%",
                }}
              >
                <img
                  src={user}
                  alt="user"
                  style={{ width: "109px", height: "109px" }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img src={linkedin} alt="linkedin" />
                <img src={website} alt="website" />
                <img src={github} alt="github" />
              </div>
            </div>
            <div
              style={{
                fontFamily: "Raleway",
                fontStyle: "normal",
                fontWeight: "normal",
                fontSize: "30px",
                lineHeight: "35px",
                letterSpacing: "0.1em",
                textTransform: "capitalize",
                color: "rgba(0, 0, 0, 0.9)",
              }}
            >
              John Doe
            </div>
            <div>
              <img src={vid} alt="video" style={{ width: "80%" }} />
            </div>
          </div>
          <div style={{ padding: "50px" }}>
            <div
              style={{
                fontFamily: "Roboto",
                fontStyle: "normal",
                fontWeight: "bold",
                fontSize: "18px",
                lineHeight: "21px",
                textTransform: "uppercase",
                margin: "10px 0px",
              }}
            >
              Stats
            </div>
            <div style={{ display: "flex", gap: "50px" }}>
              <div
                style={{
                  fontFamily: "Roboto",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  lineHeight: "35px",
                  textAlign: "justify",
                  letterSpacing: "0.1em",
                  marginTop: "20px",
                }}
              >
                <div style={{ fontSize: "44px", color: "rgba(0, 0, 0, 0.75)" }}>
                  1320
                </div>
                <div style={{ fontSize: "14px", color: "rgba(0, 0, 0, 0.6)" }}>
                  Total Hours Taught
                </div>
              </div>
              <div
                style={{
                  fontFamily: "Roboto",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  lineHeight: "35px",
                  textAlign: "justify",
                  letterSpacing: "0.1em",
                  margin: "20px 0",
                }}
              >
                <div style={{ fontSize: "44px", color: "rgba(0, 0, 0, 0.75)" }}>
                  468
                </div>
                <div style={{ fontSize: "14px", color: "rgba(0, 0, 0, 0.6)" }}>
                  Students Taught
                </div>
              </div>
            </div>

            <div
              style={{
                fontFamily: "Roboto",
                fontStyle: "normal",
                fontWeight: "bold",
                fontSize: "18px",
                lineHeight: "21px",
                textTransform: "uppercase",
                margin: "30px 0",
              }}
            >
              Technical Expertise
            </div>
            <div
              style={{
                paddingBottom: "50px",
                marginBottom: "50px",
                borderBottom: "0.7px solid #CCCCCC",
                display: "flex",
                gap: "50px",
                alignItems: "center",
                justifyContent: "start",
              }}
            >
              {topics.map((item, i) => (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  key={i}
                >
                  <img
                    src={item.img}
                    alt="img"
                    style={{ width: "90px", height: "90px" }}
                  />
                  <div
                    style={{
                      fontFamily: "Roboto",
                      fontStyle: "normal",
                      fontWeight: "normal",
                      fontSize: "16px",
                      lineHeight: "35px",
                      textAlign: "justify",
                      letterSpacing: "0.1em",
                      color: "rgba(0, 0, 0, 0.6)",
                    }}
                  >
                    {item.title}
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: "70px" }}>
              <div style={{ margin: "30px 0px" }}>
                <div
                  style={{
                    fontFamily: "Roboto",
                    fontStyle: "normal",
                    fontWeight: "bold",
                    fontSize: "18px",
                    lineHeight: "21px",
                    textTransform: "uppercase",
                    margin: "30px 0",
                  }}
                >
                  Tagline
                </div>
                <div
                  style={{
                    fontFamily: "Roboto",
                    fontStyle: "normal",
                    fontWeight: "normal",
                    fontSize: "16px",
                    lineHeight: "35px",
                    textAlign: "justify",
                    letterSpacing: "0.1em",
                  }}
                >
                  “Everything you want is outside of your comfort zone.”
                </div>
              </div>

              <div style={{ margin: "30px 0px" }}>
                <div
                  style={{
                    fontFamily: "Roboto",
                    fontStyle: "normal",
                    fontWeight: "bold",
                    fontSize: "18px",
                    lineHeight: "21px",
                    textTransform: "uppercase",
                    margin: "30px 0",
                  }}
                >
                  About
                </div>
                <div
                  style={{
                    fontFamily: "Roboto",
                    fontStyle: "normal",
                    fontWeight: "normal",
                    fontSize: "16px",
                    lineHeight: "35px",
                    textAlign: "justify",
                    letterSpacing: "0.1em",
                  }}
                >
                  John is a Computer Science graduate. He has been part of the
                  corporate circle since his college days. In his early days, he
                  was part of a startup team delivering production grid android
                  apps. Currently, he is a lead developer at www.edyoda.com. He
                  is responsible for the entire front-end development &
                  integration with the back-end. React, Python, Django are his
                  areas of expertise. He has been delivering corporate training
                  for Android, React, Javascript, Python & Django.{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
