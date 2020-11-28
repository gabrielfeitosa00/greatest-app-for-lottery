import { takeEvery,takeLatest,all } from "redux-saga/effects";

import * as actionTypes from "../actions/actionTypes";
import {SignUp,SignIn,Logout} from "./auth";

export function* watchAuth(){
    yield all([
        takeEvery(actionTypes.AUTH_SINGUP,SignUp),
        takeEvery(actionTypes.AUTH_SINGIN,SignIn),
        takeEvery(actionTypes.AUTH_LOGOUT,Logout),
    ])
}
