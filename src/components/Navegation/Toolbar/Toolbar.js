import React from "react";
import classes from "./Toolbar.module.css";
const Toolbar = (props) => {
  return (
    <header className={classes.Toolbar}>
      <div className={classes.Logo}>
        TGL
        <div className={classes.LogoSpan}/>
      </div>
      <div>{/* NavItems here */}</div>
    </header>
  );
};

export default Toolbar;
