import React from "react";
import "./SeasonDisplay.css";
const SeasonConfig = {
  summer: {
    text: "Let's hit the beach",
    iconName: "fa-sun",
  },
  winter: {
    text: "Burr, it's chilly",
    iconName: "fa-snowflake",
  },
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

function SeasonDisplay(props) {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = SeasonConfig[season];
  return (
    <div className={`season-display ${season}`}>
      <i className={`${iconName} fa-solid icon-left`}></i>
      <h1>{text}</h1>
      <i className={`${iconName} fa-solid icon-right`}></i>
    </div>
  );
}

export default SeasonDisplay;
