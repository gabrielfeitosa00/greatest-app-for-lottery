import * as actionTypes from '../actions/actionTypes';

const initialState = {
  games: [],
  types: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GAME_SET_TYPE:
      return {...state, types: action.gameTypes}
    default:
      return state;
  }
};


export default reducer;