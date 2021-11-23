import axios from "axios";
import React, { Component } from "react";
import "./styles/Login.css";
import { connect } from "react-redux";
import { LoginAction } from "../redux/actions";
import { Redirect } from "react-router";
import Calendar from "../pages/user/CalenderPage";
import { Link } from "react-router-dom";

class Login extends Component {
  state = {
    showpassword: "password",
    username: "",
    email: "",
    password: "",
    isLogin: false,
  };

  onCheckShow = (e) => {
    if (e.target.checked) {
      this.setState({ showpassword: "text" });
    } else {
      this.setState({ showpassword: "password" });
    }
  };

  onInputChange = (e) => {
    let regex = /@/gm;
    let match = regex.test(e.target.value);
    console.log(match);
    // if (match) {
    //   this.setState({ email: e.target.value });
    // } else {
    //   this.setState({ username: e.target.value });
    // }

    this.setState({ username: e.target.value });
  };

  onLoginClick = async () => {
    let regex = /@/gm;
    let match = regex.test(this.state.username);
    let input;
    const { username, email, password } = this.state;
    if (!match) {
      input = `username=${username}`;
    } else {
      input = `email=${username}`;
    }
    try {
      const res = await axios.post(`http://localhost:5010/auth/login`, {
        username,
        email: username,
        password,
      });
      alert("login berhasil");
      localStorage.setItem("token", res.headers["x-token-access"]);
      this.props.LoginAction(res.data);
    } catch (error) {
      alert(error.response.data.message || "server error");
    }

    // axios
    //   .get(`http://localhost:5010/users?${input}&password=${password}`)
    //   .then((res) => {
    //     if (res.data.length) {
    //       alert("user ada");
    //       localStorage.setItem("id", res.data[0].id);
    //       this.props.LoginAction(res.data[0]);
    //       this.setState({ isLogin: true });
    //     } else {
    //       alert("user tidak ditemukan");
    //     }
    //   })
    //   .catch((err) => {
    //     alert(error.response.data.message || "server error");
    //   });
  };

  render() {
    const { showpassword, username, password } = this.state;
    if (this.props.isLogin) {
      return <Redirect to="/calendar" />;
    }
    return (
      <div>
        <div className="container login-container d-flex flex-column ">
          <h1 className="login-form">Login</h1>
          <input
            value={username}
            type="email"
            onChange={this.onInputChange}
            name="username"
            placeholder="username or email"
            className="my-2 form-control mt-5"
          />
          <input
            value={password}
            type={showpassword}
            onChange={(e) => this.setState({ password: e.target.value })}
            name="password"
            placeholder="password"
            className="my-2 form-control mt-3"
          />
          <div className="mx-2">
            <input type="checkbox" onChange={this.onCheckShow} /> Show Password
            <Link className="signup-button" to="/calendar">
              SignUp Here!
            </Link>
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

const mapStateToProps = (state) => {
  return {
    isLogin: state.authentication.isLogin,
  };
};

export default connect(mapStateToProps, { LoginAction })(Login);
