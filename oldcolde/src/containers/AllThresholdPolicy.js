import classes from "./AllThresholdPolicy.module.css";
import React, { useState } from "react";
import FullAppBar from "../components/FullAppBar";
import SecAppBar from "../components/SecAppBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Swal from "sweetalert2";

const AllThresholdPolicy = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
  const handleToggleSensorInfoModal = () => {
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
      isActive: false,
    },
    {
      title: "ALL POLICIES",
      link: "/all-threshold-policy",
      isActive: true,
    },
  ];

  const policy = [
    {
      id: 0,
      title: "POLICY 1",
      image: "assets/img/home1/createThreshold.svg",
      image1: "assets/img/home1/createThreshold1.svg",
    },
    {
      id: 1,
      title: "POLICY 1",
      image: "assets/img/home1/createThreshold.svg",
      image1: "assets/img/home1/createThreshold1.svg",
    },
    {
      id: 2,
      title: "POLICY 1",
      image: "assets/img/home1/createThreshold.svg",
      image1: "assets/img/home1/createThreshold1.svg",
    },
    {
      id: 3,
      title: "POLICY 1",
      image: "assets/img/home1/createThreshold.svg",
      image1: "assets/img/home1/createThreshold1.svg",
    },
    {
      id: 4,
      title: "POLICY 1",
      image: "assets/img/home1/createThreshold.svg",
      image1: "assets/img/home1/createThreshold1.svg",
    },
    {
      id: 5,
      title: "POLICY 1",
      image: "assets/img/home1/createThreshold.svg",
      image1: "assets/img/home1/createThreshold1.svg",
    },
    {
      id: 6,
      title: "POLICY 1",
      image: "assets/img/home1/createThreshold.svg",
      image1: "assets/img/home1/createThreshold1.svg",
    },
    // {
    //   id: 7,
    //   title:"POLICY 1",
    //   image: "assets/img/home1/createThreshold.svg",
    //   image1: "assets/img/home1/createThreshold1.svg",
    // },
    // {
    //   id: 8,
    //   title:"POLICY 1",
    //   image: "assets/img/home1/createThreshold.svg",
    //   image1: "assets/img/home1/createThreshold1.svg",
    // },
    // {
    //   id: 9,
    //   title:"POLICY 1",
    //   image: "assets/img/home1/createThreshold.svg",
    //   image1: "assets/img/home1/createThreshold1.svg",
    // },
    // {
    //   id: 10,
    //   title:"POLICY 1",
    //   image: "assets/img/home1/createThreshold.svg",
    //   image1: "assets/img/home1/createThreshold1.svg",
    // },
    // {
    //   id: 11,
    //   title:"POLICY 1",
    //   image: "assets/img/home1/createThreshold.svg",
    //   image1: "assets/img/home1/createThreshold1.svg",
    // },
  ];
  const policy1 = [
    {
      id: 7,
      title: "POLICY 1",
      image: "assets/img/home1/createThreshold.svg",
      image1: "assets/img/home1/createThreshold1.svg",
    },
    {
      id: 8,
      title: "POLICY 1",
      image: "assets/img/home1/createThreshold.svg",
      image1: "assets/img/home1/createThreshold1.svg",
    },
    {
      id: 9,
      title: "POLICY 1",
      image: "assets/img/home1/createThreshold.svg",
      image1: "assets/img/home1/createThreshold1.svg",
    },
    {
      id: 10,
      title: "POLICY 1",
      image: "assets/img/home1/createThreshold.svg",
      image1: "assets/img/home1/createThreshold1.svg",
    },
    {
      id: 11,
      title: "POLICY 1",
      image: "assets/img/home1/createThreshold.svg",
      image1: "assets/img/home1/createThreshold1.svg",
    },
    {
      id: 12,
      title: "POLICY 1",
      image: "assets/img/home1/createThreshold.svg",
      image1: "assets/img/home1/createThreshold1.svg",
    },
    {
      id: 13,
      title: "POLICY 1",
      image: "assets/img/home1/createThreshold.svg",
      image1: "assets/img/home1/createThreshold1.svg",
    },
    // {
    //   id: 7,
    //   title:"POLICY 1",
    //   image: "assets/img/home1/createThreshold.svg",
    //   image1: "assets/img/home1/createThreshold1.svg",
    // },
    // {
    //   id: 8,
    //   title:"POLICY 1",
    //   image: "assets/img/home1/createThreshold.svg",
    //   image1: "assets/img/home1/createThreshold1.svg",
    // },
    // {
    //   id: 9,
    //   title:"POLICY 1",
    //   image: "assets/img/home1/createThreshold.svg",
    //   image1: "assets/img/home1/createThreshold1.svg",
    // },
    // {
    //   id: 10,
    //   title:"POLICY 1",
    //   image: "assets/img/home1/createThreshold.svg",
    //   image1: "assets/img/home1/createThreshold1.svg",
    // },
    // {
    //   id: 11,
    //   title:"POLICY 1",
    //   image: "assets/img/home1/createThreshold.svg",
    //   image1: "assets/img/home1/createThreshold1.svg",
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
                POLICY INFO
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
                      <option selected disabled>
                        Select Start Date
                      </option>
                      <option>10/10/2020</option>
                      <option>11/10/2020</option>
                      <option>12/10/2020</option>
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
                CREATE THRESHOLD POLICY
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
                POLICY INFO
              </label>
              <img
                alt="Close"
                src="assets/img/datadashboard/close.svg"
                onClick={handleCloseSensorInfoModal}
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
                      Sensor 1
                    </label>
                    {/* <img
                      src="assets/img/datareport/addIconSmall.svg"
                      style={{ width: "17px" }}
                    /> */}
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
                      Group 1
                    </label>
                    {/* <img
                      src="assets/img/datareport/addIconSmall.svg"
                      style={{ width: "17px" }}
                    /> */}
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
                  <input
                    type="text"
                    className={classes.popUpFormInput}
                    disabled
                    value="Policy 1"
                  />
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
                    <input
                      className={classes.valueFieldInput}
                      disabled
                      value="Value 1"
                    />
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
                    <input
                      className={classes.valueFieldInput}
                      disabled
                      value="m"
                    />
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
                      disabled
                    >
                      <option selected disabled>
                        Operator 1
                      </option>
                      {/* <option>10/10/2020</option>
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
                  <input
                    type="text"
                    className={classes.popUpFormInput}
                    disabled
                    value="example@gmail.com"
                  />
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
      <FullAppBar
        path={props.match.path}
        home={false}
        data={false}
        sensors={true}
        settings={false}
        accounts={false}
      />

      <div className="contentContainer">
        <SecAppBar title="Policies" subTitle="All Policies" routes={routes} />
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
                style={{ flex: 7, marginRight: "30px" }}
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
              {/* <div className={[classes.addSensorButton,`d-flex`,`justify-content-center`,`align-items-center`,`ml-5`,].join(" ")}>
              <label
                className={[
                  `noMarginBottom`,
                  
                  
                ].join(" ")}
                onClick={handleToggleModal}
              >
                CREATE SENSOR
              </label>
              </div> */}
              <div
                className={[
                  classes.addSensorButton,
                  `d-flex`,
                  `justify-content-center`,
                  `align-items-center`,
                ].join(" ")}
                style={{ flex: 1 }}
              >
                <label
                  className={[`noMarginBottom`].join(" ")}
                  onClick={handleToggleThresholdModal}
                >
                  CREATE POLICY
                </label>
              </div>
            </div>
            <div className="d-flex flex-wrap mt-4 justify-content-between">
              {policy.map((sensor, j) => {
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
            <div className="d-flex flex-wrap mt-4 justify-content-between">
              {policy1.map((sensor, j) => {
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

export default AllThresholdPolicy;
