import React, { useState, useEffect, useCallback } from "react";
import { connect } from "react-redux";
import { FetchGameType,SelectGameType } from "../../store/actions/index";
import classes from "./NewGame.module.css";
import ShoppingCart from "../../components/NewGame/ShoppingCart/ShoppingCart";
import GameTypes from "../../components/Games/GameTypes";
import CartButtons from "../../components/NewGame/CartButtons/CartButtons";
import NumberGrid from "../../components/NewGame/NumberGrid/NumberGrid";
const NewGame = ({ OnInitGames, types,currentType }) => {
  // const [currentType, setCurrentType] = useState(null);
  // const selectGameType = useCallback(
  //   (currType) => {
  //       if(types){
          
  //         setCurrentType(selectedGame);
  //         console.log("my Current Game" + currentType);
  //       }

  //   },
  //   [types,currentType]
  // );

  useEffect(() => {
    OnInitGames();
  }, [OnInitGames])
  
    
  
  
  return (
    <div className={classes.NewGame}>
      <div className={classes.Content}>
        <h3 style={{ fontSize: "24px", paddingLeft: "8px"}}>
          <strong>NEW BET</strong> FOR {currentType ?  currentType[0].type.toUpperCase(): 'loading...'}
        </h3>
        <div className="betHeader">
          <p style={{ fontSize: "17px", paddingLeft: "8px" }}>Choose a game</p>
          <GameTypes types={types} currentType={ currentType ? currentType : null} />

        </div>
        <div>
        <p style={{ fontSize: "17px", paddingLeft: "8px" }}> <strong>Fill your bet</strong></p>
        <p style={{ fontSize: "17px", paddingLeft: "8px" }}> {currentType ?  currentType[0].description: 'loading...'}</p>
        </div>
        <NumberGrid max={currentType ?  currentType[0]['max-number']:null} total={currentType ?  currentType[0].range:null} />
        <CartButtons />
      </div>
      <ShoppingCart />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    types: state.games.types,
    currentType: state.games.currentType
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    OnInitGames: () => {
      dispatch(FetchGameType());
    },
    OnSelectGame: (selectedGame)=>{
      dispatch(SelectGameType(selectedGame))
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NewGame);
