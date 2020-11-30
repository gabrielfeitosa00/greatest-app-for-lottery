import { put } from "redux-saga/effects";
import axios from "axios";

export function* InitGames (action){
try {
    const {data} = yield axios.get('./gameTypes.json')
    yield console.log(data)
} catch (error) {
    yield console.log(error)
}
}