import { Route, Switch } from 'react-router';
import './App.css';
import RegisterPage from './pages/RegisterPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Switch>
        <Route path="/register" exact component={RegisterPage}></Route>
      </Switch>
      <ToastContainer style={{ width: "400px" }}/>
    </>
  )
}

export default App;
