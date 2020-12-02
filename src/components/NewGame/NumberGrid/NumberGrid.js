import React from "react";
import classes from "./NumberGrid.module.css";
import NumberButton from "./NumberButton/NumberButton";
const NumberGrid = ({ max, total }) => {
  console.log(max, total);
  let gridContent = "loading...";
  if (total) {
    gridContent = new Array(total)
      .fill(undefined)
      .map((val, index) => (
        <NumberButton key={index + 1}>{index + 1}</NumberButton>
      ));
  }
  return <div className={classes.NumberGrid}>{gridContent}</div>;
};

export default NumberGrid;
