import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import GameType from "./GameType/GameType";
import classes from "./GameTypes.module.css";
import { SelectGameType } from "../../store/actions/index";

const GameTypes = (props) => {
  // let currentPath = props.location.pathname;
  // let currentType = null;
  // // if (props.currentType) {
  // //   currentType = props.currentType[0].type;
  // // }
  // let clickerEvent = null;
  // let activeRules = null;
  // console.log(props.OnSelectGame);
  // if (currentPath === "/new-bet") {
  //   clickerEvent = props.OnSelectGame;
  //   activeRules = (currentType, myType) => {
  //     if (currentType !== null) {
  //       return currentType === myType;
  //     } else {
  //       return false;
  //     }
  //   };
  // }
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
        onClick={() => props.clickHandler(typeObj)}
        active={checkActiveButtonsHandler(props.activeArray,typeObj.type)}
      />
    ));
  }

  return <div className={classes.GameTypes}>{gametypes}</div>;
};

const mapDispatchToProps = (dispatch) => {
  return {
    OnSelectGame: (selectedGame) => {
      dispatch(SelectGameType(selectedGame));
    },
  };
};
export default connect(null, mapDispatchToProps)(withRouter(GameTypes));
