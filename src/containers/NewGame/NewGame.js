import React, { useState, useEffect, useCallback } from "react";

import { Creators as GameCreators } from "../../store/reducers/games";
import {useDispatch,useSelector} from "react-redux";
import classes from "./NewGame.module.css";
import ShoppingCart from "../../components/NewGame/ShoppingCart/ShoppingCart";
import GameTypes from "../../components/Games/GameTypes";
import CartButtons from "../../components/NewGame/CartButtons/CartButtons";
import NumberGrid from "../../components/NewGame/NumberGrid/NumberGrid";
import { genereteNumber,formatDate } from "../../utils/utility";
const NewGame = (props) => {
  const [currentType, setCurrentType] = useState(null);
  const [currentBet, setCurrentBet] = useState([]);
  const [betObject, setBetObject] = useState(null);

  const  types = useSelector(state=>state.games.types)
  const dispatch = useDispatch();
  const OnInitGames = useCallback (() => dispatch(GameCreators.FetchGameType()),[dispatch])

  const selectGameType = useCallback(
    (currType) => {
      const selectedType = types.filter(
        (typeItem) => typeItem.type === currType
      );
      setCurrentType(selectedType[0]);
      console.log("selected Type " + selectedType[0]);
      console.log("my Current Game" + currType);
    },
    [types]
  );
  const numberButtonHandler = (num) => {
    let newBet = [...currentBet];
    if (
      currentBet.indexOf(num) !== -1 ||
      currentBet.length >= currentType["max-number"]
    ) {
      newBet = newBet.filter((betItem) => betItem !== num);
    } else {
      newBet = newBet.concat(num);
    }

    setCurrentBet(newBet);
  };
  const clearBetHandler = () => {
    const clearArr = [];
    setCurrentBet(clearArr);
  };

  const autocompleteBetHandler = () => {
    let remeaningSlots = currentType["max-number"] - currentBet.length;
    const generatedNumbers = genereteNumber(
      remeaningSlots,
      currentBet,
      currentType.range
    );

    setCurrentBet(currentBet.concat(generatedNumbers));
  };

  const saveBetHandler = () => {
    const purchaseDate = new Date()
    const formatedDate = formatDate(purchaseDate)
    const newBetObj = {
      id: new Date().getTime(),
      numbers: currentBet.join(','),
      game_type_id: currentType.id,
      color: currentType.color,
      name: currentType.type,
      price: currentType.price,
      date:formatedDate,
    };
    console.log(newBetObj)
    setBetObject(newBetObj);
    clearBetHandler();
  };

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
            activeArray={currentType ? [currentType.type] : null}
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
          numberClickHandler={numberButtonHandler}
          bet={currentBet}
          color={currentType ? currentType.color : null}
          total={currentType ? currentType.range : null}
        />
        <CartButtons
          shouldBeDisabled={currentBet.length === 0}
          shouldPurchase={
            currentType ? currentBet.length < currentType["max-number"] : true
          }
          onClear={clearBetHandler}
          onComplete={autocompleteBetHandler}
          onSave={saveBetHandler}
        />
      </div>
      <ShoppingCart newBet={betObject} />
    </div>
  );
};


export default NewGame;
