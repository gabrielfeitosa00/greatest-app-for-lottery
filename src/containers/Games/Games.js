import React, { useEffect,useState } from "react";
import { FetchGameType } from "../../store/actions/index";
import { connect } from "react-redux";
import classes from "./Games.module.css";
import { VscArrowRight } from "react-icons/vsc";
import StyledButton from "../../components/UI/StyledComponents/StyledButton";
import UnStyledLink from "../../components/Navegation/UnStyledLink/UnStyledLink";
import GameTypes from "../../components/Games/GameTypes";
import GameCards from "../../components/Games/GameCards";
const Games = (props) => {
  const {OnInitGames, types } = props;
  const [filters,SetFilters] = useState([])
  useEffect(() => {
    OnInitGames();
    console.log("my prev Games ",props.prevGames)
  }, [OnInitGames]);
  const handleFilter = (fil)=>{
      const newFilters = [...filters,fil]
      SetFilters(newFilters)
      console.log('myFilters: ' + filters)
  }
  return (
    <div className={classes.Games}>
      <div className={classes.GameContent}>
      <div className={classes.GamesHeader}>
        <h3>RECENT GAMES</h3>
        <p>Filters</p>
        <GameTypes types={types} clickHandler={handleFilter} activeArray={filters}/>
      </div>
      <GameCards cardObjs={props.prevGames}/>
      </div>

      <StyledButton colored size="24px">
        <UnStyledLink to="/new-bet">
          New Bet <VscArrowRight style={{ verticalAlign: "middle" }} />{" "}
        </UnStyledLink>
      </StyledButton>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    types: state.games.types,
    prevGames : state.games.prevGames
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    OnInitGames: () => {
      dispatch(FetchGameType());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Games);
