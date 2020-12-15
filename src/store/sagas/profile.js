import { put } from "redux-saga/effects";
import { Creators as ProfileCreators } from "../reducers/profile";
import {BASE_URL} from "../../services/api"
import axios from "axios";

export function* GetProfile() {
     yield put(ProfileCreators.ProfileStart())
  try {
    const token = localStorage.getItem("token");
    const response = yield axios.get(`${BASE_URL}profile`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    
    yield localStorage.setItem("localId", response.data.id);
    yield put(
      ProfileCreators.GetProfileSuccess(
        response.data.username,
        response.data.email
      )
    );
  } catch (error) {
    console.log("my Error: " ,error)
    if( error.response === undefined){
      yield put(ProfileCreators.GetProfileFailed(error.message))
    } else {
      yield put(ProfileCreators.GetProfileFaileds(error.response.message))
    }
   
  }
}

export function* EditProfile(action) {
  yield put(ProfileCreators.ProfileStart())
  try {
    const token = yield localStorage.getItem("token");
    const localId = yield localStorage.getItem("localId");

    const profilePayload = Object.keys(action)
      .filter((key) => action[key])
      .reduce((newObj, key) => {
        newObj[key] = action[key];
        return newObj;
      }, {});
    const response = yield axios.put(
      `${BASE_URL}profile/${localId}`,
      profilePayload,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    yield put(
      ProfileCreators.UpdateProfileSuccess(
        profilePayload.username,
        profilePayload.email
      )
    );
  } catch (error) {
    
    if( error.response === undefined){
      yield put(ProfileCreators.UpdateProfileFailed(error.message))
    } else {
      const errorMessages= Array.isArray(error.response.data) ? error.response.data.map((item) => item.message) : error.response.data.message
      yield put(ProfileCreators.UpdateProfileFailed(errorMessages))
    }
  }
}
