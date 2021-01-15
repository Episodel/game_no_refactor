import React from "react";
import princess from "../../assets/voteIcon/princess.jpg";
import dragon from "../../assets/voteIcon/dragon.jpg";
import samurai from "../../assets/voteIcon/samurai.jpg";
import "./voteIcon.scss";

const Princess = () => {
  return (
    <div className="vote__icon">
      <img
        className="vote__icon__img__princess"
        src={princess}
        alt="princess"
      />
    </div>
  );
};
const Dragon = () => {
  return (
    <div className="vote__icon">
      <img className="vote__icon__img__dragon" src={dragon} alt="dragon" />
    </div>
  );
};

const Samurai = () => {
  return (
    <div className="vote__icon">
      <img className="vote__icon__img__samurai" src={samurai} alt="samurai" />;
    </div>
  );
};

export { Princess, Dragon, Samurai };
