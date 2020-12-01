import React from "react";
import GameCard from "./GameCard/GameCard";
import classes from "./GameCards.module.css";

const GameCards = (props) => {
  return (
    <div className={classes.GameCards}>
      <GameCard color="#7F3992" numbers="01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12, 13, 14, 15" name='Lotofácil' date='30/11/20' price='2.50' />

      <GameCard color="#7F3992" numbers="01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12, 13, 14, 15" name='Lotofácil' date='30/11/20' price='2.50' />
    </div>
  );
};

export default GameCards;
