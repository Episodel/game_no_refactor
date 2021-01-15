import React from "react";
import FirebaseServices from "../../services/services";

const ButtonResetRound = ({ children }) => {
  const firebaseServices = new FirebaseServices();

  const handlerResetRound = async () => {
    const getRound = await firebaseServices.getRound();
    for await (let i of getRound) {
      await firebaseServices.deleteRound(i.round);
    }
    await firebaseServices.addRound();
  };
  return (
    <div>
      <button className="btn" onClick={handlerResetRound}>
        {children}
      </button>
    </div>
  );
};

export default ButtonResetRound;
