import * as actionTypes from '../actions/actionTypes';

const initialState = {
  types: null,
  currentType:null,
  prevGames: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GAME_SET_TYPE:
      return {...state, types: action.gameTypes}
    case actionTypes.GAME_SELECT_TYPE:
      const selectedGame = state.types.filter(game => game.type === action.gameType);
      console.log('MySelectedGame:' + selectedGame)
        return {...state, currentType: selectedGame}
    default:
      return state;
  }
};


export default reducer;