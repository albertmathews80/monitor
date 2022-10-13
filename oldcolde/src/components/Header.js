import React from "react";
import Navbar from "./Navbar";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <div className={classes.headerDiv}>
      <Navbar fromLayout={props.fromLayout} />
    </div>
  );
};

export default Header;
