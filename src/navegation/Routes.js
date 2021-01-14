import { Redirect, Route, Switch } from "react-router-dom";
import SignIn from "../containers/Auth/Forms/SignIn/SignIn";
import SignUp from "../containers/Auth/Forms/SignUp/SignUp";
import ResetPassword from "../containers/Auth/Forms/ResetPassword/ResetPassword";
import NewPassword from "../containers/Auth/Forms/NewPassword/NewPassword"

import React from 'react'
import Games from "../containers/Games/Games";
import NewGame from "../containers/NewGame/NewGame";
import Logout from "../containers/Auth/Logout/Logout";
import Profile from "../containers/Profile/Profile";

export const nonAuthRoutes = (
  <Switch>
    <Route path="/register" component={  SignUp} />
    <Route path="/reset" component={ResetPassword} />
    <Route path="/new-password" component={NewPassword} />
    <Route exact path="/" component={SignIn} />
    <Redirect to="/" />
  </Switch>
);

export const authRoutes =  (
  <Switch>
    <Route path="/logout" component={Logout} />
    <Route path="/new-bet" component={NewGame} />
    <Route path="/profile" component={Profile} />
     <Route exact path="/" component={ Games} />

    <Redirect to="/" />
  </Switch>
);
