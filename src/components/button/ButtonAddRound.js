import React from "react";
import "./button.scss";
import FirebaseServices from "../../services/services";

const choices = [
  { id: 1, losesTo: 2 },
  { id: 2, losesTo: 3 },
  { id: 3, losesTo: 1 },
];

//TODO start game disabled

const ButtonAddRound = ({ children }) => {
  const firebaseService = new FirebaseServices();

  const handlerRound = async () => {
    const round = await firebaseService.getRound();
    const gSetting = await firebaseService.getSettings();

    const chosenBlack = choices.find(
      (c) => c.id === round[round.length - 1].voteTeamBlack
    );

    const chosenWhite = choices.find(
      (c) => c.id === round[round.length - 1].voteTeamWhite
    );

    if (chosenBlack.losesTo === chosenWhite.id) {
      await firebaseService.addRound(
        round.length,
        (gSetting[0].white += 1),
        gSetting[0].black
      );
      // lose
    } else if (chosenWhite.losesTo === chosenBlack.id) {
      await firebaseService.addRound(
        round.length,
        gSetting[0].white,
        (gSetting[0].black += 1)
      );
      // win
    } else if (chosenWhite.id === chosenBlack.id) {
      // draw
      await firebaseService.addRound(
        round.length,
        gSetting[0].white,
        gSetting[0].black
      );
    }
  };

  return (
    <button className="btn" onClick={handlerRound}>
      {children}
    </button>
  );
};

export default ButtonAddRound;
