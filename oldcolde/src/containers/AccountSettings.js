import classes from "./UserDetails.module.css";
import classes1 from "./AccountSettings.module.css";
import React, { useState } from "react";
import FullAppBar from "../components/FullAppBar";
import SecAppBar from "../components/SecAppBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const AccountSettings = (props) => {
  const path = props.match.path;
  const [selectedGender, setSelectedGender] = useState();
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
      image: "assets/img/userdetails/Insta.svg",
    },
  ];
  const routes = [
    {
      title: "FEEDS",
      link: "/user-details",
      isActive: true,
    },
    {
      title: "NOTIFICATION SETTINGS",
      link: "/notification-settings",
      isActive: false,
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
      image: "assets/img/userdetails/userDetails.svg",
      isActive: true,
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
  const gender = [
    {
      id: 1,
      title: "Male",
    },
    {
      id: 2,
      title: "Female",
    },
  ];
  const handleSelectedGender = (id) => {
    setSelectedGender(id);
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
                    `flex-column`,
                    `align-items-center`,
                    `pb-4`,
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
                  <div className="d-flex mb-4 flex-column">
                    <label
                      className={[
                        `noMarginBottom`,
                        `mr-2`,
                        classes.messageButton,
                      ].join(" ")}
                    >
                      Message
                    </label>
                    <label
                      className={[
                        `noMarginBottom`,
                        `mr-2`,
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
              </div>
              <div className="col-10 d-flex flex-column">
                <div className={[classes1.formDiv].join(" ")}>
                  <h4
                    className={[`noMarginBottom`, classes1.formHeading].join(
                      " "
                    )}
                  >
                    Account Data
                  </h4>
                  <hr style={{ width: "100%" }} />
                  <form>
                    <div className="d-flex">
                      <div
                        style={{ flex: 1 }}
                        className="d-flex align-items-center"
                      >
                        <label
                          className="noMarginBottom"
                          style={{ color: "#52575D", width: "140px" }}
                        >
                          User Name
                        </label>
                        <input
                          style={{ flex: 1 }}
                          type="text"
                          className={classes1.formInput}
                        />
                      </div>
                      <div
                        style={{ flex: 1 }}
                        className="d-flex align-items-center"
                      >
                        <label
                          className="noMarginBottom ml-2 mr-2"
                          style={{ color: "#52575D" }}
                        >
                          Email
                        </label>
                        <input
                          style={{ flex: 1 }}
                          type="text"
                          className={classes1.formInput}
                        />
                      </div>
                    </div>
                    <div className="d-flex mt-3">
                      <label
                        className="noMarginBottom"
                        style={{ color: "#52575D", width: "140px" }}
                      >
                        Phone
                      </label>
                      <input
                        style={{ flex: 1 }}
                        type="text"
                        className={classes1.formInput}
                      />
                    </div>
                  </form>
                  <h4
                    className={[
                      `noMarginBottom`,
                      `mt-4`,
                      classes1.formHeading,
                    ].join(" ")}
                  >
                    Chanage Password
                  </h4>
                  <hr style={{ width: "100%" }} />
                  <form>
                    <div className="d-flex mt-3">
                      <label
                        className="noMarginBottom"
                        style={{ color: "#52575D", width: "140px" }}
                      >
                        Password
                      </label>
                      <input
                        style={{ flex: 1 }}
                        type="password"
                        className={classes1.formInput}
                      />
                    </div>
                    <div className="d-flex mt-3">
                      <label
                        className="noMarginBottom"
                        style={{ color: "#52575D", width: "140px" }}
                      >
                        New Password
                      </label>
                      <input
                        style={{ flex: 1 }}
                        type="password"
                        className={classes1.formInput}
                      />
                    </div>
                    <div className="d-flex mt-3">
                      <label
                        className="noMarginBottom"
                        style={{ color: "#52575D", width: "140px" }}
                      >
                        Confirm Password
                      </label>
                      <input
                        style={{ flex: 1 }}
                        type="password"
                        className={classes1.formInput}
                      />
                    </div>
                    <div className="d-flex justify-content-end mt-3">
                      <label
                        className={[
                          `noMarginBottom`,
                          `mr-3`,
                          classes1.updateButton,
                        ].join(" ")}
                      >
                        UPDATE
                      </label>
                      <label
                        className={[
                          `noMarginBottom`,
                          classes1.cancelButton,
                        ].join(" ")}
                      >
                        Cancel
                      </label>
                    </div>
                  </form>
                </div>
                <div className={[`mt-4`, classes1.formDiv].join(" ")}>
                  <h4
                    className={[`noMarginBottom`, classes1.formHeading].join(
                      " "
                    )}
                  >
                    Basic Information
                  </h4>
                  <hr style={{ width: "100%" }} />
                  <form>
                    <div className="d-flex">
                      <div
                        style={{ flex: 1 }}
                        className="d-flex align-items-center"
                      >
                        <label
                          className="noMarginBottom mr-2"
                          style={{ color: "#52575D" }}
                        >
                          First Name
                        </label>
                        <input
                          style={{ flex: 1 }}
                          type="text"
                          className={classes1.formInput}
                        />
                      </div>
                      <div
                        style={{ flex: 1 }}
                        className="d-flex align-items-center"
                      >
                        <label
                          className="noMarginBottom ml-2 mr-2"
                          style={{ color: "#52575D", minWidth: "92px" }}
                        >
                          Last Name
                        </label>
                        <input
                          style={{ flex: 1 }}
                          type="text"
                          className={classes1.formInput}
                        />
                      </div>
                    </div>
                    <div className="d-flex mt-3">
                      <div
                        style={{ flex: 1 }}
                        className="d-flex align-items-center"
                      >
                        <label
                          className="noMarginBottom"
                          style={{ color: "#52575D", marginRight: "2.1rem" }}
                        >
                          Gender
                        </label>
                        <div>
                          {gender.map((gender, i) => {
                            return (
                              <label
                                key={i}
                                className={[
                                  `noMarginBottom`,
                                  `mr-3`,
                                  classes1.genderLabel,
                                  gender.id === selectedGender
                                    ? classes1.activeGender
                                    : null,
                                ].join(" ")}
                                onClick={() => handleSelectedGender(gender.id)}
                              >
                                {gender.title}
                              </label>
                            );
                          })}
                          {/* <label
                            className={[
                              `noMarginBottom`,
                              `mr-3`,
                              classes1.genderLabel,
                            ].join(" ")}
                          >
                            Male
                          </label>
                          <label
                            className={[
                              `noMarginBottom`,
                              classes1.genderLabel,
                            ].join(" ")}
                          >
                            Female
                          </label> */}
                        </div>
                      </div>
                      <div
                        style={{ flex: 1 }}
                        className="d-flex align-items-center"
                      >
                        <label
                          className="noMarginBottom ml-2 mr-2"
                          style={{ color: "#52575D" }}
                        >
                          Date Of Birth
                        </label>
                        <input
                          style={{ flex: 1, padding: "0 0 0 15px" }}
                          type="date"
                          className={classes1.formInput}
                        />
                      </div>
                    </div>
                    <div className="d-flex mt-3">
                      <label
                        className="noMarginBottom"
                        style={{ color: "#52575D", width: "87px" }}
                      >
                        Link
                      </label>
                      <input
                        style={{ flex: 1, padding: "0 15px" }}
                        type="text"
                        className={classes1.formInput}
                        placeholder="http://"
                      />
                    </div>
                    <div className="d-flex mt-3">
                      <label
                        className="noMarginBottom"
                        style={{ color: "#52575D", marginRight: "1.7rem" }}
                      >
                        Address
                      </label>
                      <input
                        style={{ flex: 1 }}
                        type="text"
                        className={classes1.formInput}
                      />
                    </div>
                    <div className="d-flex mt-3">
                      <label
                        className="noMarginBottom"
                        style={{ color: "#52575D", marginRight: "1.7rem" }}
                      >
                        Address
                      </label>
                      <input
                        style={{ flex: 1 }}
                        type="text"
                        className={classes1.formInput}
                      />
                    </div>
                    <div className="d-flex mt-3">
                      <div
                        style={{ flex: 1 }}
                        className="d-flex align-items-center"
                      >
                        <label
                          className="noMarginBottom"
                          style={{ color: "#52575D", marginRight: "3.6rem" }}
                        >
                          City
                        </label>
                        <input
                          style={{ flex: 1 }}
                          type="text"
                          className={classes1.formInput}
                        />
                      </div>
                      <div
                        style={{ flex: 1 }}
                        className="d-flex align-items-center"
                      >
                        <label
                          className="noMarginBottom ml-2"
                          style={{ color: "#52575D", marginRight: "1.7rem" }}
                        >
                          State
                        </label>
                        <select
                          style={{
                            flex: 1,
                            padding: "3px 0",
                            borderRadius: "5px",
                            border: "solid 1px #888",
                          }}
                        >
                          <option selected disabled>
                            Select
                          </option>
                          <option>State 1</option>
                          <option>State 2</option>
                        </select>
                      </div>
                      <div
                        style={{ flex: 1 }}
                        className="d-flex align-items-center"
                      >
                        <label
                          className="noMarginBottom ml-2"
                          style={{ color: "#52575D", marginRight: "1.7rem" }}
                        >
                          Country
                        </label>
                        <select
                          style={{
                            flex: 1,
                            padding: "3px 0",
                            borderRadius: "5px",
                            border: "solid 1px #888",
                          }}
                        >
                          <option selected disabled>
                            Select
                          </option>
                          <option>Country 1</option>
                          <option>Country 2</option>
                        </select>
                      </div>
                    </div>
                    <div className="d-flex justify-content-end mt-3">
                      <label
                        className={[
                          `noMarginBottom`,
                          `mr-3`,
                          classes1.updateButton,
                        ].join(" ")}
                      >
                        UPDATE
                      </label>
                      <label
                        className={[
                          `noMarginBottom`,
                          classes1.cancelButton,
                        ].join(" ")}
                      >
                        Cancel
                      </label>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
