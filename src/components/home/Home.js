import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TeamBlack, TeamWhite } from "../team/Team";
import "./home.scss";
import ButtonAddRound from "../button/ButtonAddRound";
import ButtonResetRound from "../button/ButtonResetRound";
import withData from "../../HOC/withData";

const Home = ({ roundData }) => {
  return (
    <div className="home">
      <div className="column">
        <div className="column__left">
          <Link to="/white">
            <TeamWhite roundData={roundData} />
          </Link>
        </div>
        <div className="column__right">
          <Link to="/black">
            <TeamBlack roundData={roundData} />
          </Link>
        </div>
      </div>
      <IsAdmin />
    </div>
  );
};

const IsAdmin = () => {
  const locationHref = window.location.href.match(/\/([a-z]*$)/)[1];

  if (locationHref === "admin") {
    return (
      <div className="btn__container">
        <ButtonAddRound>start game</ButtonAddRound>
        <ButtonResetRound>reset game</ButtonResetRound>
      </div>
    );
  } else {
    return null;
  }
};

export default withData(Home);
