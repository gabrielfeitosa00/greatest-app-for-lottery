import React, { useCallback, useEffect, useState } from "react";
import { Creators as GameCreators } from "../../store/reducers/games";
import { useDispatch, useSelector } from "react-redux";
import classes from "./Games.module.css";
import { VscArrowRight } from "react-icons/vsc";
import StyledButton from "../../components/UI/StyledComponents/StyledButton";
import UnStyledLink from "../../components/Navegation/UnStyledLink/UnStyledLink";
import GameTypes from "../../components/Games/GameTypes";
import GameCards from "../../components/Games/GameCards";
const Games = (props) => {
  const types = useSelector((state) => state.games.types);

  const prevGames = useSelector((state) => state.games.prevGames);

  const dispatch = useDispatch();

  const OnInitGames = useCallback(
    () => dispatch(GameCreators.FetchGameType()),
    [dispatch]
  );
  const GetPrevGames = useCallback(() => dispatch(GameCreators.GetGames()), [
    dispatch,
  ]);
  const [filters, SetFilters] = useState([]);
  const [filteredGame, setFilteredGames] = useState(null);

  const handleFilter = (fil) => {
    let newFilters = [...filters];
    let filteredContent = [...filteredGame];
    if (newFilters.indexOf(fil) !== -1) {
      newFilters = filters.filter((filItem) => filItem !== fil);
    } else {
      newFilters = [...newFilters, fil];
    }
    newFilters.length === 0
      ? (filteredContent = prevGames)
      : (filteredContent = prevGames.filter((game) =>
          newFilters.includes(game.name)
        ));
    SetFilters(newFilters);
    setFilteredGames(filteredContent);
  };


  useEffect(() => {
    OnInitGames();
  }, [OnInitGames]);
  useEffect(() => {
    GetPrevGames();

  }, [GetPrevGames]);
  
  useEffect(()=>{
    setFilteredGames(prevGames)
    return ()=>{setFilteredGames(null)}
  },[prevGames])
  let games = <p>loading...</p>;
  if (filteredGame) {
    games = <GameCards cardObjs={filteredGame} />;
  }
  return (
    <div className={classes.Games}>
      <div className={classes.GameContent}>
        <div className={classes.GamesHeader}>
          <h3>RECENT GAMES</h3>
          <p>Filters</p>
          <GameTypes
            types={types}
            clickHandler={handleFilter}
            activeArray={filters}
          />
        </div>
        {games}
      </div>

      <StyledButton colored="#b5c401" size="24px">
        <UnStyledLink to="/new-bet">
          New Bet <VscArrowRight style={{ verticalAlign: "middle" }} />{" "}
        </UnStyledLink>
      </StyledButton>
    </div>
  );
};

export default Games;
