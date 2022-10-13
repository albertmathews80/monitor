import classes from "./Payment.module.css";
import React, { useState } from "react";
import FullAppBar from "../components/FullAppBar";
import SecAppBar from "../components/SecAppBar";
import "bootstrap/dist/css/bootstrap.min.css";

const Payment = (props) => {
  const routes = [
    {
      title: "ALL USERS",
      link: "/all-users",
      isActive: false,
    },

    {
      title: "MANAGEMENT",
      link: "/user-management",
      isActive: false,
    },

    {
      title: "PAYMENTS",
      link: "/user-payment",
      isActive: true,
    },
  ];
  return (
    <div>
      <FullAppBar
        path={props.match.path}
        home={false}
        data={false}
        sensors={false}
        settings={false}
        accounts={true}
      />

      <div className="contentContainer">
        <SecAppBar title="Payment" subTitle="Accounts" routes={routes} />
        <div className="home-container col contentContainer">
          <div
            className=" mt-5"
            style={{
              background: "#fff",
              background: "rgb(255, 255, 255)",
              boxShadow: "0px 0px 5px 0px #ccc",
              borderRadius: "15px",
              // margin: "0 20px",
              padding: "15px 25px",
              minHeight: "70vh",
            }}
          >
            <h3 className={classes.paymentsMainHeading}>
              SUBSCRIPTION PAYMENTS
            </h3>
            <div className="row">
              <div className="col-12 col-md-6">
                <div
                  className={[
                    `d-flex`,
                    `flex-column`,
                    classes.paymentLeftDiv,
                  ].join(" ")}
                  style={{ borderRight: "solid 1px #ccc" }}
                >
                  <div style={{ maxWidth: "85%" }}>
                    <div className="d-flex flex-column">
                      <label className={[`noMarginBottom`].join(" ")}>
                        No of sensors
                      </label>
                      <div className="d-flex mt-3 align-items-center">
                        <div className="d-flex flex-column" style={{ flex: 1 }}>
                          <div
                            class={[classes.customSelect, classes.solid].join(
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
                            >
                              <option selected disabled>
                                Select Sensor
                              </option>
                              <option>Sensor 1</option>
                              <option>Sensor 2</option>
                              <option>Sensor 3</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex flex-column mt-4">
                      <label className={[`noMarginBottom`].join(" ")}>
                        Period of payment
                      </label>
                      <div
                        style={{ padding: "0 20px 0 0" }}
                        className="row mt-3 align-items-center"
                      >
                        <div className="col-3">
                          <div
                            className={[
                              `d-flex`,
                              `justify-content-center`,
                              `align-items-center`,
                              // `mr-3`,
                              classes.paymentDurationDiv,
                            ].join(" ")}
                          >
                            <label
                              className={[
                                `noMarginBottom`,
                                classes.paymentDurationLabel,
                              ].join(" ")}
                            >
                              1 Month
                            </label>
                          </div>
                        </div>
                        <div className="col-3">
                          <div
                            className={[
                              `d-flex`,
                              `justify-content-center`,
                              `align-items-center`,
                              // `mr-3`,
                              classes.paymentDurationDiv,
                            ].join(" ")}
                          >
                            <label
                              className={[
                                `noMarginBottom`,
                                classes.paymentDurationLabel,
                              ].join(" ")}
                            >
                              3 Months
                            </label>
                          </div>
                        </div>
                        <div className="col-3">
                          <div
                            className={[
                              `d-flex`,
                              `justify-content-center`,
                              `align-items-center`,
                              // `mr-3`,
                              classes.paymentDurationDiv,
                            ].join(" ")}
                          >
                            <label
                              className={[
                                `noMarginBottom`,
                                classes.paymentDurationLabel,
                              ].join(" ")}
                            >
                              6 Months
                            </label>
                          </div>
                        </div>
                        <div className="col-3">
                          <div
                            className={[
                              `d-flex`,
                              `justify-content-center`,
                              `align-items-center`,
                              // `mr-3`,
                              classes.paymentDurationDiv,
                            ].join(" ")}
                          >
                            <label
                              className={[
                                `noMarginBottom`,
                                classes.paymentDurationLabel,
                              ].join(" ")}
                            >
                              12 Months
                            </label>
                          </div>
                        </div>
                        {/* <div
                        className={[
                          `d-flex`,
                          `justify-content-center`,
                          `align-items-center`,
                          `mr-3`,
                          classes.paymentDurationDiv,
                        ].join(" ")}
                      >
                        <label
                          className={[
                            `noMarginBottom`,
                            classes.paymentDurationLabel,
                          ].join(" ")}
                        >
                          3 Months
                        </label>
                      </div>
                      <div
                        className={[
                          `d-flex`,
                          `justify-content-center`,
                          `align-items-center`,
                          `mr-3`,
                          classes.paymentDurationDiv,
                        ].join(" ")}
                      >
                        <label
                          className={[
                            `noMarginBottom`,
                            classes.paymentDurationLabel,
                          ].join(" ")}
                        >
                          6 Months
                        </label>
                      </div>
                      <div
                        className={[
                          `d-flex`,
                          `justify-content-center`,
                          `align-items-center`,
                          `mr-3`,
                          classes.paymentDurationDiv,
                        ].join(" ")}
                      >
                        <label
                          className={[
                            `noMarginBottom`,
                            classes.paymentDurationLabel,
                          ].join(" ")}
                        >
                          12 Months
                        </label>
                      </div> */}
                      </div>
                    </div>
                    <div className="d-flex flex-column mt-4">
                      <label className={[`noMarginBottom`].join(" ")}>
                        Total Payment
                      </label>
                      <div
                        className={[
                          `d-flex`,
                          `justify-content-center`,
                          `align-items-center`,
                          `mt-3`,
                          `align-items-center`,
                          classes.totalPaymentDiv,
                        ].join(" ")}
                      >
                        <div className="d-flex align-items-baseline">
                          <h2
                            className={[
                              `noMarginBottom`,
                              `mr-3`,
                              classes.paymentAmount,
                            ].join(" ")}
                          >
                            &pound; 120
                          </h2>
                          <label
                            className={[
                              `noMarginBottom`,
                              classes.vatLabel,
                            ].join(" ")}
                          >
                            (excl. VAT)
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-12 col-md-6 d-flex align-items-center"
                style={{ border: "solid 1px #888", borderRadius: "5px" }}
              >
                <div
                  className={[
                    `d-flex`,
                    `flex-column`,

                    classes.paymentRightDiv,
                  ].join(" ")}
                >
                  <h3>CARD DETAIL</h3>
                  <div className="row">
                    <div
                      className={[
                        `d-flex`,
                        `flex-column`,
                        `col-8`,
                        `mb-4`,
                        // `mr-4`,
                        classes.cardInfoMainDiv,
                      ].join(" ")}
                    >
                      <div className={classes.cardDetailInputDiv}>
                        <input placeholder="Name" />
                      </div>
                      <div
                        className={[`mt-3`, classes.cardDetailInputDiv].join(
                          " "
                        )}
                      >
                        <input placeholder="Card Number" />
                      </div>
                      <div className="d-flex mt-3">
                        <div
                          className={[
                            `mr-3`,
                            classes.cardDetailInputDiv,
                            classes.monthYearInputDiv,
                          ].join(" ")}
                        >
                          <input placeholder="MM" />
                        </div>
                        <div
                          className={[
                            classes.cardDetailInputDiv,
                            classes.monthYearInputDiv,
                          ].join(" ")}
                        >
                          <input placeholder="YYYY" />
                        </div>
                      </div>
                      <div
                        className={[
                          `mt-3`,
                          classes.cardDetailInputDiv,
                          classes.monthYearInputDiv,
                        ].join(" ")}
                      >
                        <input placeholder="CVV" />
                      </div>
                    </div>
                    <div
                      className={[`col-4`, , classes.cardImageDiv].join(" ")}
                    >
                      <img
                        src="assets/img/cardImage.svg"
                        style={{ width: "100%" }}
                      />
                    </div>
                  </div>
                  <div className="d-flex mt-3">
                    <div
                      className={[
                        `d-flex`,
                        `flex-column`,
                        `align-items-center`,
                        `justify-content-center`,
                        `mr-3`,
                        classes.rightDivAmountDiv,
                      ].join(" ")}
                    >
                      <h3 className="noMarginBottom">&pound;140.00</h3>
                      <label
                        className="noMarginBottom"
                        style={{
                          fontSize: "10px",
                          color: "#fff",
                          lineHeight: 1,
                          transform: "translateY(-5px)",
                        }}
                      >
                        (incl VAT)
                      </label>
                    </div>
                    <div
                      className={[
                        `d-flex`,
                        `flex-column`,
                        `align-items-center`,
                        `justify-content-center`,
                        classes.rightDivAmountSecDiv,
                      ].join(" ")}
                    >
                      <h3 className="noMarginBottom">Pay with credit card</h3>
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

export default Payment;
