import { put } from "redux-saga/effects";
import {SetGameType} from "../actions/index"
import axios from "axios";

export function* InitGames (action){
try {
    const {data} = yield axios.get('./gameTypes.json')
    yield put(SetGameType(data.types))
} catch (error) {
    yield console.log(error)
}
}