import React from 'react';
import GameCard from './GameCard/GameCard';
import classes from './GameCards.module.css';

const GameCards = (props)=>{
    return <div className={classes.GameCards}> <GameCard color='#7F3992'/> </div>
}


export default GameCards;