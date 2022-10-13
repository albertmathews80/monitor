import classes from "./ThemeSettings.module.css";
import React, { useState } from "react";
import FullAppBar from "../components/FullAppBar";
import SecAppBar from "../components/SecAppBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const ThemeSettings = (props) => {
  const path = props.match.path;
  const [isHoveredLeftPanelTile, setIsHoveredLeftPanelTile] = useState();
  const themeColors1 = [
    "#C92A2A",
    "#A61E4D",
    "#862E9C",
    "#5F3DC4",
    "#1864AB",
    "#212529",
    "#E67700",
    "#228BE6",
  ];
  const themeColors2 = [
    "#748FFC",
    "#51CF66",
    "#D0BFFF",
    "#E9FAC8",
    "#FFC9C9",
    "#FFE3E3",
    "#63E6BE",
    "#F4FCE3",
  ];
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
      isActive: false,
    },
    {
      title: "THEME SETTINGS",
      link: "/theme-settings",
      isActive: true,
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
                    `flex-column`,
                    `pb-4`,
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
                  </div>{" "}
                </div>
              </div>
              <div className="col-10 d-flex flex-column">
                {/* <div className="d-flex justify-content-between">
                  <div className="d-flex">
                    {leftTiles.map((tile, i) => {
                      return (
                        <Link to={tile.link} key={i}>
                          <div
                            className={[
                              `align-items-center`,
                              `d-flex`,
                              `flex-column`,
                              `justify-content-center`,
                              `mr-2`,
                              classes.tileDiv,
                              tile.isActive && classes.activeTile,
                            ].join(" ")}
                          >
                            <img
                              alt="User Details"
                              src={tile.image}
                              className="pt-1"
                            />
                            <label
                              className={[
                                `noMarginBottom`,
                                `pt-2`,
                                classes.tileText,
                              ].join(" ")}
                            >
                              {tile.title}
                            </label>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                  <div className="d-flex">
                    {rightTiles.map((tile, i) => {
                      return (
                        <div
                          key={i}
                          className={[
                            `align-items-center`,
                            `justify-content-center`,
                            `d-flex`,
                            `flex-column`,
                            `mr-2`,
                            classes.tileDiv,
                            tile.isActive && classes.activeTile,
                          ].join(" ")}
                        >
                          <img
                            alt="User Details"
                            src={tile.image}
                            className="pt-1"
                          />
                          <label
                            className={[
                              `noMarginBottom`,
                              `pt-2`,
                              classes.rightTileText,
                            ].join(" ")}
                          >
                            {tile.title}
                          </label>
                        </div>
                      );
                    })}
                  </div>
                </div> */}
                <div className={[classes.formDiv].join(" ")}>
                  <div className="d-flex justify-content-between">
                    <h4
                      className={[`noMarginBottom`, classes.formHeading].join(
                        " "
                      )}
                    >
                      Theme Settings
                    </h4>
                    <img
                      alt="Settings"
                      src="assets/img/userdetails/settingsSmall.svg"
                    />
                  </div>
                  <hr style={{ borderTop: "1px solid rgba(0,0,0,.2)" }} />
                  <div className="d-flex justify-content-between">
                    <label>Light Mode / Dark Mode</label>
                    <label class="switch">
                      <input type="checkbox" />
                      <span class="slider round"></span>
                    </label>
                  </div>
                  <div className="d-flex justify-content-between mt-3">
                    <label>Change color</label>
                    <div
                      className="d-flex flex-column"
                      style={{
                        backgroundColor: "rgb(244 225 239)",
                        // boxShadow: "0px 2px 5px 0px #888",
                        padding: "10px 0 10px 15px",
                      }}
                    >
                      <div className="d-flex">
                        {themeColors1.map((color, i) => {
                          return (
                            <span
                              className="mr-3"
                              style={{
                                height: "30px",
                                width: "30px",
                                backgroundColor: color,
                                boxShadow: "rgb(136, 136, 136) 0px 2px 5px 0px",
                                borderRadius: "5px",
                              }}
                              key={i}
                            ></span>
                          );
                        })}
                      </div>
                      <div className="d-flex mt-3">
                        {themeColors2.map((color, i) => {
                          return (
                            <span
                              className="mr-3"
                              style={{
                                height: "30px",
                                width: "30px",
                                backgroundColor: color,
                                boxShadow: "rgb(136, 136, 136) 0px 2px 5px 0px",
                                borderRadius: "5px",
                              }}
                              key={i}
                            ></span>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between mt-3">
                    <label>Change Background</label>
                    <div
                      className="d-flex flex-column"
                      style={{
                        backgroundColor: "rgb(244 225 239)",
                        // boxShadow: "0px 2px 5px 0px #888",
                        padding: "10px 0 10px 15px",
                      }}
                    >
                      <div className="d-flex">
                        {[...Array(8)].map((color, i) => {
                          return (
                            <span
                              className="mr-3"
                              style={{
                                height: "30px",
                                width: "30px",
                                backgroundImage:
                                  "url(assets/img/backImage.png)",
                                backgroundSize: "contain",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center",
                                border: "solid 1px #888",
                                boxShadow: "rgb(136, 136, 136) 0px 2px 5px 0px",
                                borderRadius: "5px",
                              }}
                              key={i}
                            ></span>
                          );
                        })}
                      </div>
                      <div className="d-flex mt-3">
                        {[...Array(8)].map((color, i) => {
                          return (
                            <span
                              className="mr-3"
                              style={{
                                height: "30px",
                                width: "30px",
                                backgroundImage:
                                  "url(assets/img/backImage.png)",
                                backgroundSize: "contain",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center",
                                border: "solid 1px #888",
                                boxShadow: "rgb(136, 136, 136) 0px 2px 5px 0px",
                                borderRadius: "5px",
                              }}
                              key={i}
                            ></span>
                          );
                        })}
                      </div>
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

export default ThemeSettings;
