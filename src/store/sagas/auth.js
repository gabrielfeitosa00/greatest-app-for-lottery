import { put, delay, call } from "redux-saga/effects";
import {SignUpStart} from "../actions/index";

export function* SignUp(action) {
  yield localStorage.setItem("name", action.name);
  yield localStorage.setItem("email", action.email);
  yield localStorage.setItem("password", action.password);
  yield put(SignUpStart(action.name,action.email,action.password));
}
