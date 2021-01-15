import React from "react";
import "./winsAndLoses.scss";

const WinsAndLosses = ({ name, count }) => {
  console.log(count);
  return (
    <h4>
      {name} wins: {count}
    </h4>
  );
};

export default WinsAndLosses;
