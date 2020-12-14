import { put } from "redux-saga/effects";
import {Creators as GameCreators} from "../reducers/games"
import {formatDate} from "../../utils/utility"
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

export function *PostGames(action){
  const gamePayload = {
    games: action.newGames
    
  }
  try {
    const token = yield localStorage.getItem("token")
    const response = yield axios.post("http://127.0.0.1:3333/games",gamePayload,{headers: { Authorization: `Bearer ${token}` }})
    // yield put(GameCreators.AddGame(response.data))
  } catch (error) {
    yield console.log(error.response.error);
  }
}

export function *GetGames(action){
 
  try {
    let formatedResponse = []
    const token = yield localStorage.getItem("token")
    const response = yield axios.get(`http://127.0.0.1:3333/games?limit=5&page=${action.page}`,{headers: { Authorization: `Bearer ${token}` }})
    formatedResponse = response.data.data.map(game => {

      let dateObj = new Date(game.created_at)

      return { numbers : game.numbers, color: game.gametype.color,price:game.gametype.price,name:game.gametype.type, date: formatDate(dateObj)}
    })
    console.log(response)
    console.log(formatedResponse)
    yield put(GameCreators.AddGame(formatedResponse,response.data.lastPage))
  } catch (error) {
    yield console.log(error.response.error);
  }
}
