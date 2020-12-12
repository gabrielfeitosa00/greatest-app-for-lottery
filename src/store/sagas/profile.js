import { put } from "redux-saga/effects";
import { Creators as ProfileCreators } from "../reducers/profile";
import axios from "axios";

export function* GetProfile() {
  try {
    const token = yield localStorage.getItem("token");
    const response = yield axios.get("http://127.0.0.1:3333/profile", {
      headers: { Authorization: `Bearer ${token}` },
    });
    yield console.log(response.data);
    yield localStorage.setItem("localId", response.data.id);
    yield put(
      ProfileCreators.GetGamesSuccess(
        response.data.username,
        response.data.email
      )
    );
  } catch (error) {
    yield console.log(error.response.error);
  }
}

export function* EditProfile(action) {
  try {
    const token = yield localStorage.getItem("token");
    const localId = yield localStorage.getItem("localId");

    const profilePayload = Object.keys(action)
      .filter((key) => action[key])
      .reduce((newObj, key) => {
        newObj[key] = action[key];
        return newObj;
      }, {});

    yield console.log("my Profile", profilePayload);
    const response = yield axios.put(
      `http://127.0.0.1:3333/profile/${localId}`,
      profilePayload,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    yield put(
      ProfileCreators.GetGamesSuccess(
        profilePayload.username,
        profilePayload.email
      )
    );
    yield console.log("My response: ",response.data);
  } catch (error) {
    yield console.log(error.response.error);
  }
}
