import React, { useEffect, useState } from "react";
import "./header.scss";
import { db } from "../../environments/environment";
import WinsAndLosses from "../winsAndLosses/WinsAndLosses";

const Header = () => {
  const [reels, setReels] = useState([]);

  useEffect(() => {
    db.collection("maintainer").onSnapshot((snapshot) =>
      setReels(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  return (
    <header className="header">
      <h1 className="header__title">...</h1>
      {reels.map(({ activeRound, white, black }, i) => (
        <div key={i}>
          <h2 className="header__round">Active Round {activeRound}</h2>
          <div className="header__winsAndLoses">
            <WinsAndLosses name={"white"} count={white} />
            <WinsAndLosses name={"black"} count={black} />
          </div>
        </div>
      ))}
    </header>
  );
};

export default Header;
