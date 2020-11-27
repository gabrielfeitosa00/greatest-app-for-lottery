import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { Provider } from "react-redux";
import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import authReducer from "./store/reducers/auth";
import { BrowserRouter } from "react-router-dom";
import { watchAuth } from "./store/sagas/index";
import createSagaMiddleware from "redux-saga";
const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

const rootStore = combineReducers({
  auth: authReducer,
});
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootStore,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(watchAuth);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
