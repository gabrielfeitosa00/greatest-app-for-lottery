import React from "react";
import classes from "./NumberGrid.module.css";
import NumberButton from "./NumberButton/NumberButton";
const NumberGrid = ({ max, total,numberClickHandler,bet,color }) => {
  console.log(max, total);
  let gridContent = "loading...";
  if (total) {
    gridContent = new Array(total).fill(undefined).map((val, index) => (
      <NumberButton
        key={index + 1}
        onClick={() =>numberClickHandler(index + 1)
        }
        active={bet.includes(index + 1)}
        activeColor={color}
      >
        {index + 1}
      </NumberButton>
    ));
  }
  return <div className={classes.NumberGrid}>{gridContent}</div>;
};

export default NumberGrid;
