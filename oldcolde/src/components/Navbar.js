import React, { Component } from "react";
import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import Logo from "./Logo1.png";
import Logo from "./Logo3.png";

export default class Navbar extends Component {
  state = {
    mobileNav: false,
    currentPage: "/",
    isClickedNotification: false,
  };
  handleSearchIconClick = () => {
    document.getElementById("mobileNavHeader1").classList.add("d-none");
    document.getElementById("mobileNavHeader2").classList.add("d-none");
    document.getElementById("searchBarContainer").classList.remove("d-none");
  };
  handleCloseIconClick = () => {
    document.getElementById("mobileNavHeader1").classList.remove("d-none");
    document.getElementById("mobileNavHeader2").classList.remove("d-none");
    document.getElementById("searchBarContainer").classList.add("d-none");
  };
  handleClick = () => {
    if (!this.state.mobileNav) {
      this.setState({
        mobileNav: true,
      });
      document.body.classList.add("mobile-nav-active");
      document.getElementById("mobile-body-overlay").classList.remove("d-none");
      document.getElementById("mobile-body-overlay").classList.add("d-block");
      document.getElementById("toggleButton").classList.remove("fa-bars");
      document.getElementById("toggleButton").classList.add("fa-times");
    } else {
      this.setState({
        mobileNav: false,
      });
      document.body.classList.remove("mobile-nav-active");
      document.getElementById("mobile-body-overlay").classList.add("d-none");
      document
        .getElementById("mobile-body-overlay")
        .classList.remove("d-block");
      document.getElementById("toggleButton").classList.add("fa-bars");
      document.getElementById("toggleButton").classList.remove("fa-times");
    }
  };
  render() {
    const { isClickedNotification } = this.state;
    const handleClickBellIcon = () => {
      this.setState((ps) => {
        return {
          ...ps,
          isClickedNotification: !isClickedNotification,
        };
      });
    };
    return (
      <div className="" style={{ padding: "0 25px 0 15px" }}>
        <div
          id="navBarThirdRow"
          className="align-items-center navbarThirdRow row justify-content-between"
        >
          <div
            id="mobileNavHeader1"
            className="navbarThirdRowCol1 col-11 col-lg-2 pl-lg-0 pt-3 ml-3"
            style={{ minHeight: " 72px" }}
          >
            {/* <h3 className="noMargin logoText">COLDCREW</h3> */}
            {/* <img
              alt="Logo"
              src={Logo}
              style={{ width: "178px", height: "35px" }}
            /> */}
          </div>
          <div id="mobileNavHeader2" className="col-6 d-lg-none p-0">
            <div className="row justify-content-end pr-2 align-items-center">
              <button
                type="button"
                onClick={this.handleClick}
                id="mobile-nav-toggle"
                style={{ border: "none", background: "transparent" }}
              >
                <i
                  id="toggleButton"
                  className="fa fa-bars"
                  aria-hidden="true"
                  style={{
                    color: "#fff",
                    fontSize: "25px",
                    transform: "translateY(2px)",
                  }}
                />
              </button>
            </div>
          </div>

          <div className="navbarThirdRowCol2">
            <div
              id="mobile-body-overlay"
              className="d-none"
              style={{
                width: "100%",
                height: "100%",
                zIndex: "997",
                top: 0,
                left: 0,
                position: "fixed",
                background: "rgba(0, 0, 0, 0.7)",
              }}
            />
            <div className="d-flex flex-column">
              <div className="">
                <nav id="nav-menu-container">
                  <ul class="nav-menu">
                    {/* <li class="navbarItems">
                      <Link to="/">
                        <img
                          alt="File Manager"
                          src="assets/img/navbar/fileManager.svg"
                        />
                      </Link>
                    </li>
                    <li class="navbarItems">
                      <Link to="/">
                        <img
                          alt="File Manager"
                          src="assets/img/navbar/message.svg"
                        />
                      </Link>
                    </li> */}
                    <li
                      class="navbarItems"
                      style={{ cursor: "pointer" }}
                      onClick={handleClickBellIcon}
                    >
                      {/* <Link to="/"> */}
                      <img
                        alt="File Manager"
                        src="assets/img/navbar/notification.svg"
                      />
                      {isClickedNotification && (
                        <div
                          className={[
                            `animate__animated`,
                            `animate__fadeIn`,
                            classes.notificationDropdown,
                          ].join(" ")}
                        >
                          {[...Array(6)].map((i, j) => {
                            return (
                              <div
                                className={[
                                  `d-flex`,
                                  `align-items-center`,
                                  classes.notificationDropDownMainDiv,
                                ].join(" ")}
                                key={j}
                              >
                                <div
                                  className={[
                                    `d-flex`,
                                    `align-items-center`,
                                    `pb-1`,
                                    classes.notificationListItem,
                                  ].join(" ")}
                                >
                                  <div
                                    className={
                                      classes.notificationDropdownIconDiv
                                    }
                                  >
                                    <img
                                      alt="Notifixation"
                                      src="assets/img/navbar/notificationdropdown/info.svg"
                                    />
                                  </div>
                                  <div
                                    className={
                                      classes.notificationDropdownTextDiv
                                    }
                                  >
                                    <p className="noMarginBottom">
                                      id in ut ut in gravida fermentum. quis in
                                      et ligula eu luctus <br /> in consequat
                                      curabitur laboris mauris. vehicula. duis
                                      ligula
                                    </p>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                      {/* </Link> */}
                    </li>
                    {/* <li class="navbarItems">
                      <Link to="/">
                        <img
                          alt="File Manager"
                          src="assets/img/navbar/settings.svg"
                        />
                      </Link>
                    </li> */}
                    <li class="navbarItems">
                      <Link to="/login">
                        <img
                          alt="File Manager"
                          src="assets/img/navbar/logout.svg"
                        />
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>{" "}
            <nav id="mobile-nav">
              <ul className="" style={{ touchAction: "pan-y" }}>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Professionals</a>
                </li>
                <li>
                  <a href="#">Community</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                {/* <li>
                  <Link to="/cart">
                    My Cart
                    <i class="fas fa-shopping-bag pl-2 redFont" />
                  </Link>
                </li> */}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}
