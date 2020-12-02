import React, { useState, useEffect, useCallback } from "react";
import { connect } from "react-redux";
import { FetchGameType, SelectGameType } from "../../store/actions/index";
import classes from "./NewGame.module.css";
import ShoppingCart from "../../components/NewGame/ShoppingCart/ShoppingCart";
import GameTypes from "../../components/Games/GameTypes";
import CartButtons from "../../components/NewGame/CartButtons/CartButtons";
import NumberGrid from "../../components/NewGame/NumberGrid/NumberGrid";
const NewGame = ({ OnInitGames, types }) => {
  const [currentType, setCurrentType] = useState(null);
  const selectGameType = useCallback((currType) => {
      const selectedType = types.filter(typeItem => typeItem.type === currType)
      setCurrentType(selectedType[0]);
       console.log('selected Type ' + selectedType[0])
      console.log("my Current Game" + currType);
    
  }, [types]);

  useEffect(() => {
    OnInitGames();
  }, [OnInitGames]);

  useEffect(() => {
    if (types) selectGameType(types[0].type);
  }, [types, selectGameType]);

  return (
    <div className={classes.NewGame}>
      <div className={classes.Content}>
        <h3 style={{ fontSize: "24px", paddingLeft: "8px" }}>
          <strong>NEW BET</strong> FOR{" "}
          {currentType ? currentType.type.toUpperCase() : "loading..."}
        </h3>
        <div className="betHeader">
          <p style={{ fontSize: "17px", paddingLeft: "8px" }}>Choose a game</p>
          <GameTypes
            types={types}
            clickHandler={selectGameType}
            activeArray={currentType ?[ currentType.type] : null}
          />
        </div>
        <div>
          <p style={{ fontSize: "17px", paddingLeft: "8px" }}>
            {" "}
            <strong>Fill your bet</strong>
          </p>
          <p style={{ fontSize: "17px", paddingLeft: "8px" }}>
            {" "}
            {currentType ? currentType.description : "loading..."}
          </p>
        </div>
        <NumberGrid
          max={currentType ? currentType["max-number"] : null}
          total={currentType ? currentType.range : null}
        />
        <CartButtons />
      </div>
      <ShoppingCart />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    types: state.games.types,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    OnInitGames: () => {
      dispatch(FetchGameType());
    },
    OnSelectGame: (selectedGame) => {
      dispatch(SelectGameType(selectedGame));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NewGame);
