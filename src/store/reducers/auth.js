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
  userName: "",
  password: "",
  email: "",
  isAuth: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.AUTH_SINGUP_START:
      return {
        ...state,
        userName: action.name,
        email: action.email,
        password: action.password,
      };
    case Types.AUTH_SINGIN_SUCCESS:
      return {
        ...state,
        email: action.email,
        password: action.password,
        isAuth: true,
      };
    case Types.AUTH_LOGOUT_SUCCESS:
      return { ...state, userName: "", password: "", email: "", isAuth: false };
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
  
   SignUpAsync : (name, email, password) => {
    return { type: Types.AUTH_SINGUP, name, email, password };
  },
  
   SignInSuccess : (email,password) => {
    return {
      type: Types.AUTH_SINGIN_SUCCESS,
      email,
      password
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
