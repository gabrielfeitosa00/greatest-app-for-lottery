import { put } from "redux-saga/effects";
import {Creators as GameCreators} from "../reducers/games"
import axios from "axios";

export function* InitGames(action) {
  try {
     const token = yield localStorage.getItem("token")
    const response  = yield axios.get("http://127.0.0.1:3333/gametypes",{headers: { Authorization: `Bearer ${token}` }});
    yield put(GameCreators.SetGameType(response.data));
  } catch (error) {
    yield console.log(error.response.error);
  }
}
