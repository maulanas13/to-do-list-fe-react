import { Route, Switch } from 'react-router';
import './App.css';
import RegisterPage from './pages/RegisterPage';
import VerifyEmailPage from './pages/user/VerifyEmailPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  // Penulisan route sengaja kayak gini dlu, nnti tergantung tim mau bikin route & gabungin kyk apa
  // ToastContainer utk akses toast notif pada semua page yg membutuhkannya

  return (
    <>
      <Switch>
        <Route path="/register" exact component={RegisterPage}></Route>
        <Route path="/verify/:tokenEmailVerif" exact component={VerifyEmailPage}></Route>
      </Switch>
      <ToastContainer style={{ width: "400px" }}/>
    </>
  )
}

export default App;
