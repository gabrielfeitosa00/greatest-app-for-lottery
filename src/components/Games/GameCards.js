import React from "react";
import GameCard from "./GameCard/GameCard";
import classes from "./GameCards.module.css";

const GameCards = (props) => {

    let content = <p> You have no games yet! </p>
    if(props.cardObjs.length!==0)
    {content = props.cardObjs.map((cardObj,index) => 
      <GameCard
        key={index}
        color={cardObj.color}
        numbers={cardObj.numbers}
        name={cardObj.name}
        date={cardObj.date}
        price={cardObj.price}
        onDelete={()=>props.onDelete(cardObj.id)}
        purchasing={props.purchasing}
      />
    );
    console.log(props.cardObjs)
  }
  return <div className={classes.GameCards}> {content}</div>;
};

export default GameCards;
