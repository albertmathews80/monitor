import classes from "./DataDashboard.module.css";
import React, { useState } from "react";
import FullAppBar from "../components/FullAppBar";
import FullAppBar1 from "../components/FullAppBar1";
import SecAppBar from "../components/SecAppBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Animated } from "react-animated-css";
import Revenue from "../imagesAssets/revenue.png";
import Sales from "../imagesAssets/sales.png";
import Users from "../imagesAssets/users.png";
import Sensor from "../imagesAssets/sensor.png";
import LineChart from "../components/LineChart";
import BarChart from "../components/BarChart";
import PieChart from "../components/PieChart";
import GaugeChart from "react-gauge-chart";
import { RadialGauge, LinearGauge } from "react-canvas-gauges";

const DataDashboard = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [close, setClose] = useState(false);
  const [hoverDataNav, setHoverDataNav] = useState(null);
  const [selectedSensor, setSelectedSensor] = useState("");
  const [selectedChart, setSelectedChart] = useState();
  const [renderedCharts, setRenderedCharts] = useState([]);
  const [widgetIndex, setWidgetIndex] = useState(1);
  const handleCloseModal = () => {
    setClose(true);
    setTimeout(() => {
      setIsModalOpen(!isModalOpen);
    }, 300);
  };
  const handleToggleModal = () => {
    setClose(false);
    setIsModalOpen(!isModalOpen);
  };
  const modalIcons = [
    {
      id: 0,
      title: "Bar Chart",
      image: "assets/img/datadashboard/widgetModal/barGraph.svg",
      image1: "assets/img/datadashboard/widgetModal/barGraph1.svg",
    },
    {
      id: 1,
      title: "Pie Chart",
      image: "assets/img/datadashboard/widgetModal/pieGraph.svg",
      image1: "assets/img/datadashboard/widgetModal/pieGraph1.svg",
    },
    {
      id: 2,
      title: "Live Numeric",
      image: "assets/img/datadashboard/widgetModal/liveNumeric.svg",
      image1: "assets/img/datadashboard/widgetModal/liveNumeric1.svg",
    },
    {
      id: 3,
      title: "Line Chart",
      image: "assets/img/datadashboard/widgetModal/lineGraph.svg",
      image1: "assets/img/datadashboard/widgetModal/lineGraph1.svg",
    },
    {
      id: 4,
      title: "Gauge",
      image: "assets/img/datadashboard/widgetModal/gauge.svg",
      image1: "assets/img/datadashboard/widgetModal/gauge1.svg",
    },
    {
      id: 5,
      title: "Thermometer",
      image: "assets/img/datadashboard/widgetModal/thermometer.svg",
      image1: "assets/img/datadashboard/widgetModal/thermometer1.svg",
    },
    // {
    //   title: "Histogram",
    //   image: "assets/img/datadashboard/widgetModal/histogram.svg",
    // },
  ];
  const routes = [
    {
      title: "CLICK TO",
      subTitle: "ADD A WIDGET",
      image: "assets/img/data/addWdigetModal.svg",
      image1: "assets/img/data/addWdigetModal1.svg",
      isFunc: true,
      onClick: handleToggleModal,
    },
    {
      title: "DASHBOARD",
      link: "/data-dashboard",
      isActive: true,
    },
    {
      title: "REPORT",
      link: "/data-report",
      isActive: false,
    },
    {
      title: "ANALYTICS",
      link: "/data-analytics",
      isActive: false,
    },
  ];
  const dashboardTopTiles = [
    {
      id: 1,
      title: "Sales",
      image: Sales,
      value: "$ 150000",
      for: "Last Week",
    },
    {
      id: 2,
      title: "Sensors",
      image: Sensor,
      value: "6 Sensors",
      for: "Last Week",
    },
    {
      id: 3,
      title: "Users",
      image: Users,
      value: "150 Users",
      for: "Last Week",
    },
    {
      id: 4,
      title: "Revenue",
      image: Revenue,
      value: "$ 80000",
      for: "Last Week",
    },
  ];
  const widgetCharts = [
    {
      id: 1,
      widget: () => {
        return <LineChart />;
      },
    },
    {
      id: 2,
      widget: () => {
        return <LineChart />;
      },
    },
    {
      id: 3,
      widget: () => {
        return <LineChart />;
      },
    },
    {
      id: 4,
      widget: () => {
        return <LineChart />;
      },
    },
    {
      id: 5,
      widget: () => {
        return <LineChart />;
      },
    },
    {
      id: 6,
      widget: () => {
        return <LineChart />;
      },
    },
  ];
  const sensorsList = [
    "Strain",
    "Temperature",
    "Displacement",
    "Load /Force",
    "Pressure",
  ];

  const handleHoverDataNav = (nav) => {
    setHoverDataNav(nav);
  };
  const handleHoverDataNavOut = () => {
    setHoverDataNav(null);
  };
  const handleSelectSensor = (e) => {
    setSelectedSensor(e.target.value);
  };
  const handleSelectChart = (chart) => {
    console.log("chart", chart);
    setSelectedChart(chart);
  };
  const handleAddWidget = () => {
    // let tempCharts = [];
    // tempCharts.push(selectedChart);
    let tempObj = selectedChart;
    tempObj.tempId = widgetIndex + 1;
    setRenderedCharts((ps) => {
      return [...ps, tempObj];
    });
    setWidgetIndex(widgetIndex + 1);
    console.log("renderChart", renderedCharts);
    setClose(true);
    setTimeout(() => {
      setIsModalOpen(!isModalOpen);
    }, 300);
  };

  const handleRemoveWidget = (widgetId) => {
    console.log("widgetId", widgetId);
    console.log("renderedCharts", renderedCharts);
    const tempArray = renderedCharts.filter(
      (chart) => chart.tempId !== widgetId.tempId
    );
    setRenderedCharts([...tempArray]);
    // return renderedCharts.filter((chart) => chart.tempId === widgetId.tempId);
    // renderedCharts.filter((chart) => chart.id !== widgetId.id);
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
            // id="modal"
            className={[
              // `offset-4`,
              `animate__animated`,
              !close ? `animate__slideInUp` : `animate__slideOutDown`,
              `animate__fast`,
              classes.popUpForm,
            ].join(" ")}
          >
            <div
              className="p-3 d-flex justify-content-center"
              style={{ backgroundColor: "#785770" }}
            >
              {/* <span></span> */}
              <label
                style={{ color: "#fff", fontSize: "20px", fontWeight: 600 }}
                className="noMarginBottom"
              >
                CREATE WIDGET
              </label>
              <img
                alt="Close"
                src="assets/img/datadashboard/close.svg"
                onClick={handleCloseModal}
                style={{
                  cursor: "pointer",
                  position: "absolute",
                  right: "15px",
                  top: "10px",
                  width: "13px",
                }}
              />
            </div>
            <div
              className="d-flex flex-column align-items-center"
              style={{ minWidth: "550px" }}
            >
              <div
                className="row flex-column align-items-center"
                style={{ minWidth: "400px" }}
              >
                <label
                  className={[
                    `mt-3`,
                    // `noMarginBottom`,
                    classes.addWidghtModalSelectSensorLabel,
                  ].join(" ")}
                >
                  Select Sensor
                </label>
                <div class={[classes.customSelect, classes.solid].join(" ")}>
                  <select
                    style={{
                      // backgroundColor: "#373633",
                      // color: "#fff",
                      borderRadius: "5px",
                      fontSize: "13px",
                      height: "37px",
                      padding: "7px 10px",
                    }}
                    onChange={handleSelectSensor}
                  >
                    <option selected disabled>
                      Select Sensor
                    </option>
                    {/* <option>Strain</option>
                    <option>Temperature</option>
                    <option>Displacement</option>
                    <option>Load / Force</option>
                    <option>Pressure</option> */}
                    {/* {sensorsList.map((item, i) => { */}
                    {[...Array(5)].map((item, i) => {
                      return <option key={i}>{`Sensor ${i + 1}`}</option>;
                    })}
                  </select>
                </div>
                <div
                  class={[classes.customSelect, classes.solid, "mt-3"].join(
                    " "
                  )}
                >
                  <select
                    style={{
                      // backgroundColor: "#373633",
                      // color: "#fff",
                      borderRadius: "5px",
                      fontSize: "13px",
                      height: "37px",
                      padding: "7px 10px",
                    }}
                    onChange={handleSelectSensor}
                  >
                    <option selected disabled>
                      Select Sensor Group
                    </option>
                    {/* <option>Strain</option>
                    <option>Temperature</option>
                    <option>Displacement</option>
                    <option>Load / Force</option>
                    <option>Pressure</option> */}
                    {/* {sensorsList.map((item, i) => { */}
                    {[...Array(5)].map((item, i) => {
                      return <option key={i}>{`Sensor Group ${i + 1}`}</option>;
                    })}
                  </select>
                </div>
              </div>

              <div className="row pt-3" style={{ maxWidth: "350px" }}>
                {modalIcons.map((icon, i) => {
                  return (
                    <div
                      className="d-flex flex-column col-4 align-items-center"
                      onClick={() => handleSelectChart(icon)}
                      key={i}
                    >
                      <div
                        className={[
                          `d-flex`,
                          `flex-column`,
                          `align-items-center`,
                          `justify-content-center`,
                          `mt-4`,
                          classes.iconImageDiv,
                        ].join(" ")}
                        style={{
                          backgroundColor:
                            selectedChart &&
                            icon.id === selectedChart.id &&
                            "#655360",
                        }}
                        onMouseEnter={() => handleHoverDataNav(icon.id)}
                        onMouseLeave={handleHoverDataNavOut}
                      >
                        <img
                          alt={icon.title}
                          src={
                            icon.id === hoverDataNav ||
                            (selectedChart && icon.id === selectedChart.id)
                              ? icon.image1
                              : icon.image
                          }
                          className={[`pt-3`, classes.iconImage].join(" ")}
                        />
                        <label
                          className={[
                            `noMarginBottom`,
                            `pt-3`,
                            `pb-2`,
                            `text-center`,
                            classes.addWidgetModalTileLabel,
                          ].join(" ")}
                          style={{
                            fontSize: "13px",
                            color:
                              selectedChart &&
                              icon.id === selectedChart.id &&
                              "#fff",
                          }}
                        >
                          {icon.title}
                        </label>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="mt-3 mb-3">
                <button
                  onClick={handleAddWidget}
                  className={classes.popUpFormAddButton}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <FullAppBar
        path={props.match.path}
        home={false}
        data={true}
        sensors={false}
        settings={false}
        accounts={false}
      />

      <div className="contentContainer">
        <SecAppBar
          title="Data"
          subTitle="Dashboard"
          routes={routes}
          widgetModal={handleToggleModal}
        />
        <div className="home-container col contentContainer">
          <div
            className=" mt-5"
            style={{
              background: "#fff",
              background: "rgb(255, 255, 255)",
              boxShadow: "0px 0px 5px 0px #ccc",
              borderRadius: "15px",
              minHeight: "70vh",
            }}
          >
            <div className="row" style={{ padding: "15px" }}>
              {dashboardTopTiles.map((item, i) => {
                return (
                  <div className="col-md-3">
                    <div
                      style={{
                        // backgroundColor: "#875b7c",
                        // height: "175px",
                        borderRadius: "10px",
                        boxShadow: "0px 0px 5px 2px #ccc",
                        // width: "90px",
                      }}
                    >
                      <div
                        style={{ padding: "15px" }}
                        className="d-flex justify-content-between"
                      >
                        <div>
                          <img src={item.image} />
                        </div>
                        <div>
                          <div>
                            <label
                              className="noMarginBottom"
                              style={{
                                fontSize: "23px",
                                // fontWeight: 600,
                                color: "#000",
                              }}
                            >
                              {item.title}
                            </label>
                          </div>
                          <div>
                            <label
                              className="noMarginBottom"
                              style={{
                                fontSize: "28px",
                                fontWeight: 600,
                                color: "#000",
                              }}
                            >
                              {item.value}
                            </label>
                          </div>
                        </div>
                      </div>
                      <hr style={{ margin: 0 }} />
                      <div
                        style={{ padding: "15px" }}
                        className="d-flex align-items-center"
                      >
                        <div className="mr-3">
                          <i
                            class="far fa-calendar-alt"
                            style={{
                              fontSize: "14px",
                              // fontWeight: 600,
                              color: "#000",
                            }}
                          ></i>
                        </div>
                        <div>
                          <label
                            className="noMarginBottom"
                            style={{
                              fontSize: "14px",
                              // fontWeight: 600,
                              color: "#000",
                            }}
                          >
                            {item.for}
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="row mt-3" style={{ padding: "15px" }}>
              {renderedCharts.map((item, i) => {
                return (
                  <div className="col-md-4 mb-4">
                    <div
                      className={
                        [
                          item.title === "Live Numeric" && `d-flex`,
                          ` justify-content-between`,
                          `flex-column align-items-center`,
                          item.title === "Thermometer" &&
                            `${classes.thermometer}`,
                          `pb-2`,
                        ].join(" ")
                        // "Thermometer"
                      }
                      style={{
                        // backgroundColor: "#875b7c",
                        // height: "315px",
                        minHeight: "100%",
                        borderRadius: "10px",
                        boxShadow: "0px 0px 5px 2px #ccc",
                        // width: "90px",
                      }}
                    >
                      <div
                        className="d-flex justify-content-between pr-2 pt-2"
                        style={{ minWidth: "100%" }}
                      >
                        <div></div>
                        <div>
                          <p>{item.title}</p>
                        </div>
                        <i
                          class="far fa-times-circle"
                          onClick={() => handleRemoveWidget(item)}
                        ></i>
                      </div>
                      {item.title === "Bar Chart" ? (
                        <BarChart />
                      ) : item.title === "Pie Chart" ? (
                        <PieChart />
                      ) : item.title === "Line Chart" ? (
                        <LineChart label="Strain" />
                      ) : item.title === "Live Numeric" ? (
                        <div className="d-flex flex-column">
                          <label style={{ textAlign: "center" }}>
                            Live Numbers
                          </label>
                          <h3 style={{ textAlign: "center" }}>750</h3>
                        </div>
                      ) : item.title === "Gauge" ? (
                        <GaugeChart
                          nrOfLevels={20}
                          // percent={0.86}
                          // colors={["#FF5F6D", "#FFC371"]}
                          colors={["#E3BAC6", "#8E5D83"]}
                          textColor="#000"
                          id="gauge-chart1"
                        />
                      ) : (
                        // <div className="d-flex flex-column">
                        //   <label style={{ textAlign: "center" }}>
                        //     Thermometer
                        //   </label>
                        //   <h3 style={{ textAlign: "center" }}>750</h3>
                        // </div>
                        <RadialGauge
                          units="°C"
                          title="Temperature"
                          // value={this.state.temperature}
                          value={35}
                          minValue={0}
                          maxValue={50}
                          majorTicks={[
                            "0",
                            "5",
                            "15",
                            "20",
                            "25",
                            "30",
                            "35",
                            "40",
                            "45",
                            "50",
                          ]}
                          minorTicks={2}
                        ></RadialGauge>
                      )}
                      {item.title === "Live Numeric" && (
                        <div>{/* <label>hi</label> */}</div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
            {/* <div
              className={[
                `col-12`,
                `d-flex`,
                `flex-column`,
                // `justify-content-center`,
                `align-items-center`,
                classes.addReportContainer,
              ].join(" ")}
              style={{ visibility: "hidden" }}
            >
              <h4
                className="noMarginBottom mt-4"
                style={{ color: "#875B7C", fontWeight: 600 }}
              >
                Add Widgets
              </h4>
              <div
                className={[
                  `d-flex`,
                  `flex-column`,
                  `justify-content-center`,
                  `align-items-center`,
                  `mt-4`,
                  `mb-4`,
                  classes.addReportFileDiv,
                ].join(" ")}
                onClick={handleToggleModal}
              >
                <img
                  alt="Add Report"
                  src="assets/img/datadashboard/widgets.svg"
                  className={classes.addReportImage}
                />
                <p
                  className={[
                    `mt-4`,
                    `noMarginBottom`,
                    classes.addWidgetText,
                  ].join(" ")}
                  style={{
                    fontSize: "12px",
                    width: "100px",
                    textAlign: "center",
                    zIndex: 99999,
                    position: "absolute",
                    color: "#000",
                  }}
                >
                  CLICK TO <br />
                  <span style={{ fontWeight: 900 }}>ADD A WIDGET</span>
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataDashboard;
