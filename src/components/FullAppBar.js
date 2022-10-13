import React, { useState } from "react";
import classes from "./FullAppBar.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { drop } from "lodash";

const FullAppBar = (props) => {
  const { path } = props;
  const [activeNav, setActiveNav] = useState(path);
  const [hoverNav, setHoverNav] = useState(path);
  const [userDropdown, setUserDropdown] = useState(false);
  const [userDropdownCliecked, setUserDropdownCliecked] = useState(false);
  const [hoverUserDropdown, setHoverUserDropdown] = useState();
  const [close, setClose] = useState(false);
  const handleHoverNav = (nav) => {
    setHoverNav(nav);
  };
  const handleHoverNavOut = () => {
    setHoverNav(path);
  };
  const userDownItems = [
    {
      id: 0,
      title: "Profile",
      image: "assets/img/appBar1/dropdown/profile.svg",
      image1: "assets/img/appBar1/dropdown/profile1.svg",
    },
    {
      id: 1,
      title: "Message",
      image: "assets/img/appBar1/dropdown/message.svg",
      image1: "assets/img/appBar1/dropdown/message1.svg",
    },
    {
      id: 2,
      title: "Settings",
      image: "assets/img/appBar1/dropdown/settings.svg",
      image1: "assets/img/appBar1/dropdown/settings1.svg",
    },
    {
      id: 3,
      title: "Logout",
      image: "assets/img/appBar1/dropdown/logout.svg",
      image1: "assets/img/appBar1/dropdown/logout1.svg",
    },
  ];
  const newNavTiles = [
    {
      title: "Home",
      image: "assets/img/appBar1/home.svg",
      image1: "assets/img/appBar1/home1.svg",
      link: "/",
      subpages: [],
      isActive: props.home,
    },
    {
      title: "Data",
      image: "assets/img/appBar1/data.svg",
      image1: "assets/img/appBar1/data1.svg",
      link: "/data-dashboard",
      subpages: ["/data-dashboard", "/data-report", "/data-analytics"],
      isActive: props.data,
    },
    {
      title: "Sensors",
      image: "assets/img/appBar1/sensor.svg",
      image1: "assets/img/appBar1/sensor1.svg",
      link: "/all-sensor",
      subpages: [
        "/add-sensor",
        "/all-sensor",
        "/find-sensor",
        "/add-sensor-group",
        "/all-threshold-policy",
        "/sensor-group-1",
      ],
      isActive: props.sensors,
    },
    {
      title: "Accounts",
      image: "assets/img/appBar1/accounts.svg",
      image1: "assets/img/appBar1/accounts1.svg",
      link: "/all-users",
      subpages: [
        "/all-users",
        // "/new-user",
        // "/existing-user",
        "/user-management",
        "/user-payment",
      ],
      isActive: props.accounts,
    },
    {
      title: "Settings",
      image: "assets/img/appBar1/settings.svg",
      image1: "assets/img/appBar1/settings1.svg",
      link: "/user-details",
      subpages: [
        "/user-details",
        "account-settings",
        "/notification-settings",
        "/theme-settings",
      ],
      isActive: props.settings,
    },
  ];
  // const navTiles = [
  //   {
  //     title: "Home",
  //     image: "assets/img/appBar/home.svg",
  //     link: "/",
  //     subpages: [],
  //     isActive: props.home,
  //   },
  //   {
  //     title: "Data",
  //     image: "assets/img/appBar/data.svg",
  //     link: "/data-dashboard",
  //     subpages: ["/data-dashboard", "/data-report", "data-analytics"],
  //     isActive: props.data,
  //   },
  //   {
  //     title: "Sensors",
  //     image: "assets/img/appBar/sensors.svg",
  //     link: "/add-sensor",
  //     subpages: [
  //       "/add-sensor",
  //       "/all-sensor",
  //       "/find-sensor",
  //       "/add-sensor-group",
  //     ],
  //     isActive: props.sensors,
  //   },
  //   {
  //     title: "Settings",
  //     image: "assets/img/appBar/settings.svg",
  //     link: "/user-details",
  //     subpages: [
  //       "/user-details",
  //       "account-settings",
  //       "/notification-settings",
  //       "/theme-settings",
  //     ],
  //     isActive: props.settings,
  //   },
  //   {
  //     title: "Accounts",
  //     image: "assets/img/appBar/accounts.svg",
  //     link: "/new-user",
  //     subpages: [
  //       "/new-user",
  //       "/existing-user",
  //       "/user-management",
  //       "/user-payment",
  //     ],
  //     isActive: props.accounts,
  //   },
  // ];
  const handleActiveTile = (nav) => {
    console.log("%%%%%%%%%%%%%%%%%%%%%%%%");
    console.log(nav);
    console.log("%%%%%%%%%%%%%%%%%%%%%%%%");
    setActiveNav(nav);
  };
  const handleUserDropDownHover = (dropdown) => {
    setHoverUserDropdown(dropdown.id);
  };
  const handleUserDowpDownClick = () => {
    setUserDropdownCliecked(!userDropdownCliecked);
    setUserDropdown(!userDropdown);
  };
  return (
    <div className={classes.FullAppBarMainDiv}>
      <div className={[`d-flex`, `justify-content-between`].join(" ")}>
        <div
          className={[`col-6`, `d-flex`, classes.fullAppBarLeftDiv].join(" ")}
        >
          <div style={{ minWidth: "270px", paddingTop: "10px" }}>
            <div
              className={[
                `d-flex`,
                `align-items-center`,
                `justify-content-between`,
                `col-5`,
                `mr-3`,
                classes.userInfoDivNew,
              ].join(" ")}
              style={{ minWidth: "100%" }}
            >
              <div className={classes.profileImageDiv}>
                <img
                  className={classes.profileImage}
                  alt="User"
                  src="assets/img/appBar/profileImage.svg"
                />
              </div>
              <div className={classes.profileContentDiv}>
                <div className="d-flex flex-column">
                  <label
                    style={{ fontSize: "12px" }}
                    className={[`noMarginBottom`]}
                  >
                    Welcome
                  </label>
                  <label
                    style={{ fontWeight: 600 }}
                    className={[`noMarginBottom`]}
                  >
                    Miroslav Minev
                  </label>
                </div>
              </div>
              <div>
                <div
                  // onClick={handleUserDowpDownClick}
                  className={[
                    // userDropdownCliecked && classes.userDropdownClicked,
                    classes.userDropdownDiv,
                  ].join(" ")}
                >
                  {/* <i
                    class={[
                      `fas`,
                      `fa-chevron-down`,
                      classes.profileDropDownButton,
                      userDropdownCliecked && classes.userDropdownClicked,
                      classes.userDropdown,
                    ].join(" ")}
                  ></i> */}
                </div>
                <div
                  style={{
                    transform: "translate(-132px, 10px)",
                    position: "absolute",
                    zIndex: 10,
                  }}
                >
                  {userDropdown && (
                    <div
                      className={[
                        `animate__animated`,
                        // `animate__zoomIn`,
                        // `animate__fadeIn`,
                        !close ? `animate__fadeIn` : `animate__fadeOut`,
                        classes.userProfileDropdown,
                      ].join(" ")}
                    >
                      {userDownItems.map((item, i) => {
                        return (
                          <div
                            className={classes.userProfileDropdownMainDiv}
                            onMouseEnter={() => handleUserDropDownHover(item)}
                            onMouseLeave={() => setHoverUserDropdown(false)}
                          >
                            <div
                              className={[
                                `d-flex`,
                                classes.userProfileDropdownItem,
                              ].join(" ")}
                            >
                              <div
                                className={classes.userProfileDropdownImageDiv}
                              >
                                <img
                                  alt={item.title}
                                  src={
                                    item.id === hoverUserDropdown
                                      ? item.image1
                                      : item.image
                                  }
                                />
                              </div>
                              <div>
                                <label
                                  className={[
                                    `noMarginBottom`,
                                    classes.userProfileDropdownLabel,
                                  ].join(" ")}
                                >
                                  {item.title}
                                </label>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          {/* <div
            className={[
              `d-flex`,
              `align-items-center`,
              `justify-content-between`,
              `mr-3`,
              classes.userInfoDiv,
            ].join(" ")}
            style={{ padding: "0px 30px" }}
          >
            <div className={classes.profileContentDiv}>
              <div className="d-flex flex-column">
                <label
                  style={{ fontSize: "12px" }}
                  className={[`noMarginBottom`, `text-center`].join(" ")}
                >
                  Sales
                </label>
                <label
                  style={{ fontWeight: 600 }}
                  className={[`noMarginBottom`, `text-center`].join(" ")}
                >
                  550
                </label>
              </div>
            </div>
          </div>
          <div
            className={[
              `d-flex`,
              `align-items-center`,
              `justify-content-between`,
              `mr-3`,
              classes.userInfoDiv,
            ].join(" ")}
            style={{ padding: "0px 25px" }}
          >
            <div className={classes.profileContentDiv}>
              <div className="d-flex flex-column">
                <label
                  style={{ fontSize: "12px" }}
                  className={[`noMarginBottom`, `text-center`].join(" ")}
                >
                  Orders
                </label>
                <label
                  style={{ fontWeight: 600 }}
                  className={[`noMarginBottom`, `text-center`].join(" ")}
                >
                  750
                </label>
              </div>
            </div>
          </div>
          <div
            className={[
              `d-flex`,
              `align-items-center`,
              `justify-content-between`,

              classes.userInfoDiv,
            ].join(" ")}
            style={{ padding: "0px 25px" }}
          >
            <div className={classes.profileContentDiv}>
              <div className="d-flex flex-column">
                <label
                  style={{ fontSize: "12px" }}
                  className={[`noMarginBottom`, `text-center`].join(" ")}
                >
                  Earned
                </label>
                <label
                  style={{ fontWeight: 600 }}
                  className={[`noMarginBottom`, `text-center`].join(" ")}
                >
                  $1200
                </label>
              </div>
            </div>
          </div> */}
        </div>
        <div
          className={[
            `col-6`,
            `d-flex`,
            `justify-content-end`,
            classes.fullAppBarRightDiv,
          ].join(" ")}
          style={{ padding: "10px 11px" }}
        >
          {/* {
            console.log(path)
          } */}
          {newNavTiles.map((tile, i) => {
            return (
              <Link
                to={tile.link}
                key={i}
                onMouseEnter={() => handleHoverNav(tile.link)}
                onMouseLeave={handleHoverNavOut}
                onClick={() => handleActiveTile(tile)}
              >
                <div
                  className={[
                    `d-flex`,
                    `align-items-center`,
                    `justify-content-between`,
                    `flex-column`,
                    `ml-3`,
                    classes.userInfoDiv,
                    tile.isActive && classes.activeTile,
                  ].join(" ")}
                  // style={{ padding: "0px 20px" }}
                >
                  <div className={classes.profileContentDiv}>
                    <div className="d-flex flex-column">
                      <img
                        alt={tile.title}
                        className={[`mb-3`, `mt-3`, classes.tileImage].join(
                          " "
                        )}
                        // src={tile.image}
                        src={
                          tile.link === path ||
                          tile.link === hoverNav ||
                          tile.subpages.includes(path) ||
                          activeNav.title === tile.title
                            ? tile.image1
                            : tile.image
                        }
                      />
                      <label
                        style={{ fontWeight: 600 }}
                        className={[
                          `noMarginBottom`,
                          `text-center`,
                          classes.fullAppBarRightDivLabel,
                          tile.isActive && classes.activeTileLabel,
                        ].join(" ")}
                      >
                        {tile.title}
                      </label>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
          {/* <div
            className={[
              `d-flex`,
              `align-items-center`,
              `justify-content-between`,
              `flex-column`,
              `mr-3`,
              classes.userInfoDiv,
            ].join(" ")}
            // style={{ padding: "0px 20px" }}
          >
            <div className={classes.profileContentDiv}>
              <div className="d-flex flex-column">
                <img
                  alt="Home"
                  className={[`mb-3`, `mt-3`, classes.tileImage].join(" ")}
                  src="assets/img/appBar/home.svg"
                />
                <label
                  style={{ fontWeight: 600 }}
                  className={[
                    `noMarginBottom`,
                    `text-center`,
                    classes.fullAppBarRightDivLabel,
                  ].join(" ")}
                >
                  Home
                </label>
              </div>
            </div>
          </div> */}
          {/* <div
            className={[
              `d-flex`,
              `align-items-center`,
              `justify-content-between`,
              `flex-column`,
              `mr-3`,
              classes.userInfoDiv,
            ].join(" ")}
            // style={{ padding: "0px 30px" }}
          >
            <div className={classes.profileContentDiv}>
              <div className="d-flex flex-column">
                <img
                  alt="Home"
                  className={[`mb-3`, `mt-3`, classes.tileImage].join(" ")}
                  src="assets/img/appBar/data.svg"
                />
                <label
                  style={{ fontWeight: 600 }}
                  className={[
                    `noMarginBottom`,
                    `text-center`,
                    classes.fullAppBarRightDivLabel,
                  ].join(" ")}
                >
                  Data
                </label>
              </div>
            </div>
          </div>
          <div
            className={[
              `d-flex`,
              `align-items-center`,
              `justify-content-between`,
              `flex-column`,
              `mr-3`,
              classes.userInfoDiv,
            ].join(" ")}
            // style={{ padding: "0px 15px" }}
          >
            <div className={classes.profileContentDiv}>
              <div className="d-flex flex-column">
                <img
                  alt="Home"
                  className={[`mb-3`, `mt-3`, classes.tileImage].join(" ")}
                  src="assets/img/appBar/sensors.svg"
                />
                <label
                  style={{ fontWeight: 600 }}
                  className={[
                    `noMarginBottom`,
                    `text-center`,
                    classes.fullAppBarRightDivLabel,
                  ].join(" ")}
                >
                  Sensors
                </label>
              </div>
            </div>
          </div>
          <div
            className={[
              `d-flex`,
              `align-items-center`,
              `justify-content-between`,
              `flex-column`,
              `mr-3`,
              classes.userInfoDiv,
            ].join(" ")}
            // style={{ padding: "0px 15px" }}
          >
            <div className={classes.profileContentDiv}>
              <div className="d-flex flex-column">
                <img
                  alt="Home"
                  className={[`mb-3`, `mt-3`, classes.tileImage].join(" ")}
                  src="assets/img/appBar/account.svg"
                />
                <label
                  style={{ fontWeight: 600 }}
                  className={[
                    `noMarginBottom`,
                    `text-center`,
                    classes.fullAppBarRightDivLabel,
                  ].join(" ")}
                >
                  Account
                </label>
              </div>
            </div>
          </div>
          <div
            className={[
              `d-flex`,
              `align-items-center`,
              `justify-content-between`,
              `flex-column`,

              classes.userInfoDiv,
            ].join(" ")}
            // style={{ padding: "0px 25px" }}
          >
            <div className={classes.profileContentDiv}>
              <div className="d-flex flex-column">
                <img
                  alt="Home"
                  className={[`mb-3`, `mt-3`, classes.tileImage].join(" ")}
                  src="assets/img/appBar/control.svg"
                />
                <label
                  style={{ fontWeight: 600 }}
                  className={[
                    `noMarginBottom`,
                    `text-center`,
                    classes.fullAppBarRightDivLabel,
                  ].join(" ")}
                >
                  Control
                </label>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default FullAppBar;
