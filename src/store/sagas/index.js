import { takeEvery,takeLatest,all } from "redux-saga/effects";
import * as actionTypes from "../actions/actionTypes";
import {SignUp} from "./auth";

export function* watchAuth(){
    yield all([
        takeEvery(actionTypes.AUTH_SINGUP,SignUp)
    ])
}
