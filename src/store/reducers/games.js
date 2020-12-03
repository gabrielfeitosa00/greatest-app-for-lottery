
import * as actionTypes from '../actions/actionTypes';

const initialState = {
  types: null,
  prevGames: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GAME_SET_TYPE:
      return {...state, types: action.gameTypes}
    case actionTypes.GAME_ADD:
      return {...state,prevGames: state.prevGames.concat(action.newGames)}

        
    default:
      return state;
  }
};


export default reducer;