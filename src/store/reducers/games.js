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
  totalPages: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GAME_SET_TYPE:
      return { ...state, types: action.gameTypes };
    case Types.GAME_ADD:
      const currentGames = action.newGames
      return { ...state, prevGames: currentGames, totalPages:action.total };

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
  GetGames : (page)=>{
    return {type: Types.GAMES_GET,page}
  },
  AddGame: (newGames,total) => {
    return { type: Types.GAME_ADD, newGames, total };
  },
};

export default reducer;
