import React from "react";
import { IconList, VoteTeam } from "../iconList/IconList";
import withData from "../../HOC/withData";

const TeamWhite = ({ roundData, handlerChoiceWhite }) => {
  console.log(handlerChoiceWhite);
  return (
    <div className="icon__wrapper">
      {roundData && <VoteTeam choiceTeam={roundData.voteTeamWhite} />}
      <IconList handlerChoice={handlerChoiceWhite} />
    </div>
  );
};

export default withData(TeamWhite);
