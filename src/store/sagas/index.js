import { takeEvery,all } from "redux-saga/effects";

import {Types as AuthTypes} from "../reducers/auth";
import {Types as GameTypes} from '../reducers/games';
import {Types as ProfileTypes} from "../reducers/profile";
import {SignUp,SignIn,Logout,CheckAuth,ForgotPassword, UpdatePassword,} from "./auth";
import {InitGames,PostGames,GetGames} from "./games"
import {EditProfile, GetProfile} from "./profile"

export function* watchAuth(){
    yield all([
        takeEvery(AuthTypes.AUTH_SINGUP,SignUp),
        takeEvery(AuthTypes.AUTH_SINGIN,SignIn),
        takeEvery(AuthTypes.AUTH_LOGOUT,Logout),
        takeEvery(AuthTypes.AUTH_CHECK_STATE,CheckAuth),
        takeEvery(AuthTypes.AUTH_FORGOT_PASSWORD,ForgotPassword),
        takeEvery(AuthTypes.AUTH_UPDATE_PASSWORD,UpdatePassword)
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
        takeEvery(ProfileTypes.PROFILE_GET,GetProfile),
        takeEvery(ProfileTypes.PROFILE_EDIT,EditProfile)
    ])
}
