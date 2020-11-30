import React, { useEffect } from "react";
import { FetchGameType } from "../../store/actions/index";
import { connect } from "react-redux";
import classes from "./Games.module.css";
import { VscArrowRight } from "react-icons/vsc";
import StyledButton from "../../components/UI/StyledComponents/StyledButton";
import UnStyledLink from "../../components/Navegation/UnStyledLink/UnStyledLink";
import GameTypes from "../../components/Games/GameTypes";

const Games = (props) => {
  const { OnInitIngredients, types } = props;
  useEffect(() => {
    OnInitIngredients();
  }, [OnInitIngredients]);
  console.log(types);
  return (
    <div className={classes.Games}>
      <div className={classes.GamesHeader}>
        <h3>RECENT GAMES</h3>
        <p>Filters</p>
        <GameTypes types={types}/>
      </div>

      <StyledButton colored size="24px">
        <UnStyledLink to="/newbet">
          New Bet <VscArrowRight style={{ verticalAlign: "middle" }} />{" "}
        </UnStyledLink>
      </StyledButton>
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
    OnInitIngredients: () => {
      dispatch(FetchGameType());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Games);
