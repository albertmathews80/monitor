import classes from "./UserDetails.module.css";
import React, { useState } from "react";
import FullAppBar from "../components/FullAppBar";
import SecAppBar from "../components/SecAppBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const UserDetails = (props) => {
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

  return (
    <div>
      {/* <div
        className={[`d-flex`, `align-items-center`, classes.overlay].join(" ")}
      >
        <div
          className={[`col-6`, `offset-3`, classes.popUpForm].join(" ")}
          style={{ height: "350px", backgroundColor: "#fff" }}
        >
          <h1>faisal</h1>
          <h1>faisal</h1>
          <h1>faisal</h1>
        </div>
      </div> */}
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
                <div
                  className={[
                    `d-flex`,
                    `align-items-center`,
                    classes.submitPostDiv,
                  ].join(" ")}
                >
                  <div className={[`mr-2`, classes.textareaDiv].join(" ")}>
                    <textarea class="form-control" rows="4"></textarea>
                  </div>
                  <div className="d-flex flex-column">
                    <div className="d-flex">
                      <div
                        className={[`mr-2`, classes.submitPostIconsDiv].join(
                          " "
                        )}
                      >
                        <img
                          alt="Camera"
                          src="assets/img/userdetails/camera.svg"
                        />
                      </div>
                      <div className={classes.submitPostIconsDiv}>
                        <img
                          alt="Camera"
                          src="assets/img/userdetails/link.svg"
                        />
                      </div>
                    </div>
                    <div className="d-flex justify-content-center mt-2">
                      <label
                        className={[
                          `noMarginBottom`,
                          classes.submitPstButton,
                        ].join(" ")}
                      >
                        Post
                      </label>
                    </div>
                  </div>
                </div>

                <div className={[`mt-4`, classes.postDiv].join(" ")}>
                  <div
                    className={classes.coverImageDiv}
                    style={{
                      backgroundImage:
                        "url(assets/img/userdetails/coverImage.png)",
                    }}
                  ></div>
                  <div className="col mt-4">
                    <h3 className={classes.postHeading}>
                      ALL PHOTOGRAPHS ARE ACCURATE
                    </h3>
                    <p className={classes.postPara}>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal It is a long established fact
                      that a reader will be distracted by the readable content
                      of a page when looking at its layout. The point of using
                      Lorem Ipsum is that it has a more-or-less normal It is a
                      long established fact that a reader will be distracted by
                      the readable content of a page when looking at its layout.
                      The point of using Lorem Ipsum is that it has a
                      more-or-less normal
                    </p>
                    <div className="d-flex justify-content-between">
                      <label className={classes.continueReadingButton}>
                        Continue Reading
                      </label>
                      <div className="d-flex align-items-center">
                        <label
                          className={[
                            `noMarginBottom`,
                            classes.reactionLabel,
                          ].join(" ")}
                        >
                          General |
                        </label>
                        <label
                          className={[
                            `noMarginBottom`,
                            classes.reactionLabel,
                          ].join(" ")}
                        >
                          &nbsp; 50 &nbsp;
                        </label>
                        <img
                          alt="Heart"
                          src="/assets/img/userdetails/heart.svg"
                        />
                        <label
                          className={[
                            `noMarginBottom`,
                            classes.reactionLabel,
                          ].join(" ")}
                        >
                          &nbsp; | 50 &nbsp;
                        </label>
                        <img
                          alt="Heart"
                          src="/assets/img/userdetails/commentIcon.svg"
                        />
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

export default UserDetails;
