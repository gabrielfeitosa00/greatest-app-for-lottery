import { put } from "redux-saga/effects";
import {Creators as GameCreators} from "../reducers/games"
import axios from "axios";

export function* InitGames(action) {
  try {
    const { data } = yield axios.get("./gameTypes.json");
    const types = yield data.types;
    yield put(GameCreators.SetGameType(types));
  } catch (error) {
    yield console.log(error);
  }
}
