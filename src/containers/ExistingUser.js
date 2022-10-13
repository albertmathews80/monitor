import classes from "./ExistingUser.module.css";
import React, { useState } from "react";
import FullAppBar from "../components/FullAppBar";
import SecAppBar from "../components/SecAppBar";
import "bootstrap/dist/css/bootstrap.min.css";

const ExistingUser = (props) => {
  const routes = [
    {
      title: "NEW USER",
      link: "/new-user",
      isActive: false,
    },
    {
      title: "EXISTING USER",
      link: "/existing-user",
      isActive: true,
    },
    {
      title: "MANAGEMENT",
      link: "/user-management",
      isActive: false,
    },
    {
      title: "FIND USER",
      link: "/find-user",
      isActive: false,
    },
    {
      title: "PAYMENTS",
      link: "/user-payment",
      isActive: false,
    },
  ];
  return (
    <div>
      <FullAppBar
        path={props.match.path}
        home={false}
        data={false}
        sensors={false}
        settings={false}
        accounts={true}
      />

      <div className="contentContainer">
        <SecAppBar title="Existing User" subTitle="Accounts" routes={routes} />
        <div className="home-container col contentContainer">
          <div
            className=" mt-5"
            style={{
              background: "#fff",
              background: "rgb(255, 255, 255)",
              boxShadow: "0px 0px 5px 0px #ccc",
              borderRadius: "15px",
              margin: "0 20px",
              padding: "15px 25px",
            }}
          >
            <div className="row justify-content-between">
              {[...Array(8)].map((i, j) => {
                return (
                  <div
                    key={j}
                    className={[
                      `col-1`,
                      `d-flex`,
                      `flex-column`,
                      `justify-content-center`,
                      `align-items-center`,
                      classes.sensorDiv,
                    ].join(" ")}
                  >
                    <img
                      alt="All Sensors"
                      src="assets/img/newuser/addUser.svg"
                    />
                    {/* <label
                      className="noMarginBottom mt-3"
                      style={{ color: "rgb(135, 91, 124)" }}
                    >
                      Lorem Ipsum
                    </label> */}
                  </div>
                );
              })}
            </div>
            <div className="row mt-4 justify-content-between">
              {[...Array(8)].map((i, j) => {
                return (
                  <div
                    key={j}
                    className={[
                      `col-1`,
                      `d-flex`,
                      `flex-column`,
                      `justify-content-center`,
                      `align-items-center`,
                      classes.sensorDiv,
                    ].join(" ")}
                  >
                    <img
                      alt="All Sensors"
                      src="assets/img/newuser/addUser.svg"
                    />
                    {/* <label
                      className="noMarginBottom mt-3"
                      style={{ color: "rgb(135, 91, 124)" }}
                    >
                      Lorem Ipsum
                    </label> */}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExistingUser;
