import React from "react";

const ProgressBar = (props) => {
  const { bgColor, bgColor2, completed } = props;

  const containerStyles = {
    height: 8,
    width: "100%",
    backgroundColor: bgColor2,
    borderRadius: 50,
    margin: "0px 30px",
  };

  const fillerStyles = {
    height: "100%",
    width: `${completed}%`,
    backgroundColor: bgColor,
    borderRadius: "inherit",
    textAlign: "right",
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}></div>
    </div>
  );
};

export default ProgressBar;
