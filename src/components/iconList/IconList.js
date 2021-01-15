import React, { useEffect, useState } from "react";
import "./iconList.scss";
import { Dragon, Princess, Samurai } from "../voteIcon/voteIcon";

const voteTeamItems = [
  { name: "Princess", vote: 1, component: <Princess /> },
  { name: "Dragon", vote: 2, component: <Dragon /> },
  { name: "Samurai", vote: 3, component: <Samurai /> },
];

const IconList = ({ handlerChoice }) => {
  return (
    <>
      <ul className="icon__list">
        {voteTeamItems.map((item, i) => (
          <li
            key={item.name}
            className="icon__list__item"
            onClick={() => handlerChoice(i + 1)}
          >
            {item.component}
          </li>
        ))}
      </ul>
    </>
  );
};

const VoteTeam = ({ choiceTeam }) => {
  const [vote, setVote] = useState(null);
  useEffect(() => {
    if (choiceTeam) {
      setVote(voteTeamItems[choiceTeam - 1].component);
    } else {
      setVote("Choose a hero");
    }
  }, [choiceTeam]);
  return <div className="vote__icon">{vote}</div>;
};

export { IconList, VoteTeam };
