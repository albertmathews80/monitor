import React, { Component } from "react";
import { Link } from "react-router-dom";
import classes from "./ForgotPassword.module.css";
import Logo from "../components/Logo3.png";

const ForgotPassword = () => {
  return (
    <div
      className={[
        `d-flex`,
        `flex-column`,
        classes.forgotPasswordMainContainer,
      ].join(" ")}
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
          classes.forgotPasswordContainer,
        ].join(" ")}
      >
        <div
          className={[
            `col-6`,
            `pt-5`,
            `pb-5`,
            ,
            classes.forgotPasswordFormContainer,
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
              FORGOT PASSWORD
            </h2>
            <div className="d-flex justify-content-center">
              <p className="text-center" style={{ maxWidth: "360px" }}>
                Enter email address for your account below and we will send you
                a password reset link
              </p>
            </div>
          </div>
          <form onSubmit={(e) => e.preventDefault()}>
            <div
              className={[
                `d-flex`,
                `flex-column`,
                `align-items-center`,
                `mt-3`,
                `justify-content-center`,
              ].join(" ")}
            >
              {/* <div
                className={[
                  `d-flex`,
                  `justify-content-center`,
                  `mb-3`,
                  classes.inputDiv,
                ].join(" ")}
              >
                <input
                  type="text"
                  placeholder="Username"
                  className={classes.inputField}
                />
              </div> */}
              {/* <div
                className={[
                  `d-flex`,
                  `justify-content-center`,
                  `mb-3`,
                  classes.inputDiv,
                ].join(" ")}
              >
                <input
                  type="text"
                  placeholder="Mobile"
                  className={classes.inputField}
                />
              </div> */}
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
                  alt="Email"
                  src="assets/img/login/email.svg"
                />
                <input
                  type="text"
                  placeholder="Email"
                  className={classes.inputField}
                />
              </div>
              {/* <div
                className={[
                  `d-flex`,
                  `justify-content-center`,
                  `mb-3`,
                  classes.inputDiv,
                ].join(" ")}
              >
                <input
                  type="password"
                  placeholder="Password"
                  className={classes.inputField}
                />
              </div>
              <div
                className={[
                  `d-flex`,
                  `justify-content-center`,
                  `mb-3`,
                  classes.inputDiv,
                ].join(" ")}
              >
                <label
                  className={[`noMarginBottom`, classes.lostPasswordLabel].join(
                    " "
                  )}
                >
                  Lost Password?
                </label>
              </div> */}

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
                  Submit
                </button>
              </div>
              <Link to="/login">
                <img src="assets/img/back.svg" />
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
