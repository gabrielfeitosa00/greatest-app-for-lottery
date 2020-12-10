export const Types = {
  AUTH_LOGOUT: "AUTH_LOGOUT",
  AUTH_LOGOUT_SUCCESS: "AUTH_LOGOUT_SUCCESS",
  AUTH_SINGIN: "AUTH_SINGIN",
  AUTH_SINGUP_START: "AUTH_SINGUP_START",
  AUTH_SINGUP: "AUTH_SINGUP",
  AUTH_SINGIN_SUCCESS: " AUTH_SINGIN_SUCCESS",
  AUTH_FAILED: "AUTH_FAILED",
  AUTH_CHECK_STATE: "AUTH_CHECK_STATE",
};

const initialState = {
  username: "",
  password: "",
  email: "",
  token: null,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.AUTH_SINGUP_START:
      return {
        ...state,
        username: action.name,
        email: action.email,
        password: action.password,
      };
    case Types.AUTH_SINGIN_SUCCESS:
      return {
        ...state,
        token: action.token,
      };
    case Types.AUTH_LOGOUT_SUCCESS:
      return { ...state, username: "", password: "", email: "", token: null };
    default:
      return state;
  }
};


export const Creators = {
   SignUpStart : (name, email, password) => {
    return {
      type: Types.AUTH_SINGUP_START,
      name,
      email,
      password,
    };
  },
  
   SignUpAsync : (username, email, password,password_confirmation) => {
    return { type: Types.AUTH_SINGUP, username, email, password,password_confirmation };
  },
  
   SignInSuccess : (token) => {
    return {
      type: Types.AUTH_SINGIN_SUCCESS,
      token
    };
  },
  
   SignInAsync : (email, password) => {
    return {
      type: Types.AUTH_SINGIN,
      email,
      password,
    };
  },
  
   LogoutSuccess : () => {
    return { type: Types.AUTH_LOGOUT_SUCCESS };
  },
  
   LogoutAsync : () => {
    return { type: Types.AUTH_LOGOUT };
  },
  
   CheckAuthState : () =>{
    return { type: Types.AUTH_CHECK_STATE };
  },
}
export default reducer;
