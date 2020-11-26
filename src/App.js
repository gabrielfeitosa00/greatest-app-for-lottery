import "./App.css";
import AuthLayout from "./hoc/Layout/AuthLayout";
import SignIn from "./containers/Auth/Forms/SignIn/SignIn";
import SignUp from "./containers/Auth/Forms/SignUp/SignUp";
import ResetPassword from "./containers/Auth/Forms/ResetPassword/ResetPassword";
import { Route, Switch } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <AuthLayout>
        <Switch>
          <Route path="/register" component={SignUp} />
          <Route path="/reset" component={ResetPassword}/>
          <Route path="/" component={SignIn} />
        </Switch>
      </AuthLayout>
    </div>
  );
}

export default App;
