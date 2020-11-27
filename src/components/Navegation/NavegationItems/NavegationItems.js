import React from "react";
import classes from "./NavegationItems.module.css";
import NavegationItem from "./NavegationItem/NavegationItem";
import { VscArrowRight } from "react-icons/vsc";

const NavegationItems = (props) => {
  return (
    <ul className={classes.NavegationItems}>
      <NavegationItem destination="/" fontSize="20px">
        Home
      </NavegationItem>
      <NavegationItem destination="/" fontSize="20px">
        Account
      </NavegationItem>
      <NavegationItem destination="/" fontSize="20px">
        Log Out <VscArrowRight style={{ verticalAlign: "middle" }} />{" "}
      </NavegationItem>
    </ul>
  );
};

export default NavegationItems;
