import React from "react";
import "./appStyle.scss";
import "./appStyle.scss";
const AppStyle = ({ children }) => {
  return (
    <div className="wave__wrapper">
      <svg
        className="wave"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 180"
      >
        <linearGradient id="linear-gradient">
          <stop offset="50%" stopColor="red" />
          <stop offset="100%" stopColor="black" />
        </linearGradient>
        <path
          fill="#fff"
          d="M0,128L48,122.7C96,117,192,107,288,122.7C384,139,480,181,576,165.3C672,149,768,75,864,74.7C960,75,1056,149,1152,170.7C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg>
      <div className="appStyle__container">{children}</div>
    </div>
  );
};

export default AppStyle;
