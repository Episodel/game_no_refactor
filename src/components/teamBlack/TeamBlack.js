import React from "react";
import { IconList, VoteTeam } from "../iconList/IconList";
import withData from "../../HOC/withData";

const TeamBlack = ({ roundData, handlerChoiceBlack }) => {
  return (
    <div className="icon__wrapper">
      {roundData && <VoteTeam choiceTeam={roundData.voteTeamBlack} />}
      <IconList handlerChoice={handlerChoiceBlack} />
    </div>
  );
};

export default withData(TeamBlack);
