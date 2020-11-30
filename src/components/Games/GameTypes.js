import React from "react";
import GameType from "./GameType/GameType";
import classes from "./GameTypes.module.css"

const GameTypes = (props) => {
  let gametypes = <p>loading....</p>;
  if (props.types) {
    gametypes = props.types.map((typeObj) => (
      <GameType key={typeObj.type} name={typeObj.type} color={typeObj.color} />
    ));
  }

  return <div className={classes.GameTypes}>{gametypes}</div>;
};

export default GameTypes;
