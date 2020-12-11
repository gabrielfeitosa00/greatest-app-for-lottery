import { takeEvery,all } from "redux-saga/effects";

import {Types as AuthTypes} from "../reducers/auth";
import {Types as GameTypes} from '../reducers/games'
import {SignUp,SignIn,Logout,CheckAuth} from "./auth";
import {InitGames,PostGames,GetGames} from "./games"

export function* watchAuth(){
    yield all([
        takeEvery(AuthTypes.AUTH_SINGUP,SignUp),
        takeEvery(AuthTypes.AUTH_SINGIN,SignIn),
        takeEvery(AuthTypes.AUTH_LOGOUT,Logout),
        takeEvery(AuthTypes.AUTH_CHECK_STATE,CheckAuth),
    ])

   
}

export function* watchGame(){
    yield all([
        takeEvery(GameTypes.GAME_FETCH,InitGames),
        takeEvery(GameTypes.GAME_POST,PostGames),
        takeEvery(GameTypes.GAMES_GET,GetGames)
    ])
}

export function* watchProfile(){
    yield all([

    ])
}
