import { put } from "redux-saga/effects";
import {Creators as GameCreators} from "../reducers/games"
import {formatDate} from "../../utils/utility"
import axios from "axios";
import {BASE_URL} from "../../services/api";
export function* InitGames(action) {
  yield put(GameCreators.GameStart())
  try {
    const token = yield localStorage.getItem("token")
    const response  = yield axios.get(`${BASE_URL}gametypes`,{headers: { Authorization: `Bearer ${token}` }});
    yield put(GameCreators.SetGameType(response.data));
  } catch (error) {
    yield console.log(error)
    if(error.response === undefined){
      yield put(GameCreators.FailGame(error.message))
    } else {
      const errorMessages = Array.isArray(error.response.data)
      ? error.response.data.map((item) => item.message)
      : error.response.data.message;
    yield put(GameCreators.FailGame(errorMessages));
    }
    yield console.log(error.response.error);
  }
}

export function *PostGames(action){
  yield put(GameCreators.GameStart())
  const gamePayload = {
    games: action.newGames
    
  }
  try {
    const token = yield localStorage.getItem("token")
    const response = yield axios.post(`${BASE_URL}games`,gamePayload,{headers: { Authorization: `Bearer ${token}` }})
    
  } catch (error) {
    yield console.log(error)
    if(error.response === undefined){
      yield put(GameCreators.FailGame(error.message))
    } else {
      const errorMessages = Array.isArray(error.response.data)
      ? error.response.data.map((item) => item.message)
      : error.response.data.message;
    yield put(GameCreators.FailGame(errorMessages));
    }
    yield console.log(error.response.error);
  }
}

export function *GetGames(action){
  yield put(GameCreators.GameStart())
 
  try {
    let formatedResponse = []
    const token = yield localStorage.getItem("token")
    const response = yield axios.get(`${BASE_URL}games?limit=5&page=${action.page}`,{headers: { Authorization: `Bearer ${token}` }})
    formatedResponse = response.data.data.map(game => {

      let dateObj = new Date(game.created_at)

      return { numbers : game.numbers, color: game.gametype.color,price:game.gametype.price,name:game.gametype.type, date: formatDate(dateObj)}
    })

    yield put(GameCreators.AddGame(formatedResponse,response.data.lastPage))
  } catch (error) {
    if(error.response === undefined){
      yield put(GameCreators.FailGame(error.message))
    } else {
      const errorMessages = Array.isArray(error.response.data)
      ? error.response.data.map((item) => item.message)
      : error.response.data.message;
    yield put(GameCreators.FailGame(errorMessages));
    }
    
  }
}
