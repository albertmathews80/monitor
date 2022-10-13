import classes from "./AllSensor.module.css";
import React, { useState } from "react";
import FullAppBar from "../components/FullAppBar";
import SecAppBar from "../components/SecAppBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Swal from "sweetalert2";

const AllSensor = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSensor, setCurrentSensor] = useState();
  const [isThresholdModalOpen, setIsThresholdModalOpen] = useState(false);
  const [isSensorInfoModalOpen, setIsSensorInfoModalOpen] = useState(false);
  const [isHoveredThreshold, setIsHoveredThreshold] = useState(false);
  const [hover, setHover] = useState(null);
  const handleHoverThreshold = () => {
    setIsHoveredThreshold(true);
  };
  const handleRemoveHoverThreshold = () => {
    setIsHoveredThreshold(false);
  };
  const clipIconBlack = "assets/img/allsensors/clipIcon.svg";
  const clipIconWhite = "assets/img/allsensors/clipIcon1.svg";
  const [close, setClose] = useState(false);
  const handleCloseModal = () => {
    setClose(true);
    setTimeout(() => {
      setIsModalOpen(!isModalOpen);
    }, 300);
  };
  const handleToggleModal = () => {
    setIsThresholdModalOpen(false);
    setIsSensorInfoModalOpen(false);
    setClose(false);
    setIsModalOpen(!isModalOpen);
  };
  const handleToggleThresholdModal = () => {
    setIsModalOpen(false);
    setIsSensorInfoModalOpen(false);
    setClose(false);
    setIsThresholdModalOpen(!isThresholdModalOpen);
  };
  const handleCloseThresholdModal = () => {
    setClose(true);
    setTimeout(() => {
      setIsThresholdModalOpen(!isThresholdModalOpen);
    }, 300);
  };
  const handleToggleSensorInfoModal = (info) => {
    setCurrentSensor(info);
    setIsModalOpen(false);
    setIsThresholdModalOpen(false);
    setClose(false);
    setIsSensorInfoModalOpen(!isSensorInfoModalOpen);
  };
  const handleCloseSensorInfoModal = () => {
    setClose(true);
    setTimeout(() => {
      setIsSensorInfoModalOpen(!isSensorInfoModalOpen);
    }, 300);
  };
  const handleRemoveSensor = () => {
    Swal.fire({
      title: "Do you want to remove the sensor?",
      showDenyButton: true,
      confirmButtonText: `Delete`,
      denyButtonText: `Cancel`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Sensor not deleted", "", "info");
      }
    });
  };
  const routes = [
    // {
    //   title: "ADD SENSOR",
    //   link: "/add-sensor",
    //   isActive: false,
    // },
    {
      title: "ALL SENSOR",
      link: "/all-sensor",
      isActive: true,
    },
    // {
    //   title: "FIND SENSOR",
    //   link: "/find-sensor",
    //   isActive: false,
    // },
    {
      title: "SENSOR GROUP",
      link: "/add-sensor-group",
      isActive: false,
    },
    {
      title: "ALL POLICIES",
      link: "/all-threshold-policy",
      isActive: false,
    },
  ];

  const sensors = [
    {
      id: 0,
      title: "STRAIN",
      image: "assets/img/allsensors/allsensorsgroup/strain.svg",
      image1: "assets/img/allsensors/allsensorsgroup/strain1.svg",
    },
    {
      id: 1,
      title: "TEMPERATURE",
      image: "assets/img/allsensors/allsensorsgroup/temperature.svg",
      image1: "assets/img/allsensors/allsensorsgroup/temperature1.svg",
    },
    {
      id: 2,
      title: "DISPLACEMENT",
      image: "assets/img/allsensors/allsensorsgroup/displacement.svg",
      image1: "assets/img/allsensors/allsensorsgroup/displacement1.svg",
    },
    {
      id: 3,
      title: "LOAD / FORCE",
      image: "assets/img/allsensors/allsensorsgroup/loadForce.svg",
      image1: "assets/img/allsensors/allsensorsgroup/loadForce.svg",
    },
    {
      id: 4,
      title: "PRESSURE",
      image: "assets/img/allsensors/allsensorsgroup/pressure.svg",
      image1: "assets/img/allsensors/allsensorsgroup/pressure1.svg",
    },
    {
      id: 5,
      title: "STRAIN",
      image: "assets/img/allsensors/allsensorsgroup/strain.svg",
      image1: "assets/img/allsensors/allsensorsgroup/strain1.svg",
    },
    {
      id: 6,
      title: "TEMPERATURE",
      image: "assets/img/allsensors/allsensorsgroup/temperature.svg",
      image1: "assets/img/allsensors/allsensorsgroup/temperature1.svg",
    },
    // {
    //   id: 7,
    //   title: "DISPLACEMENT",
    //   image: "assets/img/allsensors/allsensorsgroup/displacement.svg",
    //   image1: "assets/img/allsensors/allsensorsgroup/displacement1.svg",
    // },
    // {
    //   id: 8,
    //   title: "LOAD / FORCE",
    //   image: "assets/img/allsensors/allsensorsgroup/loadForce.svg",
    //   image1: "assets/img/allsensors/allsensorsgroup/loadForce.svg",
    // },
    // {
    //   id: 9,
    //   title: "PRESSURE",
    //   image: "assets/img/allsensors/allsensorsgroup/pressure.svg",
    //   image1: "assets/img/allsensors/allsensorsgroup/pressure1.svg",
    // },
    // {
    //   id: 10,
    //   title: "STRAIN",
    //   image: "assets/img/allsensors/allsensorsgroup/strain.svg",
    //   image1: "assets/img/allsensors/allsensorsgroup/strain1.svg",
    // },
    // {
    //   id: 11,
    //   title: "TEMPERATURE",
    //   image: "assets/img/allsensors/allsensorsgroup/temperature.svg",
    //   image1: "assets/img/allsensors/allsensorsgroup/temperature1.svg",
    // },
  ];
  const sensors1 = [
    {
      id: 7,
      title: "STRAIN",
      image: "assets/img/allsensors/allsensorsgroup/strain.svg",
      image1: "assets/img/allsensors/allsensorsgroup/strain1.svg",
    },
    {
      id: 8,
      title: "TEMPERATURE",
      image: "assets/img/allsensors/allsensorsgroup/temperature.svg",
      image1: "assets/img/allsensors/allsensorsgroup/temperature1.svg",
    },
    {
      id: 9,
      title: "DISPLACEMENT",
      image: "assets/img/allsensors/allsensorsgroup/displacement.svg",
      image1: "assets/img/allsensors/allsensorsgroup/displacement1.svg",
    },
    {
      id: 10,
      title: "LOAD / FORCE",
      image: "assets/img/allsensors/allsensorsgroup/loadForce.svg",
      image1: "assets/img/allsensors/allsensorsgroup/loadForce.svg",
    },
    {
      id: 11,
      title: "PRESSURE",
      image: "assets/img/allsensors/allsensorsgroup/pressure.svg",
      image1: "assets/img/allsensors/allsensorsgroup/pressure1.svg",
    },
    {
      id: 12,
      title: "STRAIN",
      image: "assets/img/allsensors/allsensorsgroup/strain.svg",
      image1: "assets/img/allsensors/allsensorsgroup/strain1.svg",
    },
    {
      id: 13,
      title: "TEMPERATURE",
      image: "assets/img/allsensors/allsensorsgroup/temperature.svg",
      image1: "assets/img/allsensors/allsensorsgroup/temperature1.svg",
    },
    // {
    //   id: 7,
    //   title: "DISPLACEMENT",
    //   image: "assets/img/allsensors/allsensorsgroup/displacement.svg",
    //   image1: "assets/img/allsensors/allsensorsgroup/displacement1.svg",
    // },
    // {
    //   id: 8,
    //   title: "LOAD / FORCE",
    //   image: "assets/img/allsensors/allsensorsgroup/loadForce.svg",
    //   image1: "assets/img/allsensors/allsensorsgroup/loadForce.svg",
    // },
    // {
    //   id: 9,
    //   title: "PRESSURE",
    //   image: "assets/img/allsensors/allsensorsgroup/pressure.svg",
    //   image1: "assets/img/allsensors/allsensorsgroup/pressure1.svg",
    // },
    // {
    //   id: 10,
    //   title: "STRAIN",
    //   image: "assets/img/allsensors/allsensorsgroup/strain.svg",
    //   image1: "assets/img/allsensors/allsensorsgroup/strain1.svg",
    // },
    // {
    //   id: 11,
    //   title: "TEMPERATURE",
    //   image: "assets/img/allsensors/allsensorsgroup/temperature.svg",
    //   image1: "assets/img/allsensors/allsensorsgroup/temperature1.svg",
    // },
  ];
  const handleHover = (sensor) => {
    setHover(sensor);
  };
  const handleRemoveHover = (sensor) => {
    setHover(null);
  };
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
            style={{
              borderRadius: "30px",
              overflow: "hidden",
              border: "solid 1px #888",
            }}
            className={[
              `mt-5`,
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
                CREATE SENSOR
              </label>
              <img
                alt="Close"
                src="assets/img/datadashboard/close.svg"
                onClick={handleCloseModal}
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
                  Unique ID
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
                  Group
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
                    src="assets/img/datareport/addIconSmall.svg"
                    style={{ width: "17px" }}
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
                  Thresholds
                </label>
                {/* <div
                  className={[`d-flex`, `mr-3`, classes.popUpFormInputDiv].join(
                    " "
                  )}
                >
                  <select className={classes.selectVariable}>
                    <option selected disabled>
                      Select Variable
                    </option>
                    <option>Select Variable</option>
                    <option>Select Variable</option>
                    <option>Select Variable</option>
                  </select>
                </div> */}
                <div
                  className={[
                    `d-flex`,
                    `justify-content-between`,
                    classes.thresholdPolicyDiv,
                  ].join(" ")}
                  onMouseEnter={handleHoverThreshold}
                  onMouseLeave={handleRemoveHoverThreshold}
                >
                  <img
                    src={!isHoveredThreshold ? clipIconBlack : clipIconWhite}
                  />
                  <label className={[`noMarginBottom`].join(" ")}>
                    THRESHOLD POLICY
                  </label>
                </div>
              </div>
              <div className="d-flex justify-content-center mt-3">
                <div className={[`d-flex`, `flex-column`, `mr-3`].join(" ")}>
                  <label
                    className={[
                      `noMarginBottom`,
                      `mt-3`,
                      `mb-4`,
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
      {isThresholdModalOpen && (
        <div
          className={[
            `d-flex`,
            `justify-content-center`,
            `align-items-center`,
            classes.overlay,
          ].join(" ")}
        >
          <div
            style={{
              borderRadius: "30px",
              overflow: "hidden",
              border: "solid 1px #888",
              height: "570px",
            }}
            className={[
              `mt-5`,
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
                CREATE THRESHILD POLICY
              </label>
              <img
                alt="Close"
                src="assets/img/datadashboard/close.svg"
                onClick={handleCloseThresholdModal}
                style={{ cursor: "pointer" }}
              />
            </div>
            <div className="pt-3 container">
              <div className="d-flex mt-3 align-items-center">
                <label
                  className="mr-4 noMarginBottom"
                  style={{ width: "132px", fontWeight: 600 }}
                >
                  Sensor / Group
                </label>
                <div
                  className={[
                    `d-flex`,
                    `justify-content-center`,
                    classes.dataReportStartDateDiv,
                  ].join(" ")}
                >
                  <div
                    className={[
                      `d-flex`,
                      `justify-content-between`,
                      `mr-2`,
                      classes.chooseSensorDiv,
                    ].join(" ")}
                  >
                    <label
                      className={[
                        `noMarginBottom`,
                        // classes.dataReportStartDateLabel,
                      ].join(" ")}
                    >
                      Choose Sensor
                    </label>
                    <img
                      src="assets/img/datareport/addIconSmall.svg"
                      style={{ width: "17px" }}
                    />
                  </div>
                  <div
                    className={[
                      `d-flex`,
                      `justify-content-between`,
                      classes.chooseSensorDiv,
                    ].join(" ")}
                    style={{ transform: "translateX(10px)" }}
                  >
                    <label
                      className={[
                        `noMarginBottom`,
                        // classes.dataReportStartDateLabel,
                      ].join(" ")}
                    >
                      Choose Sensor Group
                    </label>
                    <img
                      src="assets/img/datareport/addIconSmall.svg"
                      style={{ width: "17px" }}
                    />
                  </div>
                </div>
              </div>

              <div className="d-flex align-items-center mt-3">
                <label className={[`mr-3`, classes.popUpFormLabel].join(" ")}>
                  Policy Name
                </label>
                <div
                  className={[`d-flex`, classes.popUpFormInputDiv].join(" ")}
                >
                  <input type="text" className={classes.popUpFormInput} />
                </div>
              </div>
              <div className="d-flex align-items-center mt-3">
                <label className={[`mr-3`, classes.popUpFormLabel].join(" ")}>
                  Value to Check for
                </label>
                <div className="d-flex align-items-center" style={{ flex: 1 }}>
                  <div
                    className="d-flex mr-2"
                    style={{
                      flex: 1,
                      border: "solid 1px #888",
                      padding: "6px 10px",
                      borderRadius: "8px",
                    }}
                  >
                    <input className={classes.valueFieldInput} />
                  </div>
                  <label
                    className="noMarginBottom mr-2"
                    style={{ fontWeight: 600 }}
                  >
                    Unit
                  </label>
                  <div
                    style={{
                      border: "solid 1px #888",
                      padding: "6px 10px",
                      borderRadius: "8px",
                      width: "90px",
                    }}
                  >
                    <input className={classes.valueFieldInput} />
                  </div>
                </div>
              </div>
              <div className="d-flex mt-3 align-items-center">
                <label
                  className="mr-4 noMarginBottom"
                  style={{ width: "132px", fontWeight: 600 }}
                >
                  Select Operator
                </label>
                <div
                  className="row flex-column align-items-center"
                  style={{ transform: "translateX(-3px)" }}
                >
                  <div class={[classes.customSelect, classes.solid].join(" ")}>
                    <select
                      style={{
                        // backgroundColor: "#373633",
                        // color: "#fff",
                        borderRadius: "5px",
                        fontSize: "13px",
                        height: "37px",
                        padding: "7px 10px",
                      }}
                    >
                      {/* <option selected disabled>
                        Select Start Date
                      </option>
                      <option>10/10/2020</option>
                      <option>11/10/2020</option>
                      <option>12/10/2020</option> */}
                    </select>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center mt-3">
                <label className={[`mr-3`, classes.popUpFormLabel].join(" ")}>
                  Email
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
                      `mb-4`,
                      classes.createReportButton,
                    ].join(" ")}
                  >
                    Create Policy
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {isSensorInfoModalOpen && (
        <div
          className={[
            `d-flex`,
            `justify-content-center`,
            `align-items-center`,
            classes.overlay,
          ].join(" ")}
        >
          <div
            style={{
              borderRadius: "30px",
              overflow: "hidden",
              border: "solid 1px #888",
              height: "570px",
            }}
            className={[
              `mt-5`,
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
                SENSOR INFO
              </label>
              <img
                alt="Close"
                src="assets/img/datadashboard/close.svg"
                onClick={handleCloseSensorInfoModal}
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
                  <input
                    type="text"
                    className={classes.popUpFormInput}
                    disabled
                    value={currentSensor.title}
                  />
                </div>
              </div>
              <div className="d-flex align-items-center mt-3">
                <label className={[`mr-3`, classes.popUpFormLabel].join(" ")}>
                  Sensor Type
                </label>
                <div
                  className={[`d-flex`, classes.popUpFormInputDiv].join(" ")}
                >
                  <input
                    type="text"
                    className={classes.popUpFormInput}
                    disabled
                    value={currentSensor.title}
                  />
                </div>
              </div>
              <div className="d-flex align-items-center mt-3">
                <label className={[`mr-3`, classes.popUpFormLabel].join(" ")}>
                  Unique ID
                </label>
                <div
                  className={[`d-flex`, classes.popUpFormInputDiv].join(" ")}
                >
                  <input
                    type="text"
                    className={classes.popUpFormInput}
                    disabled
                    value={currentSensor.id}
                  />
                </div>
              </div>
              <div className="d-flex align-items-center mt-3">
                <label className={[`mr-3`, classes.popUpFormLabel].join(" ")}>
                  Group
                </label>
                <div
                  className={[`d-flex`, classes.popUpFormInputDiv].join(" ")}
                >
                  <input
                    type="text"
                    placeholder="Group 1"
                    className={classes.popUpFormInput}
                  />
                </div>{" "}
              </div>
              {/* <div className="d-flex align-items-center mt-3">
                <label className={[`mr-3`, classes.popUpFormLabel].join(" ")}>
                  Group
                </label>
                <div
                  className={[
                    `d-flex`,
                    `flex-column`,
                    `justify-content-center`,
                    `align-items-center`,
                    `mr-3`,
                    classes.sensorInfoPopupGroupIconDiv,
                  ].join(" ")}
                >
                  <img alt="Group" src="assets/img/allsensors/folderIcon.svg" />
                  <label
                    className={[
                      `noMarginBottom`,
                      `mt-1`,
                      classes.sensorInfoPopupGroupIconLabel,
                    ].join(" ")}
                  >
                    Group 1
                  </label>
                </div>
              </div> */}
              <div className="d-flex align-items-center mt-3">
                <label className={[`mr-3`, classes.popUpFormLabel].join(" ")}>
                  Threshold
                </label>
                <div
                  className={[
                    `d-flex`,
                    `justify-content-between`,
                    classes.popUpFormInputDiv,
                  ].join(" ")}
                  style={{
                    maxWidth: "250px",
                  }}
                >
                  <img src="assets/img/allsensors/clipIcon.svg" />
                  <label className={[`noMarginBottom`].join(" ")}>
                    SHOW POLICY
                  </label>
                  <img src="assets/img/allsensors/deleteIcon.svg" />
                </div>
              </div>
              <div className="d-flex justify-content-center mt-3">
                <div className={[`d-flex`, `flex-column`, `mr-3`].join(" ")}>
                  <label
                    className={[
                      `noMarginBottom`,
                      `mt-3`,
                      `mb-4`,
                      classes.createReportButton,
                    ].join(" ")}
                    onClick={handleRemoveSensor}
                  >
                    Remove Sensor
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
        sensors={true}
        settings={false}
        accounts={false}
      />

      <div className="contentContainer">
        <SecAppBar title="Sensors" subTitle="All Sensor" routes={routes} />
        <div className="home-container col contentContainer">
          <div
            className=" mt-5"
            style={{
              background: "#fff",
              background: "rgb(255, 255, 255)",
              boxShadow: "0px 0px 5px 0px #ccc",
              borderRadius: "15px",
              // margin: "0 20px",
              padding: "15px 25px",
            }}
          >
            <div
              style={{ padding: "0 15px" }}
              className="d-flex align-items-center mt-3 mb-3"
            >
              <div
                className="d-flex justify-content-between"
                style={{ flex: 6 }}
              >
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
              <div
                className={[
                  classes.addSensorButton,
                  `d-flex`,
                  `justify-content-center`,
                  `align-items-center`,
                ].join(" ")}
                style={{ flex: 1, marginLeft: "30px" }}
              >
                <label
                  className={[`noMarginBottom`].join(" ")}
                  onClick={handleToggleModal}
                  style={{ fontSize: "12px" }}
                >
                  CREATE SENSOR
                </label>
              </div>
              <div
                className={[
                  classes.addSensorButton,
                  `d-flex`,
                  `justify-content-center`,
                  `align-items-center`,
                ].join(" ")}
                style={{ flex: 1, marginLeft: "30px" }}
              >
                <label
                  className={[`noMarginBottom`].join(" ")}
                  onClick={handleToggleThresholdModal}
                  style={{ fontSize: "12px" }}
                >
                  THRESHOLD POLICY
                </label>
              </div>
            </div>
            <div className="d-flex flex-wrap mt-4 justify-content-between">
              {sensors.map((sensor, j) => {
                return (
                  <div className="col">
                    <div
                      key={j}
                      className={[
                        `d-flex`,
                        `flex-column`,
                        `justify-content-center`,
                        `align-items-center`,
                        `mb-4`,
                        classes.sensorDiv,
                      ].join(" ")}
                      onClick={() => handleToggleSensorInfoModal(sensor)}
                      onMouseEnter={() => handleHover(sensor.id)}
                      onMouseLeave={handleRemoveHover}
                    >
                      <img
                        alt="All Sensors"
                        src={sensor.id === hover ? sensor.image1 : sensor.image}
                      />
                      <label
                        className={[
                          `noMarginBottom`,
                          `mt-2`,
                          classes.sensorTileLabel,
                        ].join(" ")}
                      >
                        {sensor.title}
                      </label>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="d-flex flex-wrap mt-4 justify-content-between">
              {sensors1.map((sensor, j) => {
                return (
                  <div className="col">
                    <div
                      key={j}
                      className={[
                        `d-flex`,
                        `flex-column`,
                        `justify-content-center`,
                        `align-items-center`,
                        `mb-4`,
                        classes.sensorDiv,
                      ].join(" ")}
                      onClick={handleToggleSensorInfoModal}
                      onMouseEnter={() => handleHover(sensor.id)}
                      onMouseLeave={handleRemoveHover}
                    >
                      <img
                        alt="All Sensors"
                        src={sensor.id === hover ? sensor.image1 : sensor.image}
                      />
                      <label
                        className={[
                          `noMarginBottom`,
                          `mt-2`,
                          classes.sensorTileLabel,
                        ].join(" ")}
                      >
                        {sensor.title}
                      </label>
                    </div>
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

export default AllSensor;
