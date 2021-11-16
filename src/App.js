import "./App.css";
import RegisterPage from "./pages/RegisterPage";
import VerifyEmailPage from "./pages/user/VerifyEmailPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useEffect } from "react";
import { Login } from "./login";
import Calendar from "./pages/user/CalenderPage";
import { Switch, Route } from "react-router-dom";
import axios from "axios";
import { LoginAction } from "./redux/actions";
import { connect } from "react-redux";

function App() {
  // Penulisan route sengaja kayak gini dlu, nnti tergantung tim mau bikin route & gabungin kyk apa
  // ToastContainer utk akses toast notif pada semua page yg membutuhkannya
  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      axios
        .get(`http://localhost:5010/auth/keeplogin`, {
          headers: {
            Authorization: "Bearer" + token,
          },
        })
        .then((res) => {
          this.props.LoginAction(res.data);
        })
        .catch((err) => {
          alert("server eror");
        });
    }
  }, []);

  return (
    <>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/calendar" exact component={Calendar} />
        <Route path="/register" exact component={RegisterPage}></Route>
        <Route
          path="/verify/:tokenEmailVerif"
          exact
          component={VerifyEmailPage}
        ></Route>
      </Switch>
      <ToastContainer style={{ width: "400px" }} />
    </>
  );
}

export default connect(null, { LoginAction })(App);
