import { takeEvery,takeLatest,all } from "redux-saga/effects";

import * as actionTypes from "../actions/actionTypes";
import {SignUp,SignIn,Logout,CheckAuth} from "./auth";
import {InitGames} from "./games"

export function* watchAuth(){
    yield all([
        takeEvery(actionTypes.AUTH_SINGUP,SignUp),
        takeEvery(actionTypes.AUTH_SINGIN,SignIn),
        takeEvery(actionTypes.AUTH_LOGOUT,Logout),
        takeEvery(actionTypes.AUTH_CHECK_STATE,CheckAuth),
    ])

    yield all([
        takeEvery(actionTypes.GAME_FETCH,InitGames),
    ])
}
