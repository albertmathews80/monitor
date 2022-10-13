import classes from "./FindSensor.module.css";
import React, { useState } from "react";
import FullAppBar from "../components/FullAppBar";
import SecAppBar from "../components/SecAppBar";
import "bootstrap/dist/css/bootstrap.min.css";

const FindSensor = (props) => {
  const routes = [
    {
      title: "ADD SENSOR",
      link: "/add-sensor",
      isActive: false,
    },
    {
      title: "ALL SENSOR",
      link: "/all-sensor",
      isActive: false,
    },
    {
      title: "FIND SENSOR",
      link: "/find-sensor",
      isActive: true,
    },
    {
      title: "SENSOR GROUP",
      link: "/add-sensor-group",
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
        <SecAppBar title="Sensors" subTitle="Find Sensor" routes={routes} />
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

export default FindSensor;
