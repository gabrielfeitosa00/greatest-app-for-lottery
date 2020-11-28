import { put, delay, call } from "redux-saga/effects";
import { SignUpStart, SignInSuccess,LogoutSuccess } from "../actions/index";

export function* SignUp(action) {
  yield localStorage.setItem("name", action.name);
  yield localStorage.setItem("email", action.email);
  yield localStorage.setItem("password", action.password);
  yield put(SignUpStart(action.name, action.email, action.password));
}

export function* SignIn(action) {

  const currentEmail = yield localStorage.getItem("email");
  const currentPassword = yield localStorage.getItem("password");

  if (
    !currentEmail ||
    !currentPassword ||
    currentEmail !== action.email ||
    currentPassword !== action.password
  ) {
    yield console.log("fazer tratamento de erro direito dps");
  } else {
    yield put(SignInSuccess());
  }
}

export function* Logout(){
  yield localStorage.removeItem("name");
  yield localStorage.removeItem("email");
  yield localStorage.removeItem("password");
  yield put(LogoutSuccess());
}
