import classes from "./DataAnalytics.module.css";
import React, { useState } from "react";
import FullAppBar from "../components/FullAppBar";
import SecAppBar from "../components/SecAppBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { head } from "lodash";

const DataAnalytics = (props) => {
  const routes = [
    // {
    //   title: "CLICK To",
    //   subTitle: "ADD A WIDGET",
    //   image: "assets/img/data/addWdigetModal.svg",
    //   isFunc: true,
    //   // onClick: handleToggleModal,
    // },
    {
      title: "DASHBOARD",
      link: "/data-dashboard",
      isActive: false,
    },
    {
      title: "REPORT",
      link: "/data-report",
      isActive: false,
    },
    {
      title: "ANALYTICS",
      link: "/data-analytics",
      isActive: true,
    },
  ];
  const analytics = [
    { title: "Start Time :", type: "time" },
    { title: "Start Date : ", type: "date" },
    { title: "Span : ", type: "time" },
    // { title: "Sensor/Group :", type: "dropdown" },
  ];
  return (
    <div>
      <FullAppBar
        path={props.match.path}
        home={false}
        data={true}
        sensors={false}
        settings={false}
        accounts={false}
      />

      <div className="contentContainer">
        <SecAppBar title="Data" subTitle="Analytics" routes={routes} />
        <div className="home-container col contentContainer">
          <div
            className=" mt-5"
            style={{
              background: "#fff",
              background: "rgb(255, 255, 255)",
              boxShadow: "0px 0px 5px 0px #ccc",
              borderRadius: "15px",
              minHeight: "100vh",
            }}
          >
            <div
              className={[
                `col-12`,
                `d-flex`,
                `mt-4`,
                `pt-4`,
                `justify-content-between`,
                // `align-items-center`,
                classes.addReportContainer,
              ].join(" ")}
            >
              {analytics.map((anatylic, j) => {
                return (
                  <div className="col-3" key={j}>
                    <div className=" d-flex align-items-center">
                      <div
                        className={[
                          `d-flex`,
                          `align-items-center`,
                          `justify-content-between`,
                          classes.inputDiv,
                        ].join(" ")}
                      >
                        <label
                          className={[
                            `noMarginBottom`,
                            `mr-3`,
                            classes.inputLabel,
                          ].join(" ")}
                        >
                          {anatylic.title}
                        </label>
                        <div>
                          <input
                            type={anatylic.type}
                            className={classes.datePicker}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
              <div className="col-3">
                <div className=" d-flex align-items-center">
                  <div
                    className={[
                      `d-flex`,
                      `align-items-center`,
                      classes.inputDiv,
                    ].join(" ")}
                    style={{ minWidth: "100%", maxHeight: "29px" }}
                  >
                    <label
                      className={[
                        `noMarginBottom`,
                        `mr-3`,
                        classes.inputLabel,
                      ].join(" ")}
                    >
                      Sensor / Group
                    </label>
                    <div
                      class={[classes.customSelect, classes.solid].join(" ")}
                    >
                      <select
                        style={{
                          // backgroundColor: "#373633",
                          // color: "#fff",
                          borderRadius: "5px",
                          fontSize: "13px",
                          height: "37px",
                          padding: "7px 10px",
                          border: "none",
                          backgroundColor: "#373633",
                          color: "#fff",
                          borderRadius: "30px",
                          maxHeight: "29px",
                        }}
                      >
                        {/* <option selected disabled>
                          Select Group
                        </option>
                        <option>Group 1</option>
                        <option>Group 2</option>
                        <option>Group 3</option> */}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataAnalytics;
