import { put } from "redux-saga/effects";
import { Creators as AuthCreators } from "../reducers/auth";
import axios from 'axios'
export function* SignUp(action) {
  const authData = {
    username: action.username,
    email:action.email,
    password: action.password,
    password_confirmation: action.password_confirmation
  }
  

  try {
    
    const response = yield axios.post('http://127.0.0.1:3333/signup',authData)
    yield put(AuthCreators.SignUpStart(response.name, response.email, response.password));
  } catch (error) {
 
    yield console.log(error.response.error)
  }
  // yield localStorage.setItem("name", action.name);
  // yield localStorage.setItem("email", action.email);
  // yield localStorage.setItem("password", action.password);
  
}

export function* SignIn(action) {
  const authData = {
    email: action.email,
    password: action.password,
  }
  
  try {
    const response = yield axios.post('http://127.0.0.1:3333/login',authData)
    yield put(AuthCreators.SignInSuccess(response.data.token));
    yield localStorage.setItem("token", response.data.token);
  } catch (error) {
    yield console.log(error.response.error)
  }
  // const currentEmail = yield localStorage.getItem("email");
  // const currentPassword = yield localStorage.getItem("password");

  // if (
  //   !currentEmail ||
  //   !currentPassword ||
  //   currentEmail !== action.email ||
  //   currentPassword !== action.password
  // ) {
  //   yield console.log("fazer tratamento de erro direito dps");
  // } else {
  //   yield put(AuthCreators.SignInSuccess(action.email,action.password));
  // }
}

export function* Logout(){
  yield localStorage.removeItem("token");
  yield localStorage.removeItem("localId");
  yield put(AuthCreators.LogoutSuccess());
}

export function* ForgotPassword(action){
  const authData = {
    email: action.email,
    redirect_url: `http://localhost:3000/greatest-app-for-lottery/new_password`,
  }
  try {
    const response = yield axios.post('http://127.0.0.1:3333/passwords',authData)
  } catch (error) {
    yield console.log(error.response.error)
  }
}

export function* CheckAuth(){
  const currentToken = yield localStorage.getItem("token")
  if(!currentToken){
    yield put(AuthCreators.LogoutSuccess());
  } else {
    
    yield put(AuthCreators.SignInSuccess(currentToken))
  }
}
