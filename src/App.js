import "./App.css";
import AuthLayout from "./hoc/Layout/AuthLayout/AuthLayout";
import GameLayout from "./hoc/Layout/GameLayout/GameLayout";
import SignIn from "./containers/Auth/Forms/SignIn/SignIn";
import SignUp from "./containers/Auth/Forms/SignUp/SignUp";
import ResetPassword from "./containers/Auth/Forms/ResetPassword/ResetPassword";
import { Route, Switch } from "react-router-dom";
import Footer from "./components/UI/Footer/Footer";
function App() {

  return (
    <div className="App">
      {/* <AuthLayout>
        <Switch>
          <Route path="/register" component={SignUp} />
          <Route path="/reset" component={ResetPassword} />
          <Route path="/" component={SignIn} />
        </Switch>
      </AuthLayout> */}
      <GameLayout>
        you're Authenticated yay!
      </GameLayout>
      <Footer />
    </div>
  );
}

export default App;
