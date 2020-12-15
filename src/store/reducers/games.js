export const Types = {
  GAME_START: "GAME_START",
  GAME_ADD: "GAME_ADD",
  GAME_FETCH: "GAME_FETCH",
  GAME_SET_TYPE: "GAME_SET_TYPE",
  GAME_POST: "GAME_POST",
  GAMES_GET: "GAMES_GET",
  GAME_FAIL: "GAME_FAIL"
};
const initialState = {
  types: null,
  prevGames: [],
  totalPages: 0,
  error: null,
  loading: false,
  success: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GAME_START:
      return { ...state, error: null, loading: true, success: false };
    case Types.GAME_SET_TYPE:
      return {
        ...state,
        types: action.gameTypes,
        error: null,
        loading: false,
        success: true,
      };
    case Types.GAME_ADD:
      const currentGames = action.newGames;
      return {
        ...state,
        prevGames: currentGames,
        totalPages: action.total,
        error: null,
        loading: false,
        success: true,
      };
    case Types.GAME_FAIL:
      return{...state,error:action.error,        loading: false,
        success: false}
    default:
      return state;
  }
};

export const Creators = {
  GameStart: () => {
    return {
      type: Types.GAME_START,
    };
  },
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
  PostGame: (newGames) => {
    return { type: Types.GAME_POST, newGames };
  },
  GetGames: (page) => {
    return { type: Types.GAMES_GET, page };
  },
  AddGame: (newGames, total) => {
    return { type: Types.GAME_ADD, newGames, total };
  },
  FailGame: (error)=>{
    return { type: Types.GAME_FAIL,error}
  }
};

export default reducer;
