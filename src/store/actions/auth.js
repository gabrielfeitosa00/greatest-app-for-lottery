import {
  AUTH_FAILED,
  AUTH_SINGIN,
  AUTH_SINGUP,
  AUTH_SINGUP_START,
  AUTH_LOGOUT,
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
  return { type: AUTH_SINGUP,name,
    email,
    password, };
};

export const SignIn = (email, password) => {
  return {
    type: AUTH_SINGIN,
    email,
    password,
  };
};
