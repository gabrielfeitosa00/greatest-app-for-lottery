
import './App.css';
import AuthLayout from './hoc/Layout/AuthLayout';
import SignIn from './containers/Auth/Forms/SignIn/SignIn'
function App() {
  return (
    <div className="App">
    <AuthLayout>
      <SignIn/>
    </AuthLayout>
    </div>
  );
}

export default App;
