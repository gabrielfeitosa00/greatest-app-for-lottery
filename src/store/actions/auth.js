import {
  AUTH_FAILED,
  AUTH_SINGIN,
  AUTH_SINGIN_SUCCESS,
  AUTH_SINGUP,
  AUTH_SINGUP_START,
  AUTH_LOGOUT,
  AUTH_LOGOUT_SUCCESS,
  AUTH_CHECK_STATE
} from "./actionTypes";

export const SignUpStart = (name, email, password) => {
  return {
    type: AUTH_SINGUP_START,
    name,
    email,
    password,
  };
};

export const SignUpAsync = (name, email, password) => {
  return { type: AUTH_SINGUP, name, email, password };
};

export const SignInSuccess = (email,password) => {
  return {
    type: AUTH_SINGIN_SUCCESS,
    email,
    password
  };
};

export const SignInAsync = (email, password) => {
  return {
    type: AUTH_SINGIN,
    email,
    password,
  };
};

export const LogoutSuccess = () => {
  return { type: AUTH_LOGOUT_SUCCESS };
};

export const LogoutAsync = () => {
  return { type: AUTH_LOGOUT };
};

export const CheckAuthState = () =>{
  return { type: AUTH_CHECK_STATE };
}
