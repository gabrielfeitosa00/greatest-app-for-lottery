import { put } from "redux-saga/effects";
import { SetGameType} from "../actions/index";
import axios from "axios";

export function* InitGames(action) {
  try {
    const { data } = yield axios.get("./gameTypes.json");
    const types = yield data.types;
    yield console.log(types);
    yield put(SetGameType(types));
  } catch (error) {
    yield console.log(error);
  }
}
