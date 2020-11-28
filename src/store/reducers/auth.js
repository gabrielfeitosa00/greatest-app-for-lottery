import * as actionTypes from "../actions/actionTypes";

const initialState = {
  userName: "",
  password: "",
  email: "",
  isAuth: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_SINGUP_START:
      return {
        ...state,
        userName: action.name,
        email: action.email,
        password: action.password,
      };
    case actionTypes.AUTH_SINGIN_SUCCESS:
      console.log(state);
      return { ...state, isAuth: true };
    case actionTypes.AUTH_LOGOUT_SUCCESS:
      console.log(state)
      return { ...state, userName: "", password: "", email: "", isAuth: false };
    default:
      return state;
  }
};

export default reducer;
