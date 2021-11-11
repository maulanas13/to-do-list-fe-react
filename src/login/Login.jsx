import axios from "axios";
import React, { Component } from "react";
import "./styles/Login.css";

class Login extends Component {
  state = {
    showpassword: "password",
    username: "",
    email: "",
    password: "",
  };

  onCheckShow = (e) => {
    if (e.target.checked) {
      this.setState({ showpassword: "text" });
    } else {
      this.setState({ showpassword: "password" });
    }
  };

  onInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onLoginClick = () => {
    const { username, email, password } = this.state;
    let input;
    if (username) {
      input = `username=${username}`;
    } else {
      input = `email=${email}`;
    }
    axios
      .get(`http://localhost:5010/users?${input}&password=${password}`)
      .then((res) => {
        if (res.data.length) {
          alert("user ada");
        } else {
          alert("user tidak ditemukan");
        }
      })
      .catch((err) => {
        alert("server error");
      });
  };

  render() {
    const { showpassword, username, email, password } = this.state;
    return (
      <div>
        <div className="container login-container d-flex flex-column ">
          <h1 className="login-form">Login</h1>
          <input
            value={username}
            type="text"
            onChange={this.onInputChange}
            name="username"
            placeholder="usernam or email"
            className="my-2 form-control mt-5"
          />
          <input
            value={password}
            type={showpassword}
            onChange={this.onInputChange}
            name="password"
            placeholder="password"
            className="my-2 form-control mt-3"
          />
          <div className="mx-2">
            <input type="checkbox" onChange={this.onCheckShow} /> Show Password
          </div>
          <div>
            <button
              className="login-button  mt-4 rounded"
              onClick={this.onLoginClick}
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
