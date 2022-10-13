import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./SecAppBar.module.css";

const SecAppBar = (props) => {
  const [hoverNav, setHoverNav] = useState(false);
  const handleHoverNav = () => {
    setHoverNav(true);
  };
  const handleHoverNavOut = () => {
    setHoverNav(false);
  };
  return (
    <div className="d-flex justify-content-between pt-4">
      <div className="d-flex col-6 flex-column">
        <h4
          className="noMarginBottom"
          style={{ color: "#000", fontSize: "20px", fontWeight: 600 }}
        >
          {props.subTitle}
        </h4>
        <label
          style={{ color: "#000", fontSize: "11px", fontWeight: 600 }}
          className="noMarginBottom"
        >
          {props.subTitle} / {props.title}
        </label>
      </div>
      {/* {props.children} */}
      <div
        className="d-flex align-items-center justify-content-end"
        style={{ transform: "translateX(-11px)" }}
      >
        {props.routes.map((route, i) => {
          if (route.isFunc)
            return (
              // <Link to={route.link} onClick={() => console.log(route)}>
              <div
                className={[
                  `d-flex`,
                  `justify-content-between`,
                  `align-items-center`,
                  `ml-3`,
                  route.isActive && classes.activeButton,
                  classes.funcNavButtonsDiv,
                ].join(" ")}
                onClick={route.onClick}
                onMouseEnter={handleHoverNav}
                onMouseLeave={handleHoverNavOut}
              >
                <img
                  alt="Add Widget"
                  src={
                    route.image1 && hoverNav === true
                      ? route.image1
                      : route.image
                  }
                />
                <label
                  className={[
                    `noMarginBottom`,
                    `text-center`,
                    route.isActive && classes.activeButtonLabel,
                    classes.funcNavButtons,
                  ].join(" ")}
                >
                  {route.title}
                  <br />
                  <span>{route.subTitle}</span>
                </label>
              </div>
              // </Link>
            );
          else
            return (
              <Link to={route.link} onClick={() => console.log(route)}>
                <div
                  className={[
                    `d-flex`,
                    `justify-content-center`,
                    `align-items-center`,
                    `ml-3`,
                    route.isActive && classes.activeButton,
                    classes.navButtonsDiv,
                  ].join(" ")}
                  onClick={props.widgetModal}
                >
                  <label
                    className={[
                      `noMarginBottom`,
                      `text-center`,
                      route.isActive && classes.activeButtonLabel,
                      classes.navButtons,
                    ].join(" ")}
                  >
                    {route.title}
                  </label>
                </div>
              </Link>
            );
        })}
      </div>
    </div>
  );
};

export default SecAppBar;
