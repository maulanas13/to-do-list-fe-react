import React, { Component } from "react";
import "./App.css";
import { Login } from "./login";
import Calendar from "./pages/user/CalenderPage";
import { Switch, Route } from "react-router-dom";
import axios from "axios";
import { LoginAction } from "./redux/actions";
import { connect } from "react-redux";

class App extends Component {
  state = {};
  componentDidMount() {
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
  }

  render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/calendar" exact component={Calendar} />
        </Switch>
      </div>
    );
  }
}

export default connect(null, { LoginAction })(App);
