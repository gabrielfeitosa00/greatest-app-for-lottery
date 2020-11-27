import "./App.css";
import AuthLayout from "./hoc/Layout/AuthLayout/AuthLayout";
import SignIn from "./containers/Auth/Forms/SignIn/SignIn";
import SignUp from "./containers/Auth/Forms/SignUp/SignUp";
import ResetPassword from "./containers/Auth/Forms/ResetPassword/ResetPassword";
import { Route, Switch } from "react-router-dom";
import Footer from "./components/UI/Footer/Footer";
function App() {
  
  return (
    <div className="App">
      <AuthLayout>
        <Switch>
          <Route path="/register" component={SignUp} />
          <Route path="/reset" component={ResetPassword} />
          <Route path="/" component={SignIn} />
        </Switch>
      </AuthLayout>
      <Footer />
    </div>
  );
}

export default App;
