import "./App.css";

import AuthLayout from "./hoc/Layout/AuthLayout/AuthLayout";
import GameLayout from "./hoc/Layout/GameLayout/GameLayout";
import SignIn from "./containers/Auth/Forms/SignIn/SignIn";
import SignUp from "./containers/Auth/Forms/SignUp/SignUp";
import ResetPassword from "./containers/Auth/Forms/ResetPassword/ResetPassword";
import Footer from "./components/UI/Footer/Footer";
import Logout from "./containers/Auth/Logout/Logout";

import { connect } from "react-redux";

import { Redirect, Route, Switch } from "react-router-dom";

function App(props) {
  let appContent = (
    <AuthLayout>
      <Switch>
        <Route path="/register" component={SignUp} />
        <Route path="/reset" component={ResetPassword} />
        
        <Route path="/" component={SignIn} />
        
      </Switch>
    </AuthLayout>
  );

  if (props.isAuth) {
    appContent = (
      <GameLayout>
        <Switch>
        <Route exact path="/home" render={() => <p>You're Authenticated yay!</p>} />
          <Route path="/logout" component={Logout} />
          
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
export default connect(mapStateToProps)(App);
