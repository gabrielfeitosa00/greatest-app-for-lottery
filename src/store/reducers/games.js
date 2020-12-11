export const Types = {
  GAME_ADD: "GAME_ADD",
  GAME_FETCH: "GAME_FETCH",
  GAME_SET_TYPE: "GAME_SET_TYPE",
  GAME_POST : "GAME_POST",
  GAMES_GET : "GAMES_GET"
};
const initialState = {
  types: null,
  prevGames: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GAME_SET_TYPE:
      return { ...state, types: action.gameTypes };
    case Types.GAME_ADD:
      const currentGames = action.newGames
      return { ...state, prevGames: currentGames };

    default:
      return state;
  }
};

export const Creators = {
  FetchGameType: () => {
    return {
      type: Types.GAME_FETCH,
    };
  },

  SetGameType: (gameTypes) => {
    return {
      type: Types.GAME_SET_TYPE,
      gameTypes,
    };
  },
  PostGame: (newGames) =>{
    return {type : Types.GAME_POST,newGames}
  },
  GetGames : ()=>{
    return {type: Types.GAMES_GET}
  },
  AddGame: (newGames) => {
    return { type: Types.GAME_ADD, newGames };
  },
};

export default reducer;
