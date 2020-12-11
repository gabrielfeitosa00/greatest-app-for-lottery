import React from "react";
import classes from "./NavegationItems.module.css";
import NavegationItem from "./NavegationItem/NavegationItem";
import { VscArrowRight } from "react-icons/vsc";
import { withRouter } from "react-router-dom";

const NavegationItems = (props) => {
  console.log(props.location.pathname);
  return (
    <ul className={classes.NavegationItems}>
      {props.location.pathname !== "/" ? (
        <NavegationItem destination="/" fontSize="20px">
          Home
        </NavegationItem>
      ) : null}
      <NavegationItem destination="/profile" fontSize="20px">
        Account
      </NavegationItem>
      <NavegationItem destination="/logout" fontSize="20px">
        Log Out <VscArrowRight className={classes.LogoutArrow} />{" "}
      </NavegationItem>
    </ul>
  );
};

export default withRouter(NavegationItems);
