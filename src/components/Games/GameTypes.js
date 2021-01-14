import React from "react";
import { withRouter } from "react-router-dom";
import GameType from "./GameType/GameType";
import classes from "./GameTypes.module.css";


const GameTypes = (props) => {

  const checkActiveButtonsHandler = (arr,val) => {
      if(arr){
        return arr.includes(val)
      }

      return false;
      
  }
  console.log(props.activeArray)
  let gametypes = <p>loading....</p>; 
  if (props.types) {
    gametypes = props.types.map((typeObj) => (
      <GameType
        key={typeObj.type}
        name={typeObj.type}
        color={typeObj.color}
        onClick={() => props.clickHandler(typeObj.type)}
        active={checkActiveButtonsHandler(props.activeArray,typeObj.type)}
      />
    ));
  }

  return <div className={classes.GameTypes}>{gametypes}</div>;
};


export default withRouter(React.memo (GameTypes));
