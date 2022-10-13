import classes from "./NewUser.module.css";
import React, { useState } from "react";
import FullAppBar from "../components/FullAppBar";
import SecAppBar from "../components/SecAppBar";
import "bootstrap/dist/css/bootstrap.min.css";

const NewUser = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleToggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const routes = [
    {
      title: "NEW USER",
      link: "/new-user",
      isActive: true,
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
      {isModalOpen && (
        <div
          className={[`d-flex`, `align-items-center`, classes.overlay].join(
            " "
          )}
        >
          <div className={[`offset-3`, classes.popUpForm].join(" ")}>
            <div
              className="p-3 d-flex justify-content-between"
              style={{ backgroundColor: "#785770" }}
            >
              <span></span>
              <label
                style={{ color: "#fff", fontSize: "20px", fontWeight: 600 }}
                className="noMarginBottom"
              >
                Add Sensor
              </label>
              <img
                alt="Close"
                src="assets/img/datadashboard/close.svg"
                onClick={handleToggleModal}
                style={{ cursor: "pointer" }}
              />
            </div>
            <div className="pt-3 container">
              <div className="d-flex align-items-center mt-3">
                <label className={[`mr-3`, classes.popUpFormLabel].join(" ")}>
                  Sensor Name
                </label>
                <div
                  className={[`d-flex`, classes.popUpFormInputDiv].join(" ")}
                >
                  <input type="text" className={classes.popUpFormInput} />
                </div>
              </div>
              <div className="d-flex align-items-center mt-3">
                <label
                  className={[
                    `mr-3`,
                    `noMarginBottom`,
                    classes.popUpFormLabel,
                  ].join(" ")}
                >
                  Sensor Location
                </label>
                <div
                  className={[`d-flex`, classes.popUpFormInputDiv].join(" ")}
                >
                  <input
                    type="text"
                    className={classes.popUpFormInput}
                    style={{ flex: 1 }}
                  />
                  <img
                    alt="Location"
                    src="assets/img/addsensors/location.svg"
                  />
                </div>
              </div>
              <div className="d-flex align-items-center mt-3">
                <label
                  className={[
                    `mr-3`,
                    `noMarginBottom`,
                    classes.popUpFormLabel,
                  ].join(" ")}
                >
                  Sensor Type
                </label>
                <div
                  className={[`d-flex`, classes.popUpFormInputDiv].join(" ")}
                >
                  <input type="text" className={classes.popUpFormInput} />
                </div>
              </div>
              <div className="d-flex align-items-center mt-3">
                <label
                  className={[
                    `mr-3`,
                    `noMarginBottom`,
                    classes.popUpFormLabel,
                  ].join(" ")}
                >
                  Sensor Unit
                </label>
                <div className="d-flex">
                  <div class="form-check">
                    <input
                      class="form-check-input mr-3"
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadios1"
                      value="option1"
                      checked
                    />
                    <label class="form-check-label" for="exampleRadios1">
                      Celcius
                    </label>
                  </div>
                  <div class="form-check ml-3">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadios2"
                      value="option2"
                    />
                    <label class="form-check-label" for="exampleRadios2">
                      Fahrenheit
                    </label>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center mt-3">
                <label
                  className={[
                    `mr-3`,
                    `noMarginBottom`,
                    classes.popUpFormLabel,
                  ].join(" ")}
                >
                  Threshold
                </label>
                <div
                  className={[`d-flex`, classes.popUpFormInputDiv].join(" ")}
                >
                  <input type="text" className={classes.popUpFormInput} />
                </div>
              </div>
              <div className="d-flex justify-content-center mt-3">
                <div className={[`d-flex`, `flex-column`, `mr-3`].join(" ")}>
                  <label
                    className={[
                      `noMarginBottom`,
                      `mt-3`,
                      classes.createReportButton,
                    ].join(" ")}
                  >
                    Add Sensor
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <FullAppBar
        path={props.match.path}
        home={false}
        data={false}
        sensors={false}
        settings={false}
        accounts={true}
      />

      <div className="contentContainer">
        <SecAppBar title="New User" subTitle="Account" routes={routes} />
        <div className="home-container col contentContainer">
          <div
            className=" mt-5"
            style={{
              background: "#fff",
              background: "rgb(255, 255, 255)",
              boxShadow: "0px 0px 5px 0px #ccc",
              borderRadius: "15px",
            }}
          >
            <div
              className={[
                `col-12`,
                `d-flex`,
                `flex-column`,
                // `justify-content-center`,
                `pt-4`,
                `align-items-center`,
                classes.addReportContainer,
              ].join(" ")}
            >
              <h4
                className={[`noMarginBottom`, classes.addSensorTitle].join(" ")}
              >
                Add New User
              </h4>
              <div
                className={[
                  `d-flex`,
                  `flex-column`,
                  `justify-content-center`,
                  `align-items-center`,
                  `mt-4`,
                  `mb-4`,
                  classes.addReportFileDiv,
                ].join(" ")}
                onClick={handleToggleModal}
              >
                <img
                  alt="Add Report"
                  src="assets/img/newuser/addUser.svg"
                  className={classes.addReportImage}
                />
                <p
                  className={[
                    `mt-4`,
                    `noMarginBottom`,
                    classes.addWidgetText,
                  ].join(" ")}
                  style={{
                    fontSize: "12px",
                    width: "100px",
                    textAlign: "center",
                  }}
                >
                  CLICK TO <br />
                  <span style={{ fontWeight: 900 }}>ADD USER</span>
                </p>
              </div>
              {/* <p
                className="noMarginBottom"
                style={{ color: "#875b7c", fontSize: "15px" }}
              >
                Click to Add User
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewUser;
