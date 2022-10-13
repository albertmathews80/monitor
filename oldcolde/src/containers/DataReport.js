import classes from "./DataReport.module.css";
import React, { useState } from "react";
import FullAppBar from "../components/FullAppBar";
import SecAppBar from "../components/SecAppBar";
import "bootstrap/dist/css/bootstrap.min.css";

const DataReport = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCreateReportModalOpen, setIsCreateReportModalOpen] = useState(false);
  const [close, setClose] = useState(false);
  const [hoverDataNav, setHoverDataNav] = useState(null);
  const handleCloseModal = () => {
    setClose(true);
    setTimeout(() => {
      setIsModalOpen(!isModalOpen);
    }, 300);
  };
  const handleToggleModal = () => {
    setIsCreateReportModalOpen(false);
    setClose(false);
    setIsModalOpen(!isModalOpen);
  };
  const handleCloseCreateReportModal = () => {
    setClose(true);
    setTimeout(() => {
      setIsCreateReportModalOpen(!isCreateReportModalOpen);
    }, 300);
  };
  const handleToggleCreateReportModal = () => {
    setIsModalOpen(false);
    setClose(false);
    setIsCreateReportModalOpen(!isCreateReportModalOpen);
  };

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
      isActive: true,
    },
    {
      title: "ANALYTICS",
      link: "/data-analytics",
      isActive: false,
    },
  ];
  const myReports = [
    {
      id: 0,
      title: "My Report",
      image: "assets/img/datareport/pdfFileIcon.svg",
      image1: "assets/img/datareport/pdfFileIcon1.svg",
      downloadImage: "assets/img/datareport/downloadIcon.svg",
      downloadImage1: "assets/img/datareport/downloadIcon1.svg",
    },
    {
      id: 1,
      title: "My Report",
      image: "assets/img/datareport/pdfFileIcon.svg",
      image1: "assets/img/datareport/pdfFileIcon1.svg",
      downloadImage: "assets/img/datareport/downloadIcon.svg",
      downloadImage1: "assets/img/datareport/downloadIcon1.svg",
    },
    {
      id: 2,
      title: "My Report",
      image: "assets/img/datareport/pdfFileIcon.svg",
      image1: "assets/img/datareport/pdfFileIcon1.svg",
      downloadImage: "assets/img/datareport/downloadIcon.svg",
      downloadImage1: "assets/img/datareport/downloadIcon1.svg",
    },
    {
      id: 3,
      title: "My Report",
      image: "assets/img/datareport/pdfFileIcon.svg",
      image1: "assets/img/datareport/pdfFileIcon1.svg",
      downloadImage: "assets/img/datareport/downloadIcon.svg",
      downloadImage1: "assets/img/datareport/downloadIcon1.svg",
    },
    {
      id: 4,
      title: "My Report",
      image: "assets/img/datareport/pdfFileIcon.svg",
      image1: "assets/img/datareport/pdfFileIcon1.svg",
      downloadImage: "assets/img/datareport/downloadIcon.svg",
      downloadImage1: "assets/img/datareport/downloadIcon1.svg",
    },
    {
      id: 5,
      title: "My Report",
      image: "assets/img/datareport/pdfFileIcon.svg",
      image1: "assets/img/datareport/pdfFileIcon1.svg",
      downloadImage: "assets/img/datareport/downloadIcon.svg",
      downloadImage1: "assets/img/datareport/downloadIcon1.svg",
    },
    {
      id: 6,
      title: "My Report",
      image: "assets/img/datareport/pdfFileIcon.svg",
      image1: "assets/img/datareport/pdfFileIcon1.svg",
      downloadImage: "assets/img/datareport/downloadIcon.svg",
      downloadImage1: "assets/img/datareport/downloadIcon1.svg",
    },
    // {
    //   id: 7,
    //   title: "My Report",
    //   image: "assets/img/datareport/pdfFileIcon.svg",
    //   image1: "assets/img/datareport/pdfFileIcon1.svg",
    //   downloadImage: "assets/img/datareport/downloadIcon.svg",
    //   downloadImage1: "assets/img/datareport/downloadIcon1.svg",
    // },
    // {
    //   id: 8,
    //   title: "My Report",
    //   image: "assets/img/datareport/pdfFileIcon.svg",
    //   image1: "assets/img/datareport/pdfFileIcon1.svg",
    //   downloadImage: "assets/img/datareport/downloadIcon.svg",
    //   downloadImage1: "assets/img/datareport/downloadIcon1.svg",
    // },
    // {
    //   id: 9,
    //   title: "My Report",
    //   image: "assets/img/datareport/pdfFileIcon.svg",
    //   image1: "assets/img/datareport/pdfFileIcon1.svg",
    //   downloadImage: "assets/img/datareport/downloadIcon.svg",
    //   downloadImage1: "assets/img/datareport/downloadIcon1.svg",
    // },
    // {
    //   id: 10,
    //   title: "My Report",
    //   image: "assets/img/datareport/pdfFileIcon.svg",
    //   image1: "assets/img/datareport/pdfFileIcon1.svg",
    //   downloadImage: "assets/img/datareport/downloadIcon.svg",
    //   downloadImage1: "assets/img/datareport/downloadIcon1.svg",
    // },
    // {
    //   id: 11,
    //   title: "My Report",
    //   image: "assets/img/datareport/pdfFileIcon.svg",
    //   image1: "assets/img/datareport/pdfFileIcon1.svg",
    //   downloadImage: "assets/img/datareport/downloadIcon.svg",
    //   downloadImage1: "assets/img/datareport/downloadIcon1.svg",
    // },
    // {
    //   id: 12,
    //   title: "My Report",
    //   image: "assets/img/datareport/pdfFileIcon.svg",
    //   image1: "assets/img/datareport/pdfFileIcon1.svg",
    //   downloadImage: "assets/img/datareport/downloadIcon.svg",
    //   downloadImage1: "assets/img/datareport/downloadIcon1.svg",
    // },
    // {
    //   id: 13,
    //   title: "My Report",
    //   image: "assets/img/datareport/pdfFileIcon.svg",
    //   image1: "assets/img/datareport/pdfFileIcon1.svg",
    //   downloadImage: "assets/img/datareport/downloadIcon.svg",
    //   downloadImage1: "assets/img/datareport/downloadIcon1.svg",
    // },
    // {
    //   id: 14,
    //   title: "My Report",
    //   image: "assets/img/datareport/pdfFileIcon.svg",
    //   image1: "assets/img/datareport/pdfFileIcon1.svg",
    //   downloadImage: "assets/img/datareport/downloadIcon.svg",
    //   downloadImage1: "assets/img/datareport/downloadIcon1.svg",
    // },
    // {
    //   id: 15,
    //   title: "My Report",
    //   image: "assets/img/datareport/pdfFileIcon.svg",
    //   image1: "assets/img/datareport/pdfFileIcon1.svg",
    //   downloadImage: "assets/img/datareport/downloadIcon.svg",
    //   downloadImage1: "assets/img/datareport/downloadIcon1.svg",
    // },
    // {
    //   id: 16,
    //   title: "My Report",
    //   image: "assets/img/datareport/pdfFileIcon.svg",
    //   image1: "assets/img/datareport/pdfFileIcon1.svg",
    //   downloadImage: "assets/img/datareport/downloadIcon.svg",
    //   downloadImage1: "assets/img/datareport/downloadIcon1.svg",
    // },
    // {
    //   id: 17,
    //   title: "My Report",
    //   image: "assets/img/datareport/pdfFileIcon.svg",
    //   image1: "assets/img/datareport/pdfFileIcon1.svg",
    //   downloadImage: "assets/img/datareport/downloadIcon.svg",
    //   downloadImage1: "assets/img/datareport/downloadIcon1.svg",
    // },
    // {
    //   id: 18,
    //   title: "My Report",
    //   image: "assets/img/datareport/pdfFileIcon.svg",
    //   image1: "assets/img/datareport/pdfFileIcon1.svg",
    //   downloadImage: "assets/img/datareport/downloadIcon.svg",
    //   downloadImage1: "assets/img/datareport/downloadIcon1.svg",
    // },
    // {
    //   id: 19,
    //   title: "My Report",
    //   image: "assets/img/datareport/pdfFileIcon.svg",
    //   image1: "assets/img/datareport/pdfFileIcon1.svg",
    //   downloadImage: "assets/img/datareport/downloadIcon.svg",
    //   downloadImage1: "assets/img/datareport/downloadIcon1.svg",
    // },
    // {
    //   id: 20,
    //   title: "My Report",
    //   image: "assets/img/datareport/pdfFileIcon.svg",
    //   image1: "assets/img/datareport/pdfFileIcon1.svg",
    //   downloadImage: "assets/img/datareport/downloadIcon.svg",
    //   downloadImage1: "assets/img/datareport/downloadIcon1.svg",
    // },
    // {
    //   id: 21,
    //   title: "My Report",
    //   image: "assets/img/datareport/pdfFileIcon.svg",
    //   image1: "assets/img/datareport/pdfFileIcon1.svg",
    //   downloadImage: "assets/img/datareport/downloadIcon.svg",
    //   downloadImage1: "assets/img/datareport/downloadIcon1.svg",
    // },
    // {
    //   id: 22,
    //   title: "My Report",
    //   image: "assets/img/datareport/pdfFileIcon.svg",
    //   image1: "assets/img/datareport/pdfFileIcon1.svg",
    //   downloadImage: "assets/img/datareport/downloadIcon.svg",
    //   downloadImage1: "assets/img/datareport/downloadIcon1.svg",
    // },
    // {
    //   id: 23,
    //   title: "My Report",
    //   image: "assets/img/datareport/pdfFileIcon.svg",
    //   image1: "assets/img/datareport/pdfFileIcon1.svg",
    //   downloadImage: "assets/img/datareport/downloadIcon.svg",
    //   downloadImage1: "assets/img/datareport/downloadIcon1.svg",
    // },
    // {
    //   id: 24,
    //   title: "My Report",
    //   image: "assets/img/datareport/pdfFileIcon.svg",
    //   image1: "assets/img/datareport/pdfFileIcon1.svg",
    //   downloadImage: "assets/img/datareport/downloadIcon.svg",
    //   downloadImage1: "assets/img/datareport/downloadIcon1.svg",
    // },
    // {
    //   id: 25,
    //   title: "My Report",
    //   image: "assets/img/datareport/pdfFileIcon.svg",
    //   image1: "assets/img/datareport/pdfFileIcon1.svg",
    //   downloadImage: "assets/img/datareport/downloadIcon.svg",
    //   downloadImage1: "assets/img/datareport/downloadIcon1.svg",
    // },
    // {
    //   id: 26,
    //   title: "My Report",
    //   image: "assets/img/datareport/pdfFileIcon.svg",
    //   image1: "assets/img/datareport/pdfFileIcon1.svg",
    //   downloadImage: "assets/img/datareport/downloadIcon.svg",
    //   downloadImage1: "assets/img/datareport/downloadIcon1.svg",
    // },
  ];
  const myReports1 = [
    {
      id: 7,
      title: "My Report",
      image: "assets/img/datareport/pdfFileIcon.svg",
      image1: "assets/img/datareport/pdfFileIcon1.svg",
      downloadImage: "assets/img/datareport/downloadIcon.svg",
      downloadImage1: "assets/img/datareport/downloadIcon1.svg",
    },
    {
      id: 8,
      title: "My Report",
      image: "assets/img/datareport/pdfFileIcon.svg",
      image1: "assets/img/datareport/pdfFileIcon1.svg",
      downloadImage: "assets/img/datareport/downloadIcon.svg",
      downloadImage1: "assets/img/datareport/downloadIcon1.svg",
    },
    {
      id: 9,
      title: "My Report",
      image: "assets/img/datareport/pdfFileIcon.svg",
      image1: "assets/img/datareport/pdfFileIcon1.svg",
      downloadImage: "assets/img/datareport/downloadIcon.svg",
      downloadImage1: "assets/img/datareport/downloadIcon1.svg",
    },
    {
      id: 10,
      title: "My Report",
      image: "assets/img/datareport/pdfFileIcon.svg",
      image1: "assets/img/datareport/pdfFileIcon1.svg",
      downloadImage: "assets/img/datareport/downloadIcon.svg",
      downloadImage1: "assets/img/datareport/downloadIcon1.svg",
    },
    {
      id: 11,
      title: "My Report",
      image: "assets/img/datareport/pdfFileIcon.svg",
      image1: "assets/img/datareport/pdfFileIcon1.svg",
      downloadImage: "assets/img/datareport/downloadIcon.svg",
      downloadImage1: "assets/img/datareport/downloadIcon1.svg",
    },
    {
      id: 12,
      title: "My Report",
      image: "assets/img/datareport/pdfFileIcon.svg",
      image1: "assets/img/datareport/pdfFileIcon1.svg",
      downloadImage: "assets/img/datareport/downloadIcon.svg",
      downloadImage1: "assets/img/datareport/downloadIcon1.svg",
    },
    {
      id: 13,
      title: "My Report",
      image: "assets/img/datareport/pdfFileIcon.svg",
      image1: "assets/img/datareport/pdfFileIcon1.svg",
      downloadImage: "assets/img/datareport/downloadIcon.svg",
      downloadImage1: "assets/img/datareport/downloadIcon1.svg",
    },
    // {
    //   id: 7,
    //   title: "My Report",
    //   image: "assets/img/datareport/pdfFileIcon.svg",
    //   image1: "assets/img/datareport/pdfFileIcon1.svg",
    //   downloadImage: "assets/img/datareport/downloadIcon.svg",
    //   downloadImage1: "assets/img/datareport/downloadIcon1.svg",
    // },
    // {
    //   id: 8,
    //   title: "My Report",
    //   image: "assets/img/datareport/pdfFileIcon.svg",
    //   image1: "assets/img/datareport/pdfFileIcon1.svg",
    //   downloadImage: "assets/img/datareport/downloadIcon.svg",
    //   downloadImage1: "assets/img/datareport/downloadIcon1.svg",
    // },
    // {
    //   id: 9,
    //   title: "My Report",
    //   image: "assets/img/datareport/pdfFileIcon.svg",
    //   image1: "assets/img/datareport/pdfFileIcon1.svg",
    //   downloadImage: "assets/img/datareport/downloadIcon.svg",
    //   downloadImage1: "assets/img/datareport/downloadIcon1.svg",
    // },
    // {
    //   id: 10,
    //   title: "My Report",
    //   image: "assets/img/datareport/pdfFileIcon.svg",
    //   image1: "assets/img/datareport/pdfFileIcon1.svg",
    //   downloadImage: "assets/img/datareport/downloadIcon.svg",
    //   downloadImage1: "assets/img/datareport/downloadIcon1.svg",
    // },
    // {
    //   id: 11,
    //   title: "My Report",
    //   image: "assets/img/datareport/pdfFileIcon.svg",
    //   image1: "assets/img/datareport/pdfFileIcon1.svg",
    //   downloadImage: "assets/img/datareport/downloadIcon.svg",
    //   downloadImage1: "assets/img/datareport/downloadIcon1.svg",
    // },
    // {
    //   id: 12,
    //   title: "My Report",
    //   image: "assets/img/datareport/pdfFileIcon.svg",
    //   image1: "assets/img/datareport/pdfFileIcon1.svg",
    //   downloadImage: "assets/img/datareport/downloadIcon.svg",
    //   downloadImage1: "assets/img/datareport/downloadIcon1.svg",
    // },
    // {
    //   id: 13,
    //   title: "My Report",
    //   image: "assets/img/datareport/pdfFileIcon.svg",
    //   image1: "assets/img/datareport/pdfFileIcon1.svg",
    //   downloadImage: "assets/img/datareport/downloadIcon.svg",
    //   downloadImage1: "assets/img/datareport/downloadIcon1.svg",
    // },
    // {
    //   id: 14,
    //   title: "My Report",
    //   image: "assets/img/datareport/pdfFileIcon.svg",
    //   image1: "assets/img/datareport/pdfFileIcon1.svg",
    //   downloadImage: "assets/img/datareport/downloadIcon.svg",
    //   downloadImage1: "assets/img/datareport/downloadIcon1.svg",
    // },
    // {
    //   id: 15,
    //   title: "My Report",
    //   image: "assets/img/datareport/pdfFileIcon.svg",
    //   image1: "assets/img/datareport/pdfFileIcon1.svg",
    //   downloadImage: "assets/img/datareport/downloadIcon.svg",
    //   downloadImage1: "assets/img/datareport/downloadIcon1.svg",
    // },
    // {
    //   id: 16,
    //   title: "My Report",
    //   image: "assets/img/datareport/pdfFileIcon.svg",
    //   image1: "assets/img/datareport/pdfFileIcon1.svg",
    //   downloadImage: "assets/img/datareport/downloadIcon.svg",
    //   downloadImage1: "assets/img/datareport/downloadIcon1.svg",
    // },
    // {
    //   id: 17,
    //   title: "My Report",
    //   image: "assets/img/datareport/pdfFileIcon.svg",
    //   image1: "assets/img/datareport/pdfFileIcon1.svg",
    //   downloadImage: "assets/img/datareport/downloadIcon.svg",
    //   downloadImage1: "assets/img/datareport/downloadIcon1.svg",
    // },
    // {
    //   id: 18,
    //   title: "My Report",
    //   image: "assets/img/datareport/pdfFileIcon.svg",
    //   image1: "assets/img/datareport/pdfFileIcon1.svg",
    //   downloadImage: "assets/img/datareport/downloadIcon.svg",
    //   downloadImage1: "assets/img/datareport/downloadIcon1.svg",
    // },
    // {
    //   id: 19,
    //   title: "My Report",
    //   image: "assets/img/datareport/pdfFileIcon.svg",
    //   image1: "assets/img/datareport/pdfFileIcon1.svg",
    //   downloadImage: "assets/img/datareport/downloadIcon.svg",
    //   downloadImage1: "assets/img/datareport/downloadIcon1.svg",
    // },
    // {
    //   id: 20,
    //   title: "My Report",
    //   image: "assets/img/datareport/pdfFileIcon.svg",
    //   image1: "assets/img/datareport/pdfFileIcon1.svg",
    //   downloadImage: "assets/img/datareport/downloadIcon.svg",
    //   downloadImage1: "assets/img/datareport/downloadIcon1.svg",
    // },
    // {
    //   id: 21,
    //   title: "My Report",
    //   image: "assets/img/datareport/pdfFileIcon.svg",
    //   image1: "assets/img/datareport/pdfFileIcon1.svg",
    //   downloadImage: "assets/img/datareport/downloadIcon.svg",
    //   downloadImage1: "assets/img/datareport/downloadIcon1.svg",
    // },
    // {
    //   id: 22,
    //   title: "My Report",
    //   image: "assets/img/datareport/pdfFileIcon.svg",
    //   image1: "assets/img/datareport/pdfFileIcon1.svg",
    //   downloadImage: "assets/img/datareport/downloadIcon.svg",
    //   downloadImage1: "assets/img/datareport/downloadIcon1.svg",
    // },
    // {
    //   id: 23,
    //   title: "My Report",
    //   image: "assets/img/datareport/pdfFileIcon.svg",
    //   image1: "assets/img/datareport/pdfFileIcon1.svg",
    //   downloadImage: "assets/img/datareport/downloadIcon.svg",
    //   downloadImage1: "assets/img/datareport/downloadIcon1.svg",
    // },
    // {
    //   id: 24,
    //   title: "My Report",
    //   image: "assets/img/datareport/pdfFileIcon.svg",
    //   image1: "assets/img/datareport/pdfFileIcon1.svg",
    //   downloadImage: "assets/img/datareport/downloadIcon.svg",
    //   downloadImage1: "assets/img/datareport/downloadIcon1.svg",
    // },
    // {
    //   id: 25,
    //   title: "My Report",
    //   image: "assets/img/datareport/pdfFileIcon.svg",
    //   image1: "assets/img/datareport/pdfFileIcon1.svg",
    //   downloadImage: "assets/img/datareport/downloadIcon.svg",
    //   downloadImage1: "assets/img/datareport/downloadIcon1.svg",
    // },
    // {
    //   id: 26,
    //   title: "My Report",
    //   image: "assets/img/datareport/pdfFileIcon.svg",
    //   image1: "assets/img/datareport/pdfFileIcon1.svg",
    //   downloadImage: "assets/img/datareport/downloadIcon.svg",
    //   downloadImage1: "assets/img/datareport/downloadIcon1.svg",
    // },
  ];
  const handleHoverDataNav = (nav) => {
    setHoverDataNav(nav);
  };
  const handleHoverDataNavOut = () => {
    setHoverDataNav(null);
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
                REPORT INFO
              </label>
              <img
                alt="Close"
                src="assets/img/datadashboard/close.svg"
                onClick={handleCloseModal}
                style={{ cursor: "pointer" }}
              />
            </div>
            <div className="pt-3 container">
              <div className="d-flex align-items-center">
                <label className={[`mr-3`, classes.popUpFormLabel].join(" ")}>
                  Report Name
                </label>
                <input
                  type="text"
                  className={classes.popUpFormInput}
                  placeholder="Report 1"
                />
              </div>
              <div className="d-flex mt-3 align-items-center">
                <label className={[`mr-3`, classes.popUpFormLabel].join(" ")}>
                  Sensor / Group
                </label>
                <div className="d-flex" style={{ flex: 1 }}>
                  <div
                    className="d-flex align-items-center mr-2"
                    style={{
                      flex: 1,
                      border: "solid 1px #888",
                      padding: "5px",
                      borderRadius: "5px",
                    }}
                  >
                    <img
                      src="assets/img/allsensors/allsensorsgroup/strain.svg"
                      style={{ maxWidth: "12px" }}
                    />
                    {/* <img class="fas fa-tachometer-alt mr-2"></img> */}

                    <input placeholder="Strain" style={{ border: "none" }} />
                  </div>
                  <div
                    className="d-flex align-items-center"
                    style={{
                      flex: 1,
                      border: "solid 1px #888",
                      padding: "5px",
                      borderRadius: "5px",
                    }}
                  >
                    {/* <i class="fas fa-tachometer-alt mr-2"></i> */}

                    <input placeholder="Group 1" style={{ border: "none" }} />
                  </div>
                </div>
              </div>
              {/* <div className="d-flex align-items-center mt-3">
                <label
                  className={[`mr-3`, classes.strainLabel].join(" ")}
                ></label>
                <div
                  className={[`d-flex`, classes.popUpFormInputDiv].join(" ")}
                  style={{ border: "none" }}
                >
                  <div className="d-flex">
                    <div
                      className={[
                        `d-flex`,
                        `flex-column`,
                        `justify-content-center`,
                        `align-items-center`,
                        `mr-3`,
                        classes.strainTile,
                      ].join(" ")}
                    >
                      <img
                        alt="Choose Sensor"
                        src="assets/img/home1/addIcon.svg"
                      />
                      <label
                        className={[
                          `noMarginBottom`,
                          `pt-3`,
                          classes.strainTileText,
                        ].join(" ")}
                      >
                        Strain
                      </label>
                    </div>
                  </div>
                </div>
              </div> */}

              <div className="d-flex mt-3 align-items-center">
                <label
                  className="mr-4 noMarginBottom"
                  style={{ width: "110px" }}
                >
                  Start Date:
                </label>
                <div className={classes.dataReportStartDateDiv}>
                  <label
                    className={[
                      `noMarginBottom`,
                      classes.dataReportStartDateLabel,
                    ].join(" ")}
                  >
                    10/15/2020
                  </label>
                </div>
              </div>
              <div className="d-flex mt-3 align-items-center">
                <label
                  className="mr-4 noMarginBottom"
                  style={{ width: "110px" }}
                >
                  Start Time:
                </label>
                <div className={classes.dataReportStartDateDiv}>
                  <label
                    className={[
                      `noMarginBottom`,
                      classes.dataReportStartDateLabel,
                    ].join(" ")}
                  >
                    12:46:00
                  </label>
                </div>
              </div>
              <div className="d-flex mt-3 align-items-center">
                <label
                  className="mr-4 noMarginBottom"
                  style={{ width: "110px" }}
                >
                  Span:
                </label>
                <div className={classes.dataReportStartDateDiv}>
                  <label
                    className={[
                      `noMarginBottom`,
                      classes.dataReportStartDateLabel,
                    ].join(" ")}
                  >
                    1 Hour
                  </label>
                </div>
              </div>
              <div className="d-flex mt-3 align-items-center">
                <label
                  className="mr-4 noMarginBottom"
                  style={{ width: "110px" }}
                >
                  File Type:
                </label>
                <div className={classes.dataReportStartDateDiv}>
                  <label
                    className={[
                      `noMarginBottom`,
                      classes.dataReportStartDateLabel,
                    ].join(" ")}
                  >
                    PDF
                  </label>
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
                    Download Report
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {isCreateReportModalOpen && (
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
                CREATE REPORT
              </label>
              <img
                alt="Close"
                src="assets/img/datadashboard/close.svg"
                onClick={handleCloseCreateReportModal}
                style={{ cursor: "pointer" }}
              />
            </div>
            <div className="pt-3 container">
              <div className="d-flex align-items-center">
                <label
                  style={{ width: "113px" }}
                  className={[`mr-3`, classes.popUpFormLabel].join(" ")}
                >
                  Report Name
                </label>
                <input
                  type="text"
                  className={classes.popUpFormInput}
                  placeholder="Report 1"
                />
              </div>
              <div className="d-flex mt-3 align-items-center">
                <label
                  className="mr-4 noMarginBottom"
                  style={{ width: "115px" }}
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

              <div className="d-flex mt-3 align-items-center">
                <label
                  className="mr-4 noMarginBottom"
                  style={{ width: "110px" }}
                >
                  Start Date:
                </label>
                <div className="row flex-column align-items-center">
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
              <div className="d-flex mt-3 align-items-center">
                <label
                  className="mr-4 noMarginBottom"
                  style={{ width: "110px" }}
                >
                  Start Time:
                </label>
                <div className="row flex-column align-items-center">
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
                        Select Start Time
                      </option>
                      <option>08:00:00</option>
                      <option>09:00:00</option>
                      <option>10:00:00</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="d-flex mt-3 align-items-center">
                <label
                  className="mr-4 noMarginBottom"
                  style={{ width: "110px" }}
                >
                  Span:
                </label>
                <div className="row flex-column align-items-center">
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
                        Select Span
                      </option>
                      <option>5 Min</option>
                      <option>1 Hr</option>
                      <option>5 Hr</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="d-flex mt-3 align-items-center">
                <label
                  className="mr-4 noMarginBottom"
                  style={{ width: "110px" }}
                >
                  File Type:
                </label>
                <div className="row flex-column align-items-center">
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
                        Select File Type
                      </option>
                      <option>PDF</option>
                      <option>Docs</option>
                      <option>XLXS</option>
                      <option>CSV</option>
                    </select>
                  </div>
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
                    Create Report
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <FullAppBar
        path={props.match.path}
        data="data"
        home={false}
        data={true}
        sensors={false}
        settings={false}
        accounts={false}
      />

      <div className="contentContainer">
        <SecAppBar title="Data" subTitle="Report" routes={routes} />
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
              style={{ padding: "0 15px" }}
              className="d-flex align-items-center mt-3 mb-3 pt-4"
            >
              <div
                className="d-flex justify-content-between"
                style={{ flex: 7 }}
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
                  `d-flex`,
                  `justify-content-center`,
                  `align-items-center`,
                  classes.addSensorButton,
                ].join(" ")}
              >
                <label
                  className={[
                    `noMarginBottom`,
                    // `ml-5`,
                  ].join(" ")}
                  onClick={handleToggleCreateReportModal}
                >
                  CREATE REPORT
                </label>
              </div>
            </div>

            <div
              className={[
                `col-12`,
                `d-flex`,
                `flex-wrap`,
                // `flex-column`,
                // `justify-content-center`,
                // `align-items-center`,
                classes.addReportContainer,
              ].join(" ")}
            >
              {myReports.map((report, j) => {
                return (
                  <div className="col mb-4">
                    <div
                      className={[
                        `d-flex`,
                        `flex-column`,
                        `justify-content-center`,
                        classes.reportTileMainDiv,
                      ].join(" ")}
                      onClick={handleToggleModal}
                      onMouseEnter={() => handleHoverDataNav(report.id)}
                      onMouseLeave={handleHoverDataNavOut}
                    >
                      <img
                        src={
                          report.id === hoverDataNav
                            ? report.image1
                            : report.image
                        }
                      />
                      <label
                        className={[
                          `noMarginBottom`,
                          `text-center`,
                          `pt-1`,
                          classes.reportTileLabel,
                        ].join(" ")}
                      >
                        {report.title}
                      </label>
                      <img
                        src={
                          report.id === hoverDataNav
                            ? report.downloadImage1
                            : report.downloadImage
                        }
                        // className="pb-2"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
            <div
              className={[
                `col-12`,
                `d-flex`,
                `flex-wrap`,
                // `flex-column`,
                // `justify-content-center`,
                // `align-items-center`,
                classes.addReportContainer,
              ].join(" ")}
            >
              {myReports1.map((report, j) => {
                return (
                  <div className="col mb-4">
                    <div
                      className={[
                        `d-flex`,
                        `flex-column`,
                        `justify-content-center`,
                        classes.reportTileMainDiv,
                      ].join(" ")}
                      onClick={handleToggleModal}
                      onMouseEnter={() => handleHoverDataNav(report.id)}
                      onMouseLeave={handleHoverDataNavOut}
                    >
                      <img
                        src={
                          report.id === hoverDataNav
                            ? report.image1
                            : report.image
                        }
                      />
                      <label
                        className={[
                          `noMarginBottom`,
                          `text-center`,
                          `pt-1`,
                          classes.reportTileLabel,
                        ].join(" ")}
                      >
                        {report.title}
                      </label>
                      <img
                        src={
                          report.id === hoverDataNav
                            ? report.downloadImage1
                            : report.downloadImage
                        }
                        // className="pb-2"
                      />
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

export default DataReport;
