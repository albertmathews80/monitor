import classes from "./AddSensorGroup.module.css";
import React, { useState } from "react";
import FullAppBar from "../components/FullAppBar";
import SecAppBar from "../components/SecAppBar";
import "bootstrap/dist/css/bootstrap.min.css";
import addGroupImage from "./addSensorFolder.svg";
import addGroupImage1 from "./addSensorFolder1.svg";
import { Link } from "react-router-dom";

const AddSensorGroup = (props) => {
  const [isSensorGropsClicked, setIsSensorGropsClicked] = useState(false);
  const [isCreatingGroup, setIsCreatingGroup] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [close, setClose] = useState(false);
  const handleCloseModal = () => {
    setClose(true);
    setTimeout(() => {
      setIsModalOpen(!isModalOpen);
    }, 300);
  };
  const handleToggleModal = () => {
    setClose(false);
    setIsModalOpen(!isModalOpen);
  };

  const routes = [
    // {
    //   title: "ADD SENSOR",
    //   link: "/add-sensor",
    //   isActive: false,
    // },
    {
      title: "ALL SENSORS",
      link: "/all-sensor",
      isActive: false,
    },
    // {
    //   title: "FIND SENSOR",
    //   link: "/find-sensor",
    //   isActive: false,
    // },
    {
      title: "SENSOR GROUP",
      link: "/add-sensor-group",
      isActive: true,
    },
    {
      title: "ALL POLICIES",
      link: "/all-threshold-policy",
      isActive: false,
    },
  ];
  return (
    <div>
      {isModalOpen && (
        <div
          className={[
            `d-flex`,
            `justify-content-center`,
            `align-items-center`,
            classes.overlay,
          ].join(" ")}
        >
          <div
            className={[
              // `offset-4`,
              `animate__animated`,
              !close ? `animate__slideInUp` : `animate__slideOutDown`,
              `animate__fast`,
              classes.popUpForm,
            ].join(" ")}
          >
            <div
              className="p-3 d-flex justify-content-between"
              style={{ backgroundColor: "#785770" }}
            >
              <span></span>
              <label
                style={{ color: "#fff", fontSize: "20px", fontWeight: 600 }}
                className="noMarginBottom"
              >
                CREATE SENSOR GROUP
              </label>
              <img
                alt="Close"
                src="assets/img/datadashboard/close.svg"
                onClick={handleCloseModal}
                style={{ cursor: "pointer" }}
              />
            </div>
            <div className="pt-3 container">
              <div className="d-flex align-items-center mt-4">
                <label className={[`mr-3`, classes.popUpFormLabel].join(" ")}>
                  Choose Sensors:
                </label>
                {/* <input
                  type="text"
                  className={classes.popUpFormInput}
                  placeholder="Choose sensor"
                /> */}
                <div
                  className={[`d-flex`, classes.popUpFormUnputDiv].join(" ")}
                >
                  <input type="text" placeholder="Choose Sensor" />
                  <img src="assets/img/addsensorgroup/addSensorGroupIcon.svg" />
                </div>
              </div>
              <div className="d-flex align-items-center mt-4">
                <label className={[`mr-3`, classes.popUpFormLabel].join(" ")}>
                  Group Name:
                </label>
                <input type="text" className={classes.popUpFormInput} />
              </div>
              <div className="d-flex align-items-center mt-4">
                <label className={[`mr-3`, classes.popUpFormLabel].join(" ")}>
                  Group Type:
                </label>
                <input type="text" className={classes.popUpFormInput} />
              </div>
              <div className="d-flex align-items-center mt-4">
                <label className={[`mr-3`, classes.popUpFormLabel].join(" ")}>
                  Thresholds:
                </label>
                {/* <input type="text" className={classes.popUpFormInput} /> */}
                <div
                  className={[
                    `d-flex`,
                    `justify-content-between`,
                    classes.popUpFormShowPolicyDiv,
                  ].join(" ")}
                >
                  <img src="assets/img/allsensors/clipIcon.svg" />
                  <label className={[`noMarginBottom`].join(" ")}>
                    SHOW POLICY
                  </label>
                </div>
              </div>
              {/* <div className="d-flex mt-3">
                <label className="mr-4">Time Range</label>
                <div className="d-flex">
                  <div class="form-check mr-3">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="defaultCheck1"
                    />
                    <label class="form-check-label" for="defaultCheck1">
                      Today
                    </label>
                  </div>
                  <div class="form-check mr-3">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="defaultCheck2"
                    />
                    <label class="form-check-label" for="defaultCheck2">
                      This Week
                    </label>
                  </div>
                  <div class="form-check mr-3">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="defaultCheck3"
                    />
                    <label class="form-check-label" for="defaultCheck3">
                      This Month
                    </label>
                  </div>
                  <div class="form-check mr-3">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="defaultCheck4"
                    />
                    <label class="form-check-label" for="defaultCheck4">
                      This Year
                    </label>
                  </div>
                </div>
              </div>
              <div className="d-flex mt-3">
                <label className="mr-4">Time Range</label>
                <div class="form-check mr-5">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="defaultCheck5"
                  />
                  <label class="form-check-label" for="defaultCheck5">
                    PDF
                  </label>
                </div>
                <div class="form-check mr-5">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="defaultCheck6"
                  />
                  <label class="form-check-label" for="defaultCheck6">
                    DOC
                  </label>
                </div>
                <div class="form-check mr-5">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="defaultCheck7"
                  />
                  <label class="form-check-label" for="defaultCheck7">
                    XLS
                  </label>
                </div>
              </div>
              <div className="d-flex align-items-center mt-3">
                <label className="mr-4" style={{ width: "83px" }}>
                  Email
                </label>
                <div class="circle custom-select" style={{ height: "42px" }}>
                  <select>
                    <option selected disabled>
                      Select
                    </option>
                    <option>Every Day</option>
                    <option>Every Week</option>
                    <option>Every Month</option>
                  </select>
                </div>
              </div>
              <div className="d-flex justify-content-center mt-3">
                <div
                  className={[
                    `d-flex`,
                    `flex-column`,
                    `mr-3`,
                    `justify-content-center`,
                    `align-items-center`,
                    classes.popUpFormChooseSensorDiv,
                  ].join(" ")}
                >
                  <img
                    alt="Choose Sensor"
                    src="assets/img/datareport/addIcon.svg"
                  />
                  <label className="noMarginBottom mt-3">Choose Sensor</label>
                </div>
                <div
                  className={[
                    `d-flex`,
                    `flex-column`,
                    `mr-3`,
                    `justify-content-center`,
                    `align-items-center`,
                    classes.popUpFormChooseSensorDiv,
                  ].join(" ")}
                >
                  <img
                    alt="Choose Sensor"
                    src="assets/img/datareport/addIcon.svg"
                  />
                  <label className="noMarginBottom mt-3">
                    Choose Sensor Group
                  </label>
                </div>
              </div> */}
              <div className="d-flex justify-content-center mt-3">
                <div className={[`d-flex`, `flex-column`, `mr-3`].join(" ")}>
                  <Link to="/sensor-group-1">
                    <label
                      className={[
                        `noMarginBottom`,
                        `mt-3`,
                        classes.createReportButton,
                      ].join(" ")}
                    >
                      Create Group
                    </label>
                  </Link>
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
        sensors={true}
        settings={false}
        accounts={false}
      />

      <div className="contentContainer">
        <SecAppBar title="Sensors" subTitle="Sensor Groups" routes={routes} />
        {isSensorGropsClicked && (
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
              <label
                className="pt-3 pb-3"
                onClick={() => setIsSensorGropsClicked(!isSensorGropsClicked)}
                style={{ cursor: "pointer" }}
              >
                <i
                  class="fas fa-arrow-left"
                  style={{
                    backgroundColor: "#655360",
                    color: "#fff",
                    borderRadius: "50%",
                    padding: "9px",
                  }}
                ></i>
              </label>
              <div className="row justify-content-between">
                {[...Array(8)].map((i, j) => {
                  return (
                    <div
                      key={j}
                      className={[
                        `col-1`,
                        `d-flex`,
                        `flex-column`,
                        `justify-content-between`,
                        `align-items-center`,
                        classes.sensorDiv,
                      ].join(" ")}
                    >
                      <div
                        style={{ minWidth: "100%" }}
                        className="d-flex justify-content-end pt-2"
                      >
                        <i
                          class="fas fa-plus"
                          style={{
                            color: "#fff",
                            background: "#000",
                            borderRadius: "50%",
                            padding: "4px",
                            transform: "translateX(10px)",
                          }}
                        ></i>
                      </div>
                      <div className="d-flex flex-column">
                        <img
                          alt="All Sensors"
                          src="assets/img/addsensors/addSensorGroup.svg"
                        />
                        <label
                          className="noMarginBottom mt-2"
                          style={{
                            color: "rgb(135, 91, 124)",
                            fontSize: "14px",
                          }}
                        >
                          Lorem Ipsum {j + 1}
                        </label>
                      </div>
                      <span></span>
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
                        `justify-content-between`,
                        `align-items-center`,
                        classes.sensorDiv,
                      ].join(" ")}
                    >
                      <div
                        style={{ minWidth: "100%" }}
                        className="d-flex justify-content-end pt-2"
                      >
                        <i
                          class="fas fa-plus"
                          style={{
                            color: "#fff",
                            background: "#000",
                            borderRadius: "50%",
                            padding: "4px",
                            transform: "translateX(10px)",
                          }}
                        ></i>
                      </div>
                      <div className="d-flex flex-column">
                        <img
                          alt="All Sensors"
                          src="assets/img/addsensors/addSensorGroup.svg"
                        />
                        <label
                          className="noMarginBottom mt-2"
                          style={{
                            color: "rgb(135, 91, 124)",
                            fontSize: "14px",
                          }}
                        >
                          Lorem Ipsum {j + 1}
                        </label>
                      </div>
                      <span></span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
        {!isSensorGropsClicked && (
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
                  className={[`noMarginBottom`, classes.addSensorTitle].join(
                    " "
                  )}
                >
                  Add Sensor Group
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
                  // onClick={() => setIsSensorGropsClicked(!isSensorGropsClicked)}
                  onClick={handleToggleModal}
                  onMouseEnter={() => setIsCreatingGroup(true)}
                  onMouseLeave={() => setIsCreatingGroup(false)}
                >
                  <img
                    alt="Add Report"
                    src={isCreatingGroup ? addGroupImage1 : addGroupImage}
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
                      width: "120px",
                      textAlign: "center",
                    }}
                  >
                    CLICK TO <br />
                    <span style={{ fontWeight: 900 }}>CREATE A GROUP</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddSensorGroup;
