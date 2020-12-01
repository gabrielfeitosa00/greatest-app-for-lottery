import React,{useEffect} from 'react';
import {connect} from 'react-redux';
import { FetchGameType } from '../../store/actions/index';
import classes from './NewGame.module.css';
import ShoppingCart from '../../components/NewGame/ShoppingCart/ShoppingCart';
import GameTypes from '../../components/Games/GameTypes';

const NewGame = ({OnInitGames,types})=>{
    useEffect(() => {
        OnInitGames();
      }, [OnInitGames]);
    
    return(<div className={classes.NewGame}>
        <div className={classes.Content}>
        <h3><strong>New Bet</strong> for (Provider here)</h3>
        <div className='betHeader'>
            Choose a game
            <GameTypes types={types}/>
        </div>
        </div>
        <ShoppingCart/>
    </div>)
}

const mapStateToProps = (state) => {
    return {
      types: state.games.types,
    };
  };
  const mapDispatchToProps = (dispatch) => {
    return {
      OnInitGames: () => {
        dispatch(FetchGameType());
      },
    };
  };
export default  connect(mapStateToProps,mapDispatchToProps)(NewGame)