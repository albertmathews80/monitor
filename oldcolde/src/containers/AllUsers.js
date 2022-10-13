import classes from "./AllUsers.module.css";
import React, { useState } from "react";
import FullAppBar from "../components/FullAppBar";
import SecAppBar from "../components/SecAppBar";
import "bootstrap/dist/css/bootstrap.min.css";

const AllUsers = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeUser, setActiveUser] = useState();
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

  const blackUser = "assets/img/allusers/person.svg";
  const whiteUser = "assets/img/allusers/person1.svg";
  const routes = [
    {
      title: "ALL USERS",
      link: "/all-users",
      isActive: true,
    },

    {
      title: "MANAGEMENT",
      link: "/user-management",
      isActive: false,
    },

    {
      title: "PAYMENTS",
      link: "/user-payment",
      isActive: false,
    },
  ];
  const users = [
    {
      id: 0,
      title: "User 1",
      image: "assets/img/allusers/person.svg",
      image1: "assets/img/allusers/person1.svg",
    },
    {
      id: 1,
      title: "User 1",
      image: "assets/img/allusers/person.svg",
      image1: "assets/img/allusers/person1.svg",
    },
    {
      id: 2,
      title: "User 1",
      image: "assets/img/allusers/person.svg",
      image1: "assets/img/allusers/person1.svg",
    },
    {
      id: 3,
      title: "User 1",
      image: "assets/img/allusers/person.svg",
      image1: "assets/img/allusers/person1.svg",
    },
    {
      id: 4,
      title: "User 1",
      image: "assets/img/allusers/person.svg",
      image1: "assets/img/allusers/person1.svg",
    },
    {
      id: 5,
      title: "User 1",
      image: "assets/img/allusers/person.svg",
      image1: "assets/img/allusers/person1.svg",
    },
    {
      id: 6,
      title: "User 1",
      image: "assets/img/allusers/person.svg",
      image1: "assets/img/allusers/person1.svg",
    },
    // {
    //   id: 7,
    //   title: "User 1",
    //   image: "assets/img/allusers/person.svg",
    //   image1: "assets/img/allusers/person1.svg",
    // },
    // {
    //   id: 8,
    //   title: "User 1",
    //   image: "assets/img/allusers/person.svg",
    //   image1: "assets/img/allusers/person1.svg",
    // },
    // {
    //   id: 9,
    //   title: "User 1",
    //   image: "assets/img/allusers/person.svg",
    //   image1: "assets/img/allusers/person1.svg",
    // },
    // {
    //   id: 10,
    //   title: "User 1",
    //   image: "assets/img/allusers/person.svg",
    //   image1: "assets/img/allusers/person1.svg",
    // },
    // {
    //   id: 11,
    //   title: "User 1",
    //   image: "assets/img/allusers/person.svg",
    //   image1: "assets/img/allusers/person1.svg",
    // },
    // {
    //   id: 12,
    //   title: "User 1",
    //   image: "assets/img/allusers/person.svg",
    //   image1: "assets/img/allusers/person1.svg",
    // },
    // {
    //   id: 13,
    //   title: "User 1",
    //   image: "assets/img/allusers/person.svg",
    //   image1: "assets/img/allusers/person1.svg",
    // },
    // {
    //   id: 14,
    //   title: "User 1",
    //   image: "assets/img/allusers/person.svg",
    //   image1: "assets/img/allusers/person1.svg",
    // },
    // {
    //   id: 15,
    //   title: "User 1",
    //   image: "assets/img/allusers/person.svg",
    //   image1: "assets/img/allusers/person1.svg",
    // },
    // {
    //   id: 16,
    //   title: "User 1",
    //   image: "assets/img/allusers/person.svg",
    //   image1: "assets/img/allusers/person1.svg",
    // },
    // {
    //   id: 17,
    //   title: "User 1",
    //   image: "assets/img/allusers/person.svg",
    //   image1: "assets/img/allusers/person1.svg",
    // },
    // {
    //   id: 18,
    //   title: "User 1",
    //   image: "assets/img/allusers/person.svg",
    //   image1: "assets/img/allusers/person1.svg",
    // },
    // {
    //   id: 19,
    //   title: "User 1",
    //   image: "assets/img/allusers/person.svg",
    //   image1: "assets/img/allusers/person1.svg",
    // },
    // {
    //   id: 20,
    //   title: "User 1",
    //   image: "assets/img/allusers/person.svg",
    //   image1: "assets/img/allusers/person1.svg",
    // },
    // {
    //   id: 21,
    //   title: "User 1",
    //   image: "assets/img/allusers/person.svg",
    //   image1: "assets/img/allusers/person1.svg",
    // },
    // {
    //   id: 22,
    //   title: "User 1",
    //   image: "assets/img/allusers/person.svg",
    //   image1: "assets/img/allusers/person1.svg",
    // },
    // {
    //   id: 23,
    //   title: "User 1",
    //   image: "assets/img/allusers/person.svg",
    //   image1: "assets/img/allusers/person1.svg",
    // },
    // {
    //   id: 24,
    //   title: "User 1",
    //   image: "assets/img/allusers/person.svg",
    //   image1: "assets/img/allusers/person1.svg",
    // },
    // {
    //   id: 25,
    //   title: "User 1",
    //   image: "assets/img/allusers/person.svg",
    //   image1: "assets/img/allusers/person1.svg",
    // },
    // {
    //   id: 26,
    //   title: "User 1",
    //   image: "assets/img/allusers/person.svg",
    //   image1: "assets/img/allusers/person1.svg",
    // },
  ];
  const users1 = [
    {
      id: 7,
      title: "User 1",
      image: "assets/img/allusers/person.svg",
      image1: "assets/img/allusers/person1.svg",
    },
    {
      id: 8,
      title: "User 1",
      image: "assets/img/allusers/person.svg",
      image1: "assets/img/allusers/person1.svg",
    },
    {
      id: 9,
      title: "User 1",
      image: "assets/img/allusers/person.svg",
      image1: "assets/img/allusers/person1.svg",
    },
    {
      id: 10,
      title: "User 1",
      image: "assets/img/allusers/person.svg",
      image1: "assets/img/allusers/person1.svg",
    },
    {
      id: 11,
      title: "User 1",
      image: "assets/img/allusers/person.svg",
      image1: "assets/img/allusers/person1.svg",
    },
    {
      id: 12,
      title: "User 1",
      image: "assets/img/allusers/person.svg",
      image1: "assets/img/allusers/person1.svg",
    },
    {
      id: 13,
      title: "User 1",
      image: "assets/img/allusers/person.svg",
      image1: "assets/img/allusers/person1.svg",
    },
    // {
    //   id: 7,
    //   title: "User 1",
    //   image: "assets/img/allusers/person.svg",
    //   image1: "assets/img/allusers/person1.svg",
    // },
    // {
    //   id: 8,
    //   title: "User 1",
    //   image: "assets/img/allusers/person.svg",
    //   image1: "assets/img/allusers/person1.svg",
    // },
    // {
    //   id: 9,
    //   title: "User 1",
    //   image: "assets/img/allusers/person.svg",
    //   image1: "assets/img/allusers/person1.svg",
    // },
    // {
    //   id: 10,
    //   title: "User 1",
    //   image: "assets/img/allusers/person.svg",
    //   image1: "assets/img/allusers/person1.svg",
    // },
    // {
    //   id: 11,
    //   title: "User 1",
    //   image: "assets/img/allusers/person.svg",
    //   image1: "assets/img/allusers/person1.svg",
    // },
    // {
    //   id: 12,
    //   title: "User 1",
    //   image: "assets/img/allusers/person.svg",
    //   image1: "assets/img/allusers/person1.svg",
    // },
    // {
    //   id: 13,
    //   title: "User 1",
    //   image: "assets/img/allusers/person.svg",
    //   image1: "assets/img/allusers/person1.svg",
    // },
    // {
    //   id: 14,
    //   title: "User 1",
    //   image: "assets/img/allusers/person.svg",
    //   image1: "assets/img/allusers/person1.svg",
    // },
    // {
    //   id: 15,
    //   title: "User 1",
    //   image: "assets/img/allusers/person.svg",
    //   image1: "assets/img/allusers/person1.svg",
    // },
    // {
    //   id: 16,
    //   title: "User 1",
    //   image: "assets/img/allusers/person.svg",
    //   image1: "assets/img/allusers/person1.svg",
    // },
    // {
    //   id: 17,
    //   title: "User 1",
    //   image: "assets/img/allusers/person.svg",
    //   image1: "assets/img/allusers/person1.svg",
    // },
    // {
    //   id: 18,
    //   title: "User 1",
    //   image: "assets/img/allusers/person.svg",
    //   image1: "assets/img/allusers/person1.svg",
    // },
    // {
    //   id: 19,
    //   title: "User 1",
    //   image: "assets/img/allusers/person.svg",
    //   image1: "assets/img/allusers/person1.svg",
    // },
    // {
    //   id: 20,
    //   title: "User 1",
    //   image: "assets/img/allusers/person.svg",
    //   image1: "assets/img/allusers/person1.svg",
    // },
    // {
    //   id: 21,
    //   title: "User 1",
    //   image: "assets/img/allusers/person.svg",
    //   image1: "assets/img/allusers/person1.svg",
    // },
    // {
    //   id: 22,
    //   title: "User 1",
    //   image: "assets/img/allusers/person.svg",
    //   image1: "assets/img/allusers/person1.svg",
    // },
    // {
    //   id: 23,
    //   title: "User 1",
    //   image: "assets/img/allusers/person.svg",
    //   image1: "assets/img/allusers/person1.svg",
    // },
    // {
    //   id: 24,
    //   title: "User 1",
    //   image: "assets/img/allusers/person.svg",
    //   image1: "assets/img/allusers/person1.svg",
    // },
    // {
    //   id: 25,
    //   title: "User 1",
    //   image: "assets/img/allusers/person.svg",
    //   image1: "assets/img/allusers/person1.svg",
    // },
    // {
    //   id: 26,
    //   title: "User 1",
    //   image: "assets/img/allusers/person.svg",
    //   image1: "assets/img/allusers/person1.svg",
    // },
  ];
  const userLevels = [
    {
      id: 1,
      title: "User",
    },
    {
      id: 2,
      title: "Admin",
    },
  ];
  const handleHoverDataNav = (nav) => {
    setHoverDataNav(nav);
  };
  const handleHoverDataNavOut = () => {
    setHoverDataNav(null);
  };
  const handleSelectUserLevel = (user) => {
    setActiveUser(user);
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
                USER INFO
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
                <label
                  style={{ width: "113px" }}
                  className={[`mr-3`, classes.popUpFormLabel].join(" ")}
                >
                  User Name
                </label>
                <input
                  disabled
                  type="text"
                  className={classes.popUpFormInput}
                  placeholder="User 1"
                />
              </div>
              <div className="mt-3 d-flex align-items-center">
                <label
                  style={{ width: "113px" }}
                  className={[`mr-3`, classes.popUpFormLabel].join(" ")}
                >
                  Email
                </label>
                <input
                  disabled
                  type="text"
                  className={classes.popUpFormInput}
                  placeholder="user@gmail.com"
                />
              </div>
              <div className="mt-3 d-flex align-items-center">
                <label
                  style={{ width: "113px" }}
                  className={[`mr-3`, classes.popUpFormLabel].join(" ")}
                >
                  Password
                </label>
                <input
                  disabled
                  type="password"
                  className={classes.popUpFormInput}
                  // placeholder="Report 1"
                />
              </div>
              <div className="mt-3 d-flex align-items-center">
                <label
                  style={{ width: "113px" }}
                  className={[`mr-3`, classes.popUpFormLabel].join(" ")}
                >
                  User Level
                </label>
                {/* <input
                type="password"
                className={classes.popUpFormInput}
                // placeholder="Report 1"
              /> */}
                <div className="d-flex">
                  {userLevels.map((level, i) => {
                    return (
                      <label
                        key={i}
                        className={[
                          `noMarginBottom`,
                          `mr-2`,
                          classes.userLevelLabel,
                          level.title === "User" && classes.activeUserLevel,
                        ].join(" ")}
                        // onClick={() => handleSelectUserLevel(level.id)}
                      >
                        {level.title}
                      </label>
                    );
                  })}
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
                    Add User
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
                CREATE USER
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
                  User Name
                </label>
                <input
                  type="text"
                  className={classes.popUpFormInput}
                  // placeholder="Report 1"
                />
              </div>
              <div className="mt-3 d-flex align-items-center">
                <label
                  style={{ width: "113px" }}
                  className={[`mr-3`, classes.popUpFormLabel].join(" ")}
                >
                  Email
                </label>
                <input
                  type="text"
                  className={classes.popUpFormInput}
                  // placeholder="Report 1"
                />
              </div>
              <div className="mt-3 d-flex align-items-center">
                <label
                  style={{ width: "113px" }}
                  className={[`mr-3`, classes.popUpFormLabel].join(" ")}
                >
                  Password
                </label>
                <input
                  type="password"
                  className={classes.popUpFormInput}
                  // placeholder="Report 1"
                />
              </div>
              <div className="mt-3 d-flex align-items-center">
                <label
                  style={{ width: "113px" }}
                  className={[`mr-3`, classes.popUpFormLabel].join(" ")}
                >
                  User Level
                </label>
                {/* <input
                  type="password"
                  className={classes.popUpFormInput}
                  // placeholder="Report 1"
                /> */}
                <div className="d-flex">
                  {userLevels.map((level, i) => {
                    return (
                      <label
                        key={i}
                        className={[
                          `noMarginBottom`,
                          `mr-2`,
                          classes.userLevelLabel,
                          level.id === activeUser
                            ? classes.activeUserLevel
                            : null,
                        ].join(" ")}
                        onClick={() => handleSelectUserLevel(level.id)}
                      >
                        {level.title}
                      </label>
                    );
                  })}
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
                    Add User
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
                      // placeholder="Find Sensor"
                    />
                    <button className={classes.formSubmitButton} type="submit">
                      FIND
                    </button>
                  </div>
                </form>
              </div>
              <label
                className={[
                  `noMarginBottom`,
                  classes.addSensorButton,
                ].join(" ")}
                onClick={handleToggleCreateReportModal}
                style={{marginLeft:"30px"}}
              >
                ADD USER
              </label>
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
              {users.map((report, j) => {
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
              {users1.map((report, j) => {
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

export default AllUsers;
