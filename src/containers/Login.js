import classes from "./Login.module.css";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../components/Logo3.png";

const initialState = {
  userName: "",
  password: "",
  userNameError: "",
  passwordError: "",
};

export default class Login extends Component {
  state = initialState;

  handdleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  validate = () => {
    const { userName, password } = this.state;
    let userNameError = "";
    let passwordError = "";

    if (!password) {
      passwordError = "Password is required";
    }

    if (!userName) {
      userNameError = "Username is required";
    }
    if (!userName.includes("@") && userName !== "admin@admin.com") {
      userNameError = "No account associated with this email";
    }
    // if (userName.includes("@") && userName !== "admin@gamil.com") {
    //   userNameError = "No account associated with this email";
    // }
    if (userNameError || passwordError) {
      this.setState({ userNameError, passwordError });
      return false;
    }
    return true;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      alert("Success");
      // clear form
      this.setState(initialState);
    }
  };

  render() {
    return (
      <div
        className={[`d-flex`, `flex-column`, classes.loginMainContainer].join(
          " "
        )}
      >
        <div className={classes.logoDiv}>
          <img alt="Logo" src={Logo} style={{ maxWidth: "150px" }} />
        </div>
        <div
          className={[
            `container`,
            `d-flex`,
            `align-items-center`,
            `justify-content-center`,
            classes.loginContainer,
          ].join(" ")}
        >
          <div
            className={[
              `col-6`,
              `pt-5`,
              `pb-5`,
              `d-flex`,
              `align-items-center`,
              `flex-column`,
              classes.loginFormContainer,
            ].join(" ")}
          >
            <div className={[`d-flex`, `justify-content-center`].join(" ")}>
              <img alt="Login Logo" src="assets/img/loginLogo.svg" />
            </div>
            <div className="pt-3">
              <h2
                className={[`text-center`, classes.forgotPasswordHeading].join(
                  " "
                )}
              >
                Login
              </h2>
            </div>
            <form
              style={{ flex: 1 }}
              className="d-flex"
              onSubmit={this.handleSubmit}
            >
              <div
                className={[
                  `d-flex`,
                  `flex-column`,
                  `mt-3`,
                  `justify-content-between`,
                ].join(" ")}
              >
                <div>
                  <div
                    className={[
                      `d-flex`,
                      `justify-content-center`,
                      `mb-3`,
                      classes.inputFieldDiv,
                    ].join(" ")}
                  >
                    <img
                      className="mr-3"
                      alt="Password"
                      src="assets/img/login/user.svg"
                    />
                    <input
                      type="text"
                      placeholder="Username / Email"
                      className={classes.inputField}
                      name="userName"
                      value={this.state.userName}
                      onChange={this.handdleChange}
                    />
                  </div>
                  {this.state.userNameError && (
                    <label
                      style={{
                        color: "red",
                        fontWeight: 600,
                        fontSize: "12px",
                      }}
                    >
                      {this.state.userNameError}
                    </label>
                  )}
                  <div
                    className={[
                      `d-flex`,
                      `justify-content-center`,
                      `mb-3`,
                      classes.inputFieldDiv,
                    ].join(" ")}
                  >
                    <img
                      className="mr-3"
                      alt="Password"
                      src="assets/img/login/password.svg"
                    />
                    <input
                      type="password"
                      placeholder="Password"
                      className={classes.inputField}
                      name="password"
                      value={this.state.password}
                      onChange={this.handdleChange}
                    />
                  </div>
                  {this.state.passwordError && (
                    <label
                      style={{
                        color: "red",
                        fontWeight: 600,
                        fontSize: "12px",
                      }}
                    >
                      {this.state.passwordError}
                    </label>
                  )}
                  <div
                    className={[
                      `d-flex`,
                      `justify-content-center`,
                      `mb-3`,
                      classes.inputDiv,
                    ].join(" ")}
                  >
                    <Link to="/forgot-password">
                      <label
                        className={[
                          `noMarginBottom`,
                          classes.lostPasswordLabel,
                        ].join(" ")}
                      >
                        Forgot Password?
                      </label>
                    </Link>
                  </div>
                </div>
                <div
                  className={[
                    `d-flex`,
                    `justify-content-center`,
                    `mb-3`,
                    classes.inputDiv,
                  ].join(" ")}
                >
                  <button
                    type="submit"
                    className={[
                      `d-flex`,
                      `justify-content-center`,
                      `mb-3`,
                      classes.loginButton,
                    ].join(" ")}
                  >
                    Login
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
