import React from "react";
import "./styles.css";
import js from "../components/assets/tech-javascript.svg";
import user from "../components/assets/profile-circle.svg";
import ProgressBar from "../components/progressBar/ProgressBar";
import ModuleCard from "../components/moduleCard/ModuleCard";
import Reactjs from "../components/assets/tech-reactjs.svg";
import Django from "../components/assets/tech-django.svg";
import AWS from "../components/assets/tech-aws.svg";
import DataAnalysis from "../components/assets/tech-data-analysis.svg";
import prevArrow from "../components/assets/prev-arrow.svg";
import nextArrow from "../components/assets/next-arrow.svg";
import { useHistory } from "react-router-dom";

const testData = [
  { title: "Progress", completed: 45 },
  { title: "Live Sessions", completed: 30 },
  { title: "Assignments", completed: 53 },
  { title: "MCQ Quiz", completed: 70 },
];

const moduleCards = [
  {
    username: "John",
    title: "React JS",
    weeks: "2",
    assignments: "6",
    mcq: "9",
    moduleImg: Reactjs,
  },
  {
    username: "John",
    title: "Django",
    weeks: "2",
    assignments: "6",
    mcq: "9",
    moduleImg: Django,
  },
  {
    username: "John",
    title: "Intro to AWS",
    weeks: "2",
    assignments: "6",
    mcq: "9",
    moduleImg: AWS,
  },
  {
    username: "John",
    title: "Data Analysis Fundamentals",
    weeks: "2",
    assignments: "6",
    mcq: "9",
    moduleImg: DataAnalysis,
  },
];

