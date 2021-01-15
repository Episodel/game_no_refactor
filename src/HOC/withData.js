import React, {useEffect, useState} from 'react';
import FirebaseServices from '../services/services';
import {db} from '../environments/environment';

const withData = (Component) => {
  return function () {
    const firebaseService = new FirebaseServices();
    const [maintainer, setMaintainer] = useState([]);
    const [roundData, setRoundData] = useState({});

    useEffect(() => {
      const unsubscribe = db
        .collection('maintainer')
        .onSnapshot((snapshot) =>
          setMaintainer(snapshot.docs.map((doc) => doc.data()))
        );
      return () => unsubscribe();
    }, []);

    useEffect(() => {
      if (maintainer.length !== 0) {
        const unsubscribe = db
          .collection('game')
          .doc(`round ${maintainer[0].activeRound}`)
          .onSnapshot((snapshot) => {
            setRoundData(snapshot.data());
          });

        return () => unsubscribe();
      }
    }, [maintainer]);

    const handlerChoiceWhite = async (id) => {
      await firebaseService.updateRoundWhite(id, maintainer[0].activeRound);
    };

    const handlerChoiceBlack = async (id) => {
      await firebaseService.updateRoundBlack(id, maintainer[0].activeRound);
    };
    return (
      <Component
        roundData={roundData}
        handlerChoiceWhite={handlerChoiceWhite}
        handlerChoiceBlack={handlerChoiceBlack}
      />
    );
  };
};

export default withData;
