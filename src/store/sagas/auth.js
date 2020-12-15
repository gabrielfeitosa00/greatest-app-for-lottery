import { put } from "redux-saga/effects";
import { Creators as AuthCreators } from "../reducers/auth";
import axios from "axios";
import {BASE_URL,REDIRECT_URL} from "../../services/api"
export function* SignUp(action) {
  yield put(AuthCreators.AuthStart());
  const authData = {
    username: action.username,
    email: action.email,
    password: action.password,
    password_confirmation: action.password_confirmation,
  };

  try {
    const response = yield axios.post( `${BASE_URL}signup`, authData);
    yield put(
      AuthCreators.SignUpSuccess(
        response.name,
        response.email,
        response.password
      )
    );
  } catch (error) {
    if (error.response === undefined) {
      yield put(AuthCreators.AuthFail(error.message));
    } else {
      const errorMessages = error.response.data.map((item) => item.message);
      yield put(AuthCreators.AuthFail(errorMessages));
    }
  }
}

export function* SignIn(action) {
  yield put(AuthCreators.AuthStart());
  const authData = {
    email: action.email,
    password: action.password,
  };

  try {
    const response = yield axios.post(`${BASE_URL}login`, authData);
    yield put(AuthCreators.SignInSuccess(response.data.token));
    yield localStorage.setItem("token", response.data.token);
  } catch (error) {
    if (error.response === undefined) {
      yield put(AuthCreators.AuthFail(error.message));
    } else {
      yield put(AuthCreators.AuthFail(error.response.data.message));
    }
  }
}

export function* Logout() {
  yield put(AuthCreators.AuthStart());
  yield localStorage.removeItem("token");
  yield localStorage.removeItem("localId");
  yield put(AuthCreators.LogoutSuccess());
}

export function* ForgotPassword(action) {
  yield put(AuthCreators.AuthStart());
  const authData = {
    email: action.email,
    redirect_url: REDIRECT_URL,
  };
  try {
    const response = yield axios.post(
      `${BASE_URL}passwords`,
      authData
    );
    yield put(AuthCreators.ForgotPasswordSuccess());
  } catch (error) {
    if (error.response === undefined) {
      yield put(AuthCreators.AuthFail(error.message));
    } else {
      yield put(AuthCreators.AuthFail(error.response.data.message));
    }
  }
}

export function* UpdatePassword(action) {
  yield put(AuthCreators.AuthStart());
  const authData = {
    password: action.password,
    password_confirmation: action.passwordConfirm,
    token: action.token,
  };
  try {
    const response = yield axios.put(
      `${BASE_URL}passwords`,
      authData
    );
    yield put(AuthCreators.ForgotPasswordSuccess());
  } catch (error) {
    if (error.response === undefined) {
      yield put(AuthCreators.AuthFail(error.message));
    } else {
      const errorMessages = Array.isArray(error.response.data)
        ? error.response.data.map((item) => item.message)
        : error.response.data.message;
      yield put(AuthCreators.AuthFail(errorMessages));
    }
  }
}

export function* CheckAuth() {
  const currentToken = yield localStorage.getItem("token");
  if (!currentToken) {
    yield put(AuthCreators.LogoutSuccess());
  } else {
    yield put(AuthCreators.SignInSuccess(currentToken));
  }
}
