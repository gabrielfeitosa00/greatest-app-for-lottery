import "./App.css";
import React, { useCallback, useEffect } from "react";
import AuthLayout from "./hoc/Layout/AuthLayout/AuthLayout";
import SignIn from "./containers/Auth/Forms/SignIn/SignIn";
import SignUp from "./containers/Auth/Forms/SignUp/SignUp";
import ResetPassword from "./containers/Auth/Forms/ResetPassword/ResetPassword";

import GameLayout from "./hoc/Layout/GameLayout/GameLayout";
import Games from "./containers/Games/Games";
import NewGame from "./containers/NewGame/NewGame";
import Footer from "./components/UI/Footer/Footer";
import Logout from "./containers/Auth/Logout/Logout";
import { Creators as AuthCreators } from "./store/reducers/auth";

import { useSelector,useDispatch } from "react-redux";

import { Redirect, Route, Switch } from "react-router-dom";

function App(props) {
  const isAuth = useSelector(state=>state.auth.isAuth)
  const dispatch = useDispatch();
  const onTryAutoSignIn = useCallback(() => {dispatch(AuthCreators.CheckAuthState())},[dispatch])
  useEffect(() => {
    onTryAutoSignIn();
  }, [onTryAutoSignIn]);
  let appContent = (
    <AuthLayout>
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route path="/register" component={SignUp} />
        <Route path="/reset" component={ResetPassword} />
      </Switch>
    </AuthLayout>
  );

  if (isAuth) {
    appContent = (
      <GameLayout>
        <Switch>
          <Route path="/logout" component={Logout} />
          <Route path="/new-bet" component={NewGame} />
          <Route exact path="/" component={Games} />

          <Redirect to="/" />
        </Switch>
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
