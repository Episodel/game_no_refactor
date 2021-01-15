import { db } from "../environments/environment";

export default class FirebaseServices {
  addRound = (roundId = 0, whiteWin = 0, blackWin = 0) => {
    db.collection("game")
      .doc(`round ${roundId}`)
      .set({
        round: roundId,
        voteTeamBlack: 0,
        voteTeamWhite: 0,
        winner: "",
      })
      .then(() => {
        console.log("Document successfully written!");
      })
      .catch((error) => {
        console.error("Error", error);
      });

    db.collection("maintainer")
      .doc(`settings`)
      .update({
        activeRound: roundId,
        status: "",
        white: whiteWin,
        black: blackWin,
      })
      .then(() => {
        console.log("Document successfully written!");
      })
      .catch((error) => {
        console.error("Error", error);
      });
  };

  deleteRound = (roundId) =>
    db.collection("game").doc(`round ${roundId}`).delete();

  getRound = () =>
    db
      .collection("game")
      .get()
      .then((querySnapshot) => {
        return querySnapshot.docs.map((doc) => doc.data());
      });

  updateRoundBlack = (choice, roundId) =>
    db
      .collection("game")
      .doc(`round ${roundId}`)
      .update({
        voteTeamBlack: choice,
      })
      .then(() => {
        console.log("Document successfully written!");
      })
      .catch((error) => {
        console.error("Error", error);
      });

  updateRoundWhite = (choice, roundId) =>
    db
      .collection("game")
      .doc(`round ${roundId}`)
      .update({
        voteTeamWhite: choice,
      })
      .then(() => {
        console.log("Document successfully written!");
      })
      .catch((error) => {
        console.error("Error", error);
      });

  getSettings = () =>
    db
      .collection("maintainer")
      .get()
      .then((querySnapshot) => {
        return querySnapshot.docs.map((doc) => doc.data());
      });
}
