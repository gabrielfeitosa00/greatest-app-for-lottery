import "./App.css";
import React, { useEffect } from "react";
import AuthLayout from "./hoc/Layout/AuthLayout/AuthLayout";
import SignIn from "./containers/Auth/Forms/SignIn/SignIn";
import SignUp from "./containers/Auth/Forms/SignUp/SignUp";
import ResetPassword from "./containers/Auth/Forms/ResetPassword/ResetPassword";

import GameLayout from "./hoc/Layout/GameLayout/GameLayout";
import Games from "./containers/Games/Games";

import Footer from "./components/UI/Footer/Footer";
import Logout from "./containers/Auth/Logout/Logout";
import { CheckAuthState } from "./store/actions/index";

import { connect } from "react-redux";

import { Redirect, Route, Switch } from "react-router-dom";

function App(props) {
  const { onTryAutoSignIn } = props;
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

  if (props.isAuth) {
    appContent = (
      <GameLayout>
        <Switch>
          <Route path="/logout" component={Logout} />
          <Route exact path="/" component={Games} />
          <Redirect to="/"/>
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
const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutoSignIn: () => {
      dispatch(CheckAuthState());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
