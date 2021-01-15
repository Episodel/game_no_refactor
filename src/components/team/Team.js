import React, { useEffect, useState } from "react";

import "./team.scss";

import castle from "../../assets/voteIcon/castle.png";
import swordLeft from "../../assets/voteIcon/swordLeft.png";
import swordRight from "../../assets/voteIcon/swordRight.png";

const IconSword = ({ icon }) => {
  return (
    <div className="sword">
      <img className="sword__img" src={icon} alt="" />
    </div>
  );
};

const TeamBlack = ({ roundData }) => {
  const [voteTeam, setVoteTeam] = useState(null);
  useEffect(() => {
    if (roundData) {
      if (roundData.voteTeamBlack === 0) {
        setVoteTeam("");
      } else {
        setVoteTeam(<IconSword icon={swordLeft} />);
      }
    }
  }, [roundData]);
  return (
    <div className="team team__black">
      {voteTeam}
      <div className="team__shield">
        <div className="team__shield__inside">
          <img className="team__shield__castle" src={castle} alt="castle" />
          <h4 className="team__shield__name">Team name</h4>
        </div>
      </div>
    </div>
  );
};

const TeamWhite = ({ roundData }) => {
  const [voteTeam, setVoteTeam] = useState(null);
  useEffect(() => {
    if (roundData) {
      if (roundData.voteTeamWhite === 0) {
        setVoteTeam("");
      } else {
        setVoteTeam(<IconSword icon={swordRight} />);
      }
    }
  }, [roundData]);
  return (
    <div className="team team__white">
      {voteTeam}
      <div className="team__shield">
        <div className="team__shield__inside">
          <img className="team__shield__castle" src={castle} alt="castle" />
          <h4 className="team__shield__name">Team name</h4>
        </div>
      </div>
    </div>
  );
};

export { TeamBlack, TeamWhite };
