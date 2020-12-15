import "./App.css";
import React, { useCallback, useEffect } from "react";
import AuthLayout from "./hoc/Layout/AuthLayout/AuthLayout";

import GameLayout from "./hoc/Layout/GameLayout/GameLayout";

import Footer from "./components/UI/Footer/Footer";

import {authRoutes,nonAuthRoutes} from "./navegation/Routes";
import { Creators as AuthCreators } from "./store/reducers/auth";

import { useSelector,useDispatch } from "react-redux";



function App(props) {
  const isAuth = useSelector(state=>state.auth.token !== null)
  const dispatch = useDispatch();
  const onTryAutoSignIn = useCallback(() => {dispatch(AuthCreators.CheckAuthState())},[dispatch])
  useEffect(() => {
    onTryAutoSignIn();
  }, [onTryAutoSignIn]);
  let appContent = (
    <AuthLayout>
      {nonAuthRoutes}
    </AuthLayout>
  );

  if (isAuth) {
    appContent = (
      <GameLayout>
        {authRoutes}
      </GameLayout>
    );
  }
  return (
    <div className="App">
      {appContent}

      <Footer />
    </div>
  );
}



export default App;
