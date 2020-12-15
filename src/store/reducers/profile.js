export const Types = {
  PROFILE_START: "PROFILE_START",

  PROFILE_GET: "PROFILE_GET",
  PROFILE_GET_SUCCESS: "PROFILE_GET_SUCCESS",
  PROFILE_GET_FAILED: "PROFILE_GET_FAILED",

  PROFILE_EDIT: "PROFILE_EDIT",
  PROFILE_EDIT_SUCCESS: "PROFILE_EDIT_SUCCESS",
  PROFILE_EDIT_FAILED: "PROFILE_EDIT_FAILED",
};

const initialState = {
  localId: 0,
  username: "",
  email: "",
  error: null,
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.PROFILE_START:
      return { ...state, error: null, loading: true,success:false };
    case Types.PROFILE_GET_SUCCESS:
      return {
        ...state,
        username: action.username,
        email: action.email,
        loading: false,
        error: null,
        
      };
    case Types.PROFILE_GET_FAILED:
      return {
        ...state,
        username: "NOT FOUND",
        email: "NOT FOUND",
        error: action.error,
        loading: false,
        success:false,
      };
    case Types.PROFILE_EDIT_SUCCESS:
      return {
        ...state,
        username: action.name,
        email: action.email,
        loading: false,
        error: null,
        success:true
      };
    case Types.PROFILE_EDIT_FAILED:
      return {
        ...state,
        error: action.error,
        loading: false,
        success:false,
      };
    default:
      return state;
  }
};

export const Creators = {
  ProfileStart: () => {
    return { type: Types.PROFILE_START };
  },
  GetProfileAsync: () => {
    return { type: Types.PROFILE_GET };
  },

  GetProfileSuccess: (username, email) => {
    return { type: Types.PROFILE_GET_SUCCESS, username, email };
  },

  GetProfileFailed: (error) => {
    return { type: Types.PROFILE_GET_FAILED, error };
  },

  UpdateProfileAsync: (username, email, password) => {
    return { type: Types.PROFILE_EDIT, username, email, password };
  },

  UpdateProfileSuccess: (username, email, password) => {
    return { type: Types.PROFILE_EDIT_SUCCESS, username, email, password };
  },

  UpdateProfileFailed: (error) => {
    return { type: Types.PROFILE_EDIT_FAILED, error };
  },
};

export default reducer;