export default function Home() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let history = useHistory();

  const redirect = () => {
    history.push("/modules");
  };
  return (
    <div className="container">
      <h1 className="hp-heading">Continue Learning</h1>
      <div style={{ display: "flex" }}>
      <div className="view-module-text" onClick={() => redirect()}>VIEW MODULE DETAILS</div>

        {/* Card 1 */}
        <div style={{ width: "65%", padding: "20px" }}>
          <div className="card-1" onClick={() => redirect()}>
            <div style={{ width: "50%", padding: "5%", marginRight: "50px" }}>
              <div
                style={{
                  display: "flex",
                  gap: "5%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img src={js} alt="js" />
                <div>
                  <div className="card-1-title">JAVASCRIPT</div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10%",
                    }}
                  >
                    <span>
                      <img src={user} alt="user" />
                    </span>
                    <span className="username-text">John Doe</span>
                  </div>
                </div>
              </div>
              {testData.map((item, idx) => (
                <div key={idx}>
                  <div>
                    <div
                      style={{
                        color: "#0096FF",
                        fontWeight: "bold",
                        fontSize: "10px",
                        padding: "0 0 0 250px",
                      }}
                    >
                      {item.completed}%
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        paddingBottom: "15px",
                      }}
                    >
                      <div
                        style={{
                          fontSize: "14px",
                          width: "30%",
                          textAlign: "right",
                        }}
                      >
                        {item.title}
                      </div>
                      <div style={{ width: "70%" }}>
                        <ProgressBar
                          key={idx}
                          completed={item.completed}
                          bgColor={"#0096FF"}
                          bgColor2={"#ABE1FF"}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div
              style={{
                width: "35%",
                padding: "5%",
                borderLeft: "1px solid rgba(0, 168, 255, 0.4)",
              }}
            >
              <div
                style={{
                  fontFamily: "Raleway",
                  fontStyle: "normal",
                  fontWeight: "600",
                  fontSize: "18px",
                  lineHeight: "21px",
                }}
              >
                {"Today's Plan"}
              </div>
              <div
                style={{
                  fontFamily: "Roboto",
                  fontStyle: "normal",
                  fontWeight: "300",
                  fontSize: "10px",
                  lineHeight: "12px",
                  color: "rgba(0, 0, 0, 0.75)",
                }}
              >
                7 February 2021
              </div>

              <div
                style={{
                  fontFamily: "Roboto",
                  fontStyle: "normal",
                  fontWeight: "bold",
                  fontSize: "18px",
                  lineHeight: "21px",
                  color: "#007BFF",
                  marginTop: "20px",
                }}
              >
                JavaScript
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10%",
                  marginTop: "10px",
                }}
              >
                <div
                  style={{
                    fontFamily: "Roboto",
                    fontStyle: "normal",
                    fontWeight: "normal",
                    fontSize: "14px",
                    lineHeight: "16px",
                    color: "#C4C4C4",
                  }}
                >
                  Quiz/Assignment
                </div>
                <div
                  style={{
                    fontFamily: "Roboto",
                    fontStyle: "italic",
                    fontWeight: "normal",
                    fontSize: "10px",
                    lineHeight: "12px",
                    color: "#3EBFF5",
                  }}
                >
                  Opens at 7 PM
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "end",
                  alignContent: "flex-end",
                  fontFamily: "Roboto",
                  fontWeight: "bold",
                  marginTop: "7em",
                  width: "170px",
                }}
              >
                <div className="button-blue">{"JOIN LIVE SESSION"}</div>
                <div
                  style={{
                    fontFamily: "Roboto",
                    fontStyle: "normal",
                    fontWeight: "normal",
                    fontSize: "10px",
                    lineHeight: "15px",
                    textAlign: "center",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "rgba(0, 0, 0, 0.5)",
                  }}
                >
                  SESSION IN PROGRESS
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card-2">
          <div
            style={{
              fontFamily: "Raleway",
              fontStyle: "normal",
              fontWeight: "bold",
              fontSize: "20px",
              lineHeight: "23px",
              color: "rgba(0, 0, 0, 0.9)",
              padding: "5%",
              marginRight: "40px",
            }}
          >
            Progress Overview
          </div>

          <div
            style={{
              background: "#FFFFFF",
              border: "1px solid #3EBFF5",
              boxSizing: "border-box",
              boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.25)",
              borderRadius: "5px",
              marginTop: "5%",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "5% 8%",
              }}
            >
              <span
                style={{
                  fontFamily: "Roboto",
                  fontStyle: "normal",
                  fontWeight: "bold",
                  fontSize: "27px",
                  lineHeight: "32px",
                  color: "rgba(0, 0, 0, 0.9)",
                }}
              >
                94%
              </span>
              <span
                style={{
                  fontFamily: "Raleway",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  fontSize: "14px",
                  lineHeight: "25px",
                  textAlign: "center",
                  letterSpacing: "0.1em",
                  textTransform: "capitalize",
                  color: "rgba(0, 0, 0, 0.8)",
                }}
              >
                Overall Grade
              </span>
            </div>
            <div style={{ width: "85%" }}>
              <ProgressBar
                completed={"94"}
                bgColor={"#08A66C"}
                bgColor2={"rgba(163, 191, 167, 0.5)"}
              />
            </div>
          </div>

          <div
            style={{
              background: "#FFFFFF",
              border: "1px solid #3EBFF5",
              boxSizing: "border-box",
              boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.25)",
              borderRadius: "5px",
              marginTop: "5%",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "5% 8%",
              }}
            >
              <span
                style={{
                  fontFamily: "Roboto",
                  fontStyle: "normal",
                  fontWeight: "bold",
                  fontSize: "27px",
                  lineHeight: "32px",
                  color: "rgba(0, 0, 0, 0.9)",
                }}
              >
                32%
              </span>
              <span
                style={{
                  fontFamily: "Raleway",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  fontSize: "14px",
                  lineHeight: "25px",
                  textAlign: "center",
                  letterSpacing: "0.1em",
                  textTransform: "capitalize",
                  color: "rgba(0, 0, 0, 0.8)",
                }}
              >
                Attendance
              </span>
            </div>
            <div style={{ width: "85%" }}>
              <ProgressBar
                completed={"32"}
                bgColor={"#ED4A4C"}
                bgColor2={"rgba(191, 163, 163, 0.5)"}
              />
            </div>
          </div>

          <div
            style={{
              fontFamily: "Raleway",
              fontStyle: "normal",
              fontWeight: "bold",
              fontSize: "14px",
              lineHeight: "16px",
              textTransform: "uppercase",
              color: "#0096FF",
              marginTop: "18%",
            }}
          >
            VIEW DETAILED PROGRESS
          </div>
        </div>
      </div>
      <h1 className="hp-heading">Upcoming Modules</h1>
      <div className="module-cards">
        {moduleCards.map((item, idx) => (
          <div key={idx}>
            <ModuleCard
              username={item.username}
              title={item.title}
              weeks={item.weeks}
              assignments={item.assignments}
              mcq={item.mcq}
              moduleImg={item.moduleImg}
            />
          </div>
        ))}
      </div>

      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          alignItems: "center",
          margin: "20px",
        }}
      >
        <img
          src={prevArrow}
          alt="previous"
          style={{ width: "30px", height: "30px" }}
        />
        <img
          src={nextArrow}
          alt="next"
          style={{ width: "30px", height: "30px" }}
        />
      </div>
    </div>
  );
}
