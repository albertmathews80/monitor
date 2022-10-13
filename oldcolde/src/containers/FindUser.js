import classes from "./FindUser.module.css";
import React, { useState } from "react";
import FullAppBar from "../components/FullAppBar";
import SecAppBar from "../components/SecAppBar";
import "bootstrap/dist/css/bootstrap.min.css";

const FindUser = (props) => {
  const routes = [
    {
      title: "NEW USER",
      link: "/new-user",
      isActive: false,
    },
    {
      title: "EXISTING USER",
      link: "/existing-user",
      isActive: false,
    },
    {
      title: "MANAGEMENT",
      link: "/user-management",
      isActive: false,
    },
    {
      title: "FIND USER",
      link: "/find-user",
      isActive: true,
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
        sensors={true}
        settings={false}
        accounts={false}
      />

      <div className="contentContainer">
        <SecAppBar title="Find User" subTitle="Accounts" routes={routes} />
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
              minHeight: "100vh",
            }}
          >
            <div className="row justify-content-between">
              <form
                style={{ minWidth: "100%" }}
                onClick={(e) => e.preventDefault()}
              >
                <div className={[`d-flex`, classes.formDiv].join(" ")}>
                  <input
                    className={classes.formInput}
                    type="text"
                    placeholder="Find Sensor"
                  />
                  <button className={classes.formSubmitButton} type="submit">
                    FIND
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindUser;
