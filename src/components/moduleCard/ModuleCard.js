import React from "react";
import "./ModuleCard.css";
import user from "../assets/profile-circle.svg";

export default function ModuleCard(props) {
  const { title, weeks, assignments, mcq, username, moduleImg } = props;
  return (
    <div className="module-container">
      <div
        style={{
          display: "flex",
          gap: "5%",
          justifyContent: "center",
          height: "70px",
        }}
      >
        <img
          src={moduleImg}
          alt="reactjs"
          style={{ width: "60px", height: "60px" }}
        />
        <div>
          <div className="card-1-title">{title}</div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10%",
            }}
          >
            <span>
              <img
                src={user}
                alt="user"
                style={{ width: "30px", height: "30px" }}
              />
            </span>
            <span className="username-text">{username}</span>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "grid",
          gap: "10px",
          gridTemplateColumns: "repeat(3, 1fr)",
          marginTop: "10px",
        }}
      >
        <div style={{ marginTop: "20px" }}>
          <div className={"sub-text"}>{weeks}</div>
          <div className={"sub-text-2"}>Weeks</div>
        </div>
        <div style={{ marginTop: "20px" }}>
          <div className={"sub-text"}>{assignments}</div>
          <div className={"sub-text-2"}>Assignments</div>
        </div>
        <div style={{ marginTop: "20px" }}>
          <div className={"sub-text"}>{mcq}</div>
          <div className={"sub-text-2"}>MCQ Quiz</div>
        </div>
      </div>
    </div>
  );
}
