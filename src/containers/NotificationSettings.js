import classes from "./NotificationSettings.module.css";
import React, { useState } from "react";
import FullAppBar from "../components/FullAppBar";
import SecAppBar from "../components/SecAppBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const NotificationSettings = (props) => {
  const path = props.match.path;
  const [isHoveredLeftPanelTile, setIsHoveredLeftPanelTile] = useState();
  const socialIcons = [
    {
      label: "facebook",
      image: "assets/img/userdetails/facebook.svg",
    },
    {
      label: "twitter",
      image: "assets/img/userdetails/twitter.svg",
    },
    {
      label: "digital",
      image: "assets/img/userdetails/digitalocean.svg",
    },
    {
      label: "insta",
      image: "assets/img/userdetails/insta.svg",
    },
  ];
  const routes = [
    {
      title: "FEEDS",
      link: "/user-details",
      isActive: false,
    },
    {
      title: "NOTIFICATION SETTINGS",
      link: "/notification-settings",
      isActive: true,
    },
    {
      title: "THEME SETTINGS",
      link: "/theme-settings",
      isActive: false,
    },
  ];
  const leftTiles = [
    {
      title: "USER DETAILS",
      link: "/user-details",
      image: "assets/img/userdetails/settings.svg",
      isActive: false,
    },
    {
      title: "ACCOUNT SETTINGS",
      link: "/account-settings",
      image: "assets/img/userdetails/settings.svg",
      isActive: false,
    },
  ];
  const rightTiles = [
    {
      title: "PHOTOS",
      // link: "/user-details",
      image: "assets/img/userdetails/photos.svg",
      isActive: false,
    },
    {
      title: "LIKES",
      // link: "/profile-settings",
      image: "assets/img/userdetails/likes.svg",
      isActive: false,
    },
    {
      title: "COMMENTS",
      // link: "/user-details",
      image: "assets/img/userdetails/comments.svg",
      isActive: false,
    },
    {
      title: "PROFILE VIEWS",
      // link: "/profile-settings",
      image: "assets/img/userdetails/profileViews.svg",
      isActive: false,
    },
    {
      title: "WEBSITE VIEWS",
      // link: "/user-details",
      image: "assets/img/userdetails/websiteViews.svg",
      isActive: false,
    },
    {
      title: "ATTACHMENT",
      // link: "/profile-settings",
      image: "assets/img/userdetails/attachment.svg",
      isActive: false,
    },
  ];
  const leftPanelTiles = [
    {
      id: 0,
      title: "Feeds",
      image: "assets/img/userDetails1/feed.svg",
      image1: "assets/img/userDetails1/feed1.svg",
      link: "/user-details",
    },
    {
      id: 1,
      title: "User Info",
      image: "assets/img/userDetails1/userInfo.svg",
      image1: "assets/img/userDetails1/userInfo1.svg",
      link: "/account-settings",
    },
    {
      id: 2,
      title: "Notes",
      image: "assets/img/userDetails1/notes.svg",
      image1: "assets/img/userDetails1/notes1.svg",
    },
    {
      id: 3,
      title: "Attachments",
      image: "assets/img/userDetails1/attachments.svg",
      image1: "assets/img/userDetails1/attachments1.svg",
    },
  ];
  const handleHoverLeftPanelTile = (tile) => {
    setIsHoveredLeftPanelTile(tile);
  };
  const handleRemoveHoverLeftPanelTile = () => {
    setIsHoveredLeftPanelTile(null);
  };
  return (
    <div>
      <FullAppBar
        path={props.match.path}
        home={false}
        data={false}
        sensors={false}
        settings={true}
        accounts={false}
      />

      <div className="contentContainer">
        <SecAppBar
          title="Settings"
          subTitle="Notification Settings"
          routes={routes}
        />
        <div className="home-container col contentContainer">
          <div
            className=" mt-5"
            style={{
              margin: "0 20px",
              padding: "15px 25px",
            }}
          >
            <div className="d-flex">
              <div className="">
                <div
                  className={[
                    `col-12`,
                    `d-flex`,
                    `pb-4`,
                    `flex-column`,
                    `align-items-center`,
                    classes.profileImageDiv,
                  ].join(" ")}
                >
                  <img
                    src="assets/img/userdetails/user.png"
                    className="mt-4"
                    alt="User"
                  />
                  <label
                    className={[
                      `noMarginBottom`,
                      `mt-2`,
                      classes.userNameLabel,
                    ].join(" ")}
                  >
                    Miroslav Minev
                  </label>
                  <label
                    className={[
                      `noMarginBottom`,
                      `mb-4`,
                      classes.userTypeLabel,
                    ].join(" ")}
                  >
                    User
                  </label>
                  <div className="d-flex flex-column mb-4">
                    <label
                      className={[`noMarginBottom`, classes.messageButton].join(
                        " "
                      )}
                    >
                      Message
                    </label>
                    <label
                      className={[
                        `noMarginBottom`,
                        `mt-3`,
                        classes.followButton,
                      ].join(" ")}
                    >
                      Follow
                    </label>
                  </div>
                  <div className="d-flex flex-column">
                    {leftPanelTiles.map((tile, i) => {
                      if (tile.link)
                        return (
                          <Link to={tile.link}>
                            <div
                              className={[
                                `d-flex`,
                                `justify-content-center`,
                                `align-items-center`,
                                `flex-column`,
                                `mt-3`,
                                classes.leftPanelTile,
                                tile.link === path &&
                                  classes.activeLeftPanelTile,
                              ].join(" ")}
                              onMouseEnter={() =>
                                handleHoverLeftPanelTile(tile.id)
                              }
                              onMouseLeave={handleRemoveHoverLeftPanelTile}
                            >
                              <img
                                alt={tile.title}
                                src={
                                  tile.link === path ||
                                  isHoveredLeftPanelTile === tile.id
                                    ? tile.image1
                                    : tile.image
                                }
                              />
                              <label className={[`noMarginBottom`].join(" ")}>
                                {tile.title}
                              </label>
                            </div>
                          </Link>
                        );
                      else
                        return (
                          <div
                            className={[
                              `d-flex`,
                              `justify-content-center`,
                              `align-items-center`,
                              `flex-column`,
                              `mt-3`,
                              classes.leftPanelTile,
                              tile.link === path && classes.activeLeftPanelTile,
                            ].join(" ")}
                            onMouseEnter={() =>
                              handleHoverLeftPanelTile(tile.id)
                            }
                            onMouseLeave={handleRemoveHoverLeftPanelTile}
                          >
                            <img
                              alt={tile.title}
                              src={
                                tile.link === path ||
                                isHoveredLeftPanelTile === tile.id
                                  ? tile.image1
                                  : tile.image
                              }
                            />
                            <label className={[`noMarginBottom`].join(" ")}>
                              {tile.title}
                            </label>
                          </div>
                        );
                    })}
                  </div>
                </div>
                {/* <div
                  className={[
                    `mt-4`,
                    `col-12`,
                    `d-flex`,
                    `flex-column`,
                    `align-items-center`,
                    `pb-5`,
                    classes.profileImageDiv,
                  ].join(" ")}
                >
                  <label className="noMarginBottom mt-4">Info</label>
                  <hr style={{ width: "100%" }} />
                  <div>
                    <img
                      style={{ maxWidth: "100%" }}
                      alt="MAP"
                      src="assets/img/userdetails/map.png"
                    />
                  </div>
                  <div
                    style={{
                      backgroundColor: "#F0ECEF",
                      borderRadius: "15px",
                      boxShadow: "0px 2px 5px 0px #ccc",
                    }}
                    className="mt-4 d-flex flex-column align-items-center pb-3 pt-4"
                  >
                    <label
                      className="noMarginBottom"
                      style={{ color: "#888", fontSize: "11px" }}
                    >
                      Address
                    </label>
                    <hr style={{ width: "100%" }} />
                    <label
                      className="noMarginBottom"
                      style={{
                        color: "#373633",
                        fontSize: "11px",
                        textAlign: "center",
                      }}
                    >
                      pellentesque elit, velit aute felis nec, risus magna ut
                      eros duis
                    </label>
                    <label
                      className="noMarginBottom"
                      style={{ color: "#888", fontSize: "11px" }}
                    >
                      Email
                    </label>
                    <hr style={{ width: "100%" }} />
                    <label
                      className="noMarginBottom"
                      style={{
                        color: "#373633",
                        fontSize: "11px",
                        textAlign: "center",
                      }}
                    >
                      123@xyz.com
                    </label>
                    <label
                      className="noMarginBottom"
                      style={{ color: "#888", fontSize: "11px" }}
                    >
                      Mobile
                    </label>
                    <hr style={{ width: "100%" }} />
                    <label
                      className="noMarginBottom"
                      style={{
                        color: "#373633",
                        fontSize: "11px",
                        textAlign: "center",
                      }}
                    >
                      123456789
                    </label>
                    <label
                      className="noMarginBottom"
                      style={{ color: "#888", fontSize: "11px" }}
                    >
                      Birth Date
                    </label>
                    <hr style={{ width: "100%" }} />
                    <label
                      className="noMarginBottom"
                      style={{
                        color: "#373633",
                        fontSize: "11px",
                        textAlign: "center",
                      }}
                    >
                      October 1, 2020
                    </label>
                    <label
                      className="noMarginBottom"
                      style={{ color: "#888", fontSize: "11px" }}
                    >
                      October 1, 2020
                    </label>
                    <hr style={{ width: "100%" }} />
                    <div
                      className="d-flex justify-content-between align-items-center"
                      style={{ minWidth: "90%" }}
                    >
                      {socialIcons.map((icon, i) => {
                        return (
                          <div
                            key={i}
                            className={[
                              `d-flex`,
                              `flex-column`,
                              `justify-content-center`,
                              `align-content-center`,
                              classes.socialIconDiv,
                            ].join(" ")}
                          >
                            <img
                              alt={icon.label}
                              src={icon.image}
                              style={{
                                padding: "3px 0 0 0",
                              }}
                            />
                            <label
                              style={{ fontSize: "8px" }}
                              className={[`noMarginBottom`, `text-center`].join(
                                " "
                              )}
                            >
                              {icon.label}
                            </label>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <img
                    src="assets/img/userdetails/user.png"
                    className="mt-4"
                    alt="User"
                  />
                  <label
                    className={[
                      `noMarginBottom`,
                      `mt-2`,
                      classes.userNameLabel,
                    ].join(" ")}
                  >
                    Miroslav Minev
                  </label>
                  <label
                    className={[
                      `noMarginBottom`,
                      `mb-4`,
                      classes.userTypeLabel,
                    ].join(" ")}
                  >
                    User
                  </label>
                  <div className="d-flex mb-4">
                    <label
                      className={[
                        `noMarginBottom`,
                        `mr-2`,
                        classes.followButton,
                      ].join(" ")}
                    >
                      Follow
                    </label>
                    <label
                      className={[
                        `noMarginBottom`,
                        `mr-2`,
                        classes.messageButton,
                      ].join(" ")}
                    >
                      Message
                    </label>
                  </div>
                </div> */}
              </div>
              <div className="col-10 d-flex flex-column">
                <div className={[classes.formDiv].join(" ")}>
                  <div className="d-flex justify-content-between">
                    <h4
                      className={[`noMarginBottom`, classes.formHeading].join(
                        " "
                      )}
                    >
                      Notifications
                    </h4>
                    <img
                      alt="Settings"
                      src="assets/img/userdetails/settingsSmall.svg"
                    />
                  </div>
                  <hr />
                  <div
                    className="mt-4"
                    style={
                      {
                        // borderTopLeftRadius: "15px",
                        // overflow: "hidden",
                        // borderTopRightRadius: "15px",
                      }
                    }
                  >
                    <table className={classes.table}>
                      <thead>
                        <tr className={classes.tableHeadingsRow}>
                          <th style={{ paddingLeft: "15px" }}>Time</th>
                          <th>Event Name</th>
                          <th>Threshold Created</th>
                          <th>Triggered by</th>
                          <th>Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[...Array(10)].map((i, j) => {
                          return (
                            <tr className={classes.tableDataRow}>
                              <td style={{ padding: "10px 15px" }}>
                                01/01/20 | 12:00 PM
                              </td>
                              <td>Threshold 30</td>
                              <td>02/02/2020 | 01:00 AM</td>
                              <td>Sensor 2</td>
                              <td>test@user.com</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
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

export default NotificationSettings;
