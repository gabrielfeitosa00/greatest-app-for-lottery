import React from "react";
import classes from "./Toolbar.module.css";
import NavegationItems from "../NavegationItems/NavegationItems";
const Toolbar = (props) => {
  return (
    <header className={classes.Toolbar}>
      <div className={classes.Logo}>
        TGL
        <div className={classes.LogoSpan} />
      </div>
      <div>
        {" "}
        <NavegationItems />
      </div>
    </header>
  );
};

export default Toolbar;
