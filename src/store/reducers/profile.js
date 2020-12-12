
export const Types = {
    PROFILE_GET: "PROFILE_GET",
    PROFILE_GET_SUCCESS: "PROFILE_GET_SUCCESS",
    PROFILE_GET_FAILED: "PROFILE_GET_FAILED",

    PROFILE_EDIT :"PROFILE_EDIT",
    PROFILE_EDIT_SUCCESS :"PROFILE_EDIT_SUCCESS",
    PROFILE_EDIT_FAILED :"PROFILE_EDIT_FAILED",
  };

const initialState = {
    localId:0,
    username: "",
    //password: "",
    email: "",
    error: null,
  };

  const reducer = (state=initialState,action)=>{
      switch (action.type) {
          case  Types.PROFILE_GET_SUCCESS:
              
            return {
                ...state,
                username: action.username,
                email: action.email,
                //password: action.password
              };
           case Types.PROFILE_EDIT_SUCCESS:
            return {
                ...state,
                username: action.name,
                email: action.email,
                //password: action.password,
              };
          default:
              return state
      }
  }


export const Creators = {
    GetProfileAsync: ()=>{
        return { type: Types.PROFILE_GET }
    },

    GetGamesSuccess: (username,email)=>{
        return {type: Types.PROFILE_GET_SUCCESS,username, email}
    },

    UpdateProfileAsync: (username, email, password)=>{
        return{type: Types.PROFILE_EDIT,username, email, password}
    },

    UpdateProfileSuccess: (username, email, password)=>{
        return{type: Types.PROFILE_EDIT_SUCCESS,username, email, password}
    }
}

  export default reducer;