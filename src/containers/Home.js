import classes from "./Home.module.css";
import React, { useState } from "react";
import FullAppBar from "../components/FullAppBar";
import { Link } from "react-router-dom";
import { join } from "lodash";

const HomeContainer = (props) => {
    const clipIconBlack = "assets/img/allsensors/clipIcon.svg";
    const clipIconWhite = "assets/img/allsensors/clipIcon1.svg";

    const [isAddingSensor, setIsAddingSensor] = useState(false);
    // const [activeNav, setActiveNav] = useState(null);
    const [hoverDataNav, setHoverDataNav] = useState(null);
    const [hoverSensorNav, setHoverSensorNav] = useState(null);
    const [hoverAccountsNav, setHoverAccountsNav] = useState(null);
    const [hoverSettingsNav, setHoverSettingsNav] = useState(null);
    const [isAddingUser, setIsAddingUser] = useState(false);
    const [isAddingReport, setisAddingReport] = useState(false);
    const [isThresholdModalOpen, setIsThresholdModalOpen] = useState(false);
    const [isHoveredThreshold, setIsHoveredThreshold] = useState(false);
    const [close, setClose] = useState(false);
    const [activeUser, setActiveUser] = useState();
    console.log("######################################");
    console.log(props);
    console.log("######################################");
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
    const dataRow = [
        {
            id: 0,
            title: "DASHBOARD",
            image: "assets/img/home1/dashboard.svg",
            image1: "assets/img/home1/dashboard1.svg",
            link: "/data-dashboard",
        },
        {
            id: 1,
            title: "REPORT",
            image: "assets/img/home1/report.svg",
            image1: "assets/img/home1/report1.svg",
            link: "/data-report",
        },
        {
            id: 2,
            title: "ANALYTICS",
            image: "assets/img/home1/analytics.svg",
            image1: "assets/img/home1/analytics1.svg",
            link: "/data-analytics",
        },
        {
            id: 3,
            title: `CREATE REPORT`,
            image: "assets/img/home1/addReport.svg",
            image1: "assets/img/home1/addReport1.svg",
            open: () => {
                handleToggleAddReport();
            },
        },
    ];
    const settings = [
        {
            id: 0,
            title: "USER DETAILS",
            image: "assets/img/home1/userDetails.svg",
            image1: "assets/img/home1/userDetails1.svg",
            link: "/user-details",
        },
        {
            id: 1,
            title: "NOTIFICATIONS",
            image: "assets/img/home1/notifications.svg",
            image1: "assets/img/home1/notifications1.svg",
            link: "/notification-settings",
        },
        {
            id: 2,
            title: "THEME",
            image: "assets/img/home1/theme.svg",
            image1: "assets/img/home1/theme1.svg",
            link: "/theme-settings",
        },
    ];

    const sensorsRow = [
        {
            id: 0,
            title: "CREATE SENSOR",
            image: "assets/img/home1/addSensor.svg",
            image1: "assets/img/home1/addSensor1.svg",
            open: () => {
                handleToggleAddSensor();
            },
        },
        {
            id: 1,
            title: "ALL SENSORS",
            image: "assets/img/home1/allSensor.svg",
            image1: "assets/img/home1/allSensor1.svg",
            link: "/all-sensor",
        },
        // {
        //   id: 2,
        //   title: "FIND SENSOR",
        //   image: "assets/img/home1/findSensor.svg",
        //   image1: "assets/img/home1/findSensor1.svg",
        // },
        {
            id: 3,
            title: "SENSORS GROUP",
            image: "assets/img/home1/sensorsGroup.svg",
            image1: "assets/img/home1/sensorsGroup1.svg",
            link: "/add-sensor-group",
        },
        {
            id: 4,
            title: "CREATE THRESHOLD",
            image: "assets/img/home1/createThreshold.svg",
            image1: "assets/img/home1/createThreshold1.svg",
            open: () => {
                handleToggleAddThresholdPolicy();
            },
        },
        {
            id: 5,
            title: "MANAGE THRESHOLD",
            image: "assets/img/home1/createThreshold.svg",
            image1: "assets/img/home1/createThreshold1.svg",
            link: "/all-threshold-policy",
        },
    ];
    const accounts = [
        {
            id: 0,
            title: "CREATE USER",
            image: "assets/img/home1/newUser.svg",
            image1: "assets/img/home1/newUser1.svg",
            open: () => {
                handleToggleAddUser();
            },
        },
        // {
        //   id: 1,
        //   title: "EXISTING USER",
        //   image: "assets/img/home1/existingUser.svg",
        //   image1: "assets/img/home1/existingUser1.svg",
        // },
        {
            id: 2,
            title: "MANAGEMENT",
            image: "assets/img/home1/management.svg",
            image1: "assets/img/home1/management1.svg",
            link: "/user-management",
        },
        {
            id: 3,
            title: "PAYMENTS",
            image: "assets/img/home1/payments.svg",
            image1: "assets/img/home1/payments1.svg",
            link: "/user-payment",
        },
    ];
    const handleHoverDataNav = (nav) => {
        setHoverDataNav(nav);
    };
    const handleHoverDataNavOut = () => {
        setHoverDataNav(null);
    };
    const handleHoverSensorNav = (nav) => {
        setHoverSensorNav(nav);
    };
    const handleHoverSensorNavOut = () => {
        setHoverSensorNav(null);
    };
    const handleHoverAccountsNav = (nav) => {
        setHoverAccountsNav(nav);
    };
    const handleHoverAccountsNavOut = () => {
        setHoverAccountsNav(null);
    };
    const handleHoverSettingsNav = (nav) => {
        setHoverSettingsNav(nav);
    };
    const handleHoverSettingsNavOut = () => {
        setHoverSettingsNav(null);
    };
    const handleToggleAddSensor = () => {
        setIsAddingUser(false);
        setisAddingReport(false);
        setIsThresholdModalOpen(false);

        setClose(false);
        setIsAddingSensor(!isAddingSensor);
    };
    const handleCloseAddSensor = () => {
        setClose(true);
        setTimeout(() => {
            setIsAddingSensor(false);
        }, 300);
    };
    const handleToggleAddUser = () => {
        setIsAddingSensor(false);
        setisAddingReport(false);
        setIsThresholdModalOpen(false);

        setClose(false);
        setIsAddingUser(!isAddingUser);
    };
    const handleCloseAddUser = () => {
        setClose(true);
        setTimeout(() => {
            setIsAddingUser(false);
        }, 300);
        setClose(true);
    };
    const handleToggleAddReport = () => {
        setIsAddingSensor(false);
        setIsThresholdModalOpen(false);
        setIsAddingUser(false);
        setClose(false);
        setisAddingReport(!isAddingReport);
    };
    const handleCloseAddReport = () => {
        setClose(true);
        setTimeout(() => {
            setisAddingReport(false);
        }, 300);
        setClose(true);
    };
    const handleToggleAddThresholdPolicy = () => {
        setIsAddingSensor(false);
        setIsAddingUser(false);
        setisAddingReport(false);
        setClose(false);
        setIsThresholdModalOpen(!isThresholdModalOpen);
    };
    const handleCloseAddThresholPolicy = () => {
        setClose(true);
        setTimeout(() => {
            setIsThresholdModalOpen(false);
        }, 300);
        setClose(true);
    };
    const handleHoverThreshold = () => {
        setIsHoveredThreshold(true);
    };
    const handleRemoveHoverThreshold = () => {
        setIsHoveredThreshold(false);
    };
    const handleSelectUserLevel = (user) => {
        setActiveUser(user);
    };
    return (
        <div>
            <FullAppBar path={props.match.path} home={true} data={false} sensors={false} settings={false} accounts={false} />
            {/* <div className="home-container justify-content-between d-flex contentContainer">
        <label>col1</label>
        <label>col2</label>
      </div> */}
            <div className="home-container justify-content-between d-flex col contentContainer">
                <div className="col-12 col-md-6">
                    <div className="d-flex flex-column mt-4">
                        <h3 style={{ color: "#000", fontWeight: 600, fontSize: "23px" }}>DATA</h3>
                        <div className={[`d-flex`, classes.dataTilesRowDiv].join(" ")}>
                            {dataRow.map((data, i) => {
                                if (data.link)
                                    return (
                                        <Link to={data.link} key={i}>
                                            <div
                                                className={[
                                                    `d-flex`,
                                                    `justify-content-center`,
                                                    `align-items-center`,
                                                    `mr-3`,
                                                    `flex-column`,
                                                    classes.tile,
                                                ].join(" ")}
                                                onMouseEnter={() => handleHoverDataNav(data.id)}
                                                onMouseLeave={handleHoverDataNavOut}
                                            >
                                                <img
                                                    src={data.id === hoverDataNav ? data.image1 : data.image}
                                                    alt="Dashboard"
                                                    className={[`mb-2`, classes.tileImage].join(" ")}
                                                />
                                                <label
                                                    id="label"
                                                    className={[
                                                        `noMarginBottom`,
                                                        // `mt-3`,
                                                        classes.tileLabel,
                                                    ].join(" ")}
                                                    // style={{ fontSize: "14px", fontWeight: 600, color: "#000" }}
                                                >
                                                    {data.title}
                                                </label>
                                            </div>
                                        </Link>
                                    );
                                else
                                    return (
                                        <div
                                            key={i}
                                            className={[
                                                `d-flex`,
                                                `justify-content-center`,
                                                `align-items-center`,
                                                `mr-3`,
                                                `flex-column`,
                                                classes.tile,
                                            ].join(" ")}
                                            onMouseEnter={() => handleHoverAccountsNav(data.id)}
                                            onMouseLeave={handleHoverAccountsNavOut}
                                            onClick={data.open}
                                        >
                                            <img
                                                src={data.id === hoverAccountsNav ? data.image1 : data.image}
                                                alt="Dashboard"
                                                className={[`mb-2`, classes.tileImage].join(" ")}
                                            />
                                            <label
                                                id="label"
                                                className={[
                                                    `noMarginBottom`,
                                                    // `mt-3`,
                                                    classes.tileLabel,
                                                ].join(" ")}
                                                // style={{ fontSize: "14px", fontWeight: 600, color: "#000" }}
                                            >
                                                {data.title}
                                            </label>
                                        </div>
                                    );
                            })}
                        </div>
                    </div>
                    <div className="d-flex flex-column mt-4">
                        <h3 style={{ color: "#000", fontWeight: 600, fontSize: "23px" }}>SENSORS</h3>
                        <div className={[`d-flex`, classes.dataTilesRowDiv].join(" ")}>
                            {sensorsRow.map((sensor, i) => {
                                if (sensor.link)
                                    return (
                                        <Link to={sensor.link}>
                                            <div
                                                key={i}
                                                className={[
                                                    `d-flex`,
                                                    `justify-content-center`,
                                                    `align-items-center`,
                                                    `mr-3`,
                                                    `flex-column`,
                                                    classes.tile,
                                                ].join(" ")}
                                                onMouseEnter={() => handleHoverSensorNav(sensor.id)}
                                                onMouseLeave={handleHoverSensorNavOut}
                                                onClick={sensor.open}
                                            >
                                                <img
                                                    src={sensor.id === hoverSensorNav ? sensor.image1 : sensor.image}
                                                    alt="Dashboard"
                                                    className={[`mb-2`, classes.tileImage].join(" ")}
                                                />
                                                <label
                                                    id="label"
                                                    className={[
                                                        `noMarginBottom`,
                                                        // `mt-3`,
                                                        classes.tileLabel,
                                                    ].join(" ")}
                                                    // style={{ fontSize: "14px", fontWeight: 600, color: "#000" }}
                                                >
                                                    {sensor.title}
                                                </label>
                                            </div>
                                        </Link>
                                    );
                                else
                                    return (
                                        <div
                                            key={i}
                                            className={[
                                                `d-flex`,
                                                `justify-content-center`,
                                                `align-items-center`,
                                                `mr-3`,
                                                `flex-column`,
                                                classes.tile,
                                            ].join(" ")}
                                            onMouseEnter={() => handleHoverSensorNav(sensor.id)}
                                            onMouseLeave={handleHoverSensorNavOut}
                                            onClick={sensor.open}
                                        >
                                            <img
                                                src={sensor.id === hoverSensorNav ? sensor.image1 : sensor.image}
                                                alt="Dashboard"
                                                className={[`mb-2`, classes.tileImage].join(" ")}
                                            />
                                            <label
                                                id="label"
                                                className={[
                                                    `noMarginBottom`,
                                                    // `mt-3`,
                                                    classes.tileLabel,
                                                ].join(" ")}
                                                // style={{ fontSize: "14px", fontWeight: 600, color: "#000" }}
                                            >
                                                {sensor.title}
                                            </label>
                                        </div>
                                    );
                            })}
                        </div>
                    </div>
                    <div className="d-flex flex-column mt-4">
                        <h3 style={{ color: "#000", fontWeight: 600, fontSize: "23px" }}>ACCOUNT</h3>
                        <div className={[`d-flex`, classes.dataTilesRowDiv].join(" ")}>
                            {accounts.map((account, i) => {
                                if (account.link)
                                    return (
                                        <Link to={account.link}>
                                            <div
                                                key={i}
                                                className={[
                                                    `d-flex`,
                                                    `justify-content-center`,
                                                    `align-items-center`,
                                                    `mr-3`,
                                                    `flex-column`,
                                                    classes.tile,
                                                ].join(" ")}
                                                onMouseEnter={() => handleHoverAccountsNav(account.id)}
                                                onMouseLeave={handleHoverAccountsNavOut}
                                                onClick={account.open}
                                            >
                                                <img
                                                    src={account.id === hoverAccountsNav ? account.image1 : account.image}
                                                    alt="Dashboard"
                                                    className={[`mb-2`, classes.tileImage].join(" ")}
                                                />
                                                <label
                                                    id="label"
                                                    className={[
                                                        `noMarginBottom`,
                                                        // `mt-3`,
                                                        classes.accountTileLabel,
                                                    ].join(" ")}
                                                    // style={{ fontSize: "14px", fontWeight: 600, color: "#000" }}
                                                >
                                                    {account.title}
                                                </label>
                                            </div>
                                        </Link>
                                    );
                                else
                                    return (
                                        <div
                                            key={i}
                                            className={[
                                                `d-flex`,
                                                `justify-content-center`,
                                                `align-items-center`,
                                                `mr-3`,
                                                `flex-column`,
                                                classes.tile,
                                            ].join(" ")}
                                            onMouseEnter={() => handleHoverAccountsNav(account.id)}
                                            onMouseLeave={handleHoverAccountsNavOut}
                                            onClick={account.open}
                                        >
                                            <img
                                                src={account.id === hoverAccountsNav ? account.image1 : account.image}
                                                alt="Dashboard"
                                                className={[`mb-2`, classes.tileImage].join(" ")}
                                            />
                                            <label
                                                id="label"
                                                className={[
                                                    `noMarginBottom`,
                                                    // `mt-3`,
                                                    // classes.tileLabel,
                                                    classes.accountTileLabel1,
                                                ].join(" ")}
                                                // style={{
                                                //   fontSize: "11px",
                                                //   fontWeight: 600,
                                                //   color: "#000",
                                                //   maxWidth: "78px",
                                                //   textAlign: "center",
                                                //   lineHeight: 1,
                                                //   height: "10px",
                                                // }}
                                            >
                                                {account.title}
                                            </label>
                                        </div>
                                    );
                            })}
                        </div>
                    </div>
                    <div className="d-flex flex-column mt-4">
                        <h3 style={{ color: "#000", fontWeight: 600, fontSize: "23px" }}>SETTINGS</h3>
                        <div className={[`d-flex`, classes.dataTilesRowDiv].join(" ")}>
                            {settings.map((setting, i) => {
                                return (
                                    <Link key={i} to={setting.link}>
                                        <div
                                            key={i}
                                            className={[
                                                `d-flex`,
                                                `justify-content-center`,
                                                `align-items-center`,
                                                `mr-3`,
                                                `flex-column`,
                                                classes.tile,
                                            ].join(" ")}
                                            onMouseEnter={() => handleHoverSettingsNav(setting.id)}
                                            onMouseLeave={handleHoverSettingsNavOut}
                                        >
                                            <img
                                                src={setting.id === hoverSettingsNav ? setting.image1 : setting.image}
                                                alt="Dashboard"
                                                className={[`mb-2`, classes.tileImage].join(" ")}
                                            />
                                            <label
                                                id="label"
                                                className={[
                                                    `noMarginBottom`,
                                                    // `mt-3`,
                                                    classes.tileLabel,
                                                ].join(" ")}
                                                // style={{ fontSize: "14px", fontWeight: 600, color: "#000" }}
                                            >
                                                {setting.title}
                                            </label>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    {isAddingSensor && (
                        <div className={[`d-flex`, `justify-content-center`, `align-items-center`, classes.overlay].join(" ")}>
                            <div
                                style={{
                                    borderRadius: "30px",
                                    overflow: "hidden",
                                    border: "solid 1px #888",
                                }}
                                className={[
                                    `mt-5`,
                                    `animate__animated`,
                                    !close ? `animate__slideInUp` : `animate__slideOutDown`,
                                    `animate__fast`,
                                    classes.popUpForm,
                                ].join(" ")}
                            >
                                <div className="p-3 d-flex justify-content-between" style={{ backgroundColor: "#785770" }}>
                                    <span></span>
                                    <label style={{ color: "#fff", fontSize: "20px", fontWeight: 600 }} className="noMarginBottom">
                                        CREATE SENSOR
                                    </label>
                                    <img
                                        alt="Close"
                                        src="assets/img/datadashboard/close.svg"
                                        onClick={handleCloseAddSensor}
                                        style={{ cursor: "pointer" }}
                                    />
                                </div>
                                <div className="pt-3 container">
                                    <div className="d-flex align-items-center mt-3">
                                        <label className={[`mr-3`, classes.popUpFormLabel].join(" ")}>Sensor Name</label>
                                        <div className={[`d-flex`, classes.popUpFormInputDiv].join(" ")}>
                                            <input type="text" className={classes.popUpFormInput} />
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center mt-3">
                                        <label className={[`mr-3`, `noMarginBottom`, classes.popUpFormLabel].join(" ")}>Sensor Type</label>
                                        <div className={[`d-flex`, classes.popUpFormInputDiv].join(" ")}>
                                            <input type="text" className={classes.popUpFormInput} />
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center mt-3">
                                        <label className={[`mr-3`, `noMarginBottom`, classes.popUpFormLabel].join(" ")}>Unique ID</label>
                                        <div className={[`d-flex`, classes.popUpFormInputDiv].join(" ")}>
                                            <input type="text" className={classes.popUpFormInput} />
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center mt-3">
                                        <label className={[`mr-3`, `noMarginBottom`, classes.popUpFormLabel].join(" ")}>Group</label>
                                        <div className={[`d-flex`, classes.popUpFormInputDiv].join(" ")}>
                                            <input type="text" className={classes.popUpFormInput} style={{ flex: 1 }} />
                                            <img alt="Location" src="assets/img/datareport/addIconSmall.svg" style={{ width: "17px" }} />
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center mt-3">
                                        <label className={[`mr-3`, `noMarginBottom`, classes.popUpFormLabel].join(" ")}>Thresholds</label>
                                        {/* <div
                className={[`d-flex`, `mr-3`, classes.popUpFormInputDiv].join(
                  " "
                )}
              >
                <select className={classes.selectVariable}>
                  <option selected disabled>
                    Select Variable
                  </option>
                  <option>Select Variable</option>
                  <option>Select Variable</option>
                  <option>Select Variable</option>
                </select>
              </div> */}
                                        <div
                                            className={[`d-flex`, `justify-content-between`, classes.thresholdPolicyDiv].join(" ")}
                                            onMouseEnter={handleHoverThreshold}
                                            onMouseLeave={handleRemoveHoverThreshold}
                                        >
                                            <img src={!isHoveredThreshold ? clipIconBlack : clipIconWhite} />
                                            <label className={[`noMarginBottom`].join(" ")}>THRESHOLD POLICY</label>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-center mt-3">
                                        <div className={[`d-flex`, `flex-column`, `mr-3`].join(" ")}>
                                            <label className={[`noMarginBottom`, `mt-3`, `mb-4`, classes.createReportButton].join(" ")}>
                                                Add Sensor
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    {isAddingUser && (
                        <div className={[`d-flex`, `justify-content-center`, `align-items-center`, classes.overlay].join(" ")}>
                            <div
                                className={[
                                    // `offset-4`,
                                    `mt-5`,
                                    `animate__animated`,
                                    !close ? `animate__slideInUp` : `animate__slideOutDown`,
                                    `animate__fast`,
                                    classes.popUpForm,
                                ].join(" ")}
                                style={{ border: "solid 1px #888" }}
                            >
                                <div className="p-3 d-flex justify-content-between" style={{ backgroundColor: "#785770" }}>
                                    <span></span>
                                    <label style={{ color: "#fff", fontSize: "20px", fontWeight: 600 }} className="noMarginBottom">
                                        CREATE USER
                                    </label>
                                    <img
                                        alt="Close"
                                        src="assets/img/datadashboard/close.svg"
                                        onClick={handleCloseAddUser}
                                        style={{ cursor: "pointer" }}
                                    />
                                </div>
                                <div className="pt-3 container">
                                    <div className="d-flex align-items-center">
                                        <label style={{ width: "113px" }} className={[`mr-3`, classes.popUpFormLabel].join(" ")}>
                                            User Name
                                        </label>
                                        <input
                                            type="text"
                                            className={classes.popUpFormInput2}
                                            // placeholder="Report 1"
                                        />
                                    </div>
                                    <div className="mt-3 d-flex align-items-center">
                                        <label style={{ width: "113px" }} className={[`mr-3`, classes.popUpFormLabel].join(" ")}>
                                            Email
                                        </label>
                                        <input
                                            type="text"
                                            className={classes.popUpFormInput2}
                                            // placeholder="Report 1"
                                        />
                                    </div>
                                    <div className="mt-3 d-flex align-items-center">
                                        <label style={{ width: "113px" }} className={[`mr-3`, classes.popUpFormLabel].join(" ")}>
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            className={classes.popUpFormInput2}
                                            // placeholder="Report 1"
                                        />
                                    </div>
                                    <div className="mt-3 d-flex align-items-center">
                                        <label style={{ width: "113px" }} className={[`mr-3`, classes.popUpFormLabel].join(" ")}>
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
                                                            level.id === activeUser ? classes.activeUserLevel : null,
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
                                            <label className={[`noMarginBottom`, `mt-3`, classes.createReportButton].join(" ")}>
                                                Add User
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    {isAddingReport && (
                        <div className={[`d-flex`, `justify-content-center`, `align-items-center`, classes.overlay].join(" ")}>
                            <div
                                className={[
                                    // `offset-4`,
                                    `mt-5`,
                                    `animate__animated`,
                                    !close ? `animate__slideInUp` : `animate__slideOutDown`,
                                    `animate__fast`,
                                    classes.popUpForm,
                                ].join(" ")}
                                style={{ border: "solid 1px #888" }}
                            >
                                <div className="p-3 d-flex justify-content-between" style={{ backgroundColor: "#785770" }}>
                                    <span></span>
                                    <label style={{ color: "#fff", fontSize: "20px", fontWeight: 600 }} className="noMarginBottom">
                                        CREATE REPORT
                                    </label>
                                    <img
                                        alt="Close"
                                        src="assets/img/datadashboard/close.svg"
                                        onClick={handleCloseAddReport}
                                        style={{ cursor: "pointer" }}
                                    />
                                </div>
                                <div className="pt-3 container">
                                    <div className="d-flex align-items-center">
                                        <label style={{ width: "113px" }} className={[`mr-3`, classes.popUpFormLabel].join(" ")}>
                                            Report Name
                                        </label>
                                        <input type="text" className={classes.popUpFormInput1} placeholder="Report 1" />
                                    </div>
                                    <div className="d-flex mt-3 align-items-center">
                                        <label className="mr-4 noMarginBottom" style={{ width: "115px" }}>
                                            Sensor / Group
                                        </label>
                                        <div className={[`d-flex`, `justify-content-center`, classes.dataReportStartDateDiv].join(" ")}>
                                            <div
                                                className={[`d-flex`, `justify-content-between`, `mr-2`, classes.chooseSensorDiv].join(" ")}
                                            >
                                                <label
                                                    className={[
                                                        `noMarginBottom`,
                                                        // classes.dataReportStartDateLabel,
                                                    ].join(" ")}
                                                >
                                                    Choose Sensor
                                                </label>
                                                <img src="assets/img/datareport/addIconSmall.svg" style={{ width: "17px" }} />
                                            </div>
                                            <div className={[`d-flex`, `justify-content-between`, classes.chooseSensorDiv].join(" ")}>
                                                <label
                                                    className={[
                                                        `noMarginBottom`,
                                                        // classes.dataReportStartDateLabel,
                                                    ].join(" ")}
                                                >
                                                    Choose Sensor Group
                                                </label>
                                                <img src="assets/img/datareport/addIconSmall.svg" style={{ width: "17px" }} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="d-flex mt-3 align-items-center">
                                        <label className="mr-4 noMarginBottom" style={{ width: "110px" }}>
                                            Start Date:
                                        </label>
                                        <div className="row flex-column align-items-center">
                                            <div class={[classes.customSelect1, classes.solid1].join(" ")}>
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
                                        <label className="mr-4 noMarginBottom" style={{ width: "110px" }}>
                                            Start Time:
                                        </label>
                                        <div className="row flex-column align-items-center">
                                            <div class={[classes.customSelect1, classes.solid1].join(" ")}>
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
                                        <label className="mr-4 noMarginBottom" style={{ width: "110px" }}>
                                            Span:
                                        </label>
                                        <div className="row flex-column align-items-center">
                                            <div class={[classes.customSelect1, classes.solid1].join(" ")}>
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
                                        <label className="mr-4 noMarginBottom" style={{ width: "110px" }}>
                                            File Type:
                                        </label>
                                        <div className="row flex-column align-items-center">
                                            <div class={[classes.customSelect1, classes.solid1].join(" ")}>
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
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-center mt-3">
                                        <div className={[`d-flex`, `flex-column`, `mr-3`].join(" ")}>
                                            <label className={[`noMarginBottom`, `mt-3`, classes.createReportButton].join(" ")}>
                                                Create Report
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    {isThresholdModalOpen && (
                        <div className={[`d-flex`, `justify-content-center`, `align-items-center`, classes.overlay].join(" ")}>
                            <div
                                style={{
                                    borderRadius: "30px",
                                    overflow: "hidden",
                                    border: "solid 1px #888",
                                    height: "460px",
                                }}
                                className={[
                                    `mt-5`,
                                    `animate__animated`,
                                    !close ? `animate__slideInUp` : `animate__slideOutDown`,
                                    `animate__fast`,
                                    classes.popUpForm,
                                ].join(" ")}
                            >
                                <div className="p-3 d-flex justify-content-between" style={{ backgroundColor: "#785770" }}>
                                    <span></span>
                                    <label style={{ color: "#fff", fontSize: "20px", fontWeight: 600 }} className="noMarginBottom">
                                        CREATE THRESHOLD POLICY
                                    </label>
                                    <img
                                        alt="Close"
                                        src="assets/img/datadashboard/close.svg"
                                        onClick={handleCloseAddThresholPolicy}
                                        style={{ cursor: "pointer" }}
                                    />
                                </div>
                                <div className="pt-3 container">
                                    <div className="d-flex mt-3 align-items-center">
                                        <label className="mr-4 noMarginBottom" style={{ width: "128px" }}>
                                            Sensor / Group
                                        </label>
                                        <div className={[`d-flex`, `justify-content-center`, classes.dataReportStartDateDiv].join(" ")}>
                                            <div
                                                className={[`d-flex`, `justify-content-between`, `mr-2`, classes.chooseSensorDiv].join(" ")}
                                            >
                                                <label
                                                    className={[
                                                        `noMarginBottom`,
                                                        // classes.dataReportStartDateLabel,
                                                    ].join(" ")}
                                                >
                                                    Choose Sensor
                                                </label>
                                                <img src="assets/img/datareport/addIconSmall.svg" style={{ width: "17px" }} />
                                            </div>
                                            <div
                                                className={[`d-flex`, `justify-content-between`, classes.chooseSensorDiv].join(" ")}
                                                style={{ transform: "translateX(10px)" }}
                                            >
                                                <label
                                                    className={[
                                                        `noMarginBottom`,
                                                        // classes.dataReportStartDateLabel,
                                                    ].join(" ")}
                                                >
                                                    Choose Sensor Group
                                                </label>
                                                <img src="assets/img/datareport/addIconSmall.svg" style={{ width: "17px" }} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="d-flex align-items-center mt-3">
                                        <label className={[`mr-3`, classes.popUpFormLabel].join(" ")}>Policy Name</label>
                                        <div className={[`d-flex`, classes.popUpFormInputDiv].join(" ")}>
                                            <input type="text" className={classes.popUpFormInput} />
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center mt-3">
                                        <label className={[`mr-3`, classes.popUpFormLabel].join(" ")}>Value to Check for</label>
                                        <div className="d-flex align-items-center" style={{ flex: 1 }}>
                                            <div
                                                className="d-flex mr-2"
                                                style={{
                                                    flex: 1,
                                                    border: "solid 1px #888",
                                                    padding: "6px 10px",
                                                    borderRadius: "8px",
                                                }}
                                            >
                                                <input className={classes.valueFieldInput} />
                                            </div>
                                            <label className="noMarginBottom mr-2" style={{ fontWeight: 600 }}>
                                                Unit
                                            </label>
                                            <div
                                                style={{
                                                    border: "solid 1px #888",
                                                    padding: "6px 10px",
                                                    borderRadius: "8px",
                                                    width: "90px",
                                                }}
                                            >
                                                <input className={classes.valueFieldInput} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex mt-3 align-items-center">
                                        <label className="mr-4 noMarginBottom" style={{ width: "126px" }}>
                                            Select Operator
                                        </label>
                                        <div className="row align-items-center" style={{ transform: "translateX(-3px)", flex: 1 }}>
                                            <div class={[classes.customSelect1, classes.solid1].join(" ")} style={{ minWidth: "95%" }}>
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
                                    <div className="d-flex align-items-center mt-3">
                                        <label className={[`mr-3`, classes.popUpFormLabel].join(" ")}>Email</label>
                                        <div className={[`d-flex`, classes.popUpFormInputDiv].join(" ")}>
                                            <input type="text" className={classes.popUpFormInput} />
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-center mt-3">
                                        <div className={[`d-flex`, `flex-column`, `mr-3`].join(" ")}>
                                            <label className={[`noMarginBottom`, `mt-3`, `mb-4`, classes.createReportButton].join(" ")}>
                                                Create Policy
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default HomeContainer;
