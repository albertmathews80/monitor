import classes from "./Management.module.css";
import React, { useState } from "react";
import FullAppBar from "../components/FullAppBar";
import SecAppBar from "../components/SecAppBar";
import "bootstrap/dist/css/bootstrap.min.css";

const Management = (props) => {
  const routes = [
    {
      title: "ALL USERS",
      link: "/all-users",
      isActive: false,
    },

    {
      title: "MANAGEMENT",
      link: "/user-management",
      isActive: true,
    },

    {
      title: "PAYMENTS",
      link: "/user-payment",
      isActive: false,
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
        <SecAppBar title="Management" subTitle="Accounts" routes={routes} />
        <div className="home-container contentContainer">
          <div
            className=" mt-5"
            style={{
              background: "#fff",
              background: "#f3eef2",
              // boxShadow: "0px 0px 5px 0px #ccc",
              borderRadius: "15px",
              // margin: "0 20px",
              padding: "15px 15px",
              minHeight: "70vh",
            }}
          >
            <div
              style={{
                borderTopLeftRadius: "15px",
                overflow: "hidden",
                borderTopRightRadius: "15px",
              }}
            >
              <table className={classes.table}>
                <thead>
                  <tr className={classes.tableHeadingsRow}>
                    <th style={{ paddingLeft: "15px" }}>Username</th>
                    <th>Email</th>
                    <th>User Type</th>
                    <th>Reset Password</th>
                    <th>Suspend</th>
                    <th>Account Access</th>
                  </tr>
                </thead>
                <tbody>
                  {[...Array(15)].map((i, j) => {
                    return (
                      <tr className={classes.tableDataRow}>
                        <td style={{ padding: "10px 15px" }}>Miroslav Minev</td>
                        <td>user@gmail.com</td>
                        <td>
                          {/* <div
                            className={[
                              `d-flex`,
                              `justify-content-between`,
                              `align-items-center`,
                              classes.userTypeTdDiv,
                            ].join(" ")}
                          >
                            <label
                              className={[
                                `noMarginBottom`,
                                classes.userTypeTdLabel,
                              ].join(" ")}
                            >
                              Admin
                            </label>
                            <i class="fas fa-arrow-down"></i>
                          </div> */}
                          <div
                            class={[classes.customSelect, classes.solid].join(
                              " "
                            )}
                          >
                            <select
                              style={{
                                // backgroundColor: "#373633",
                                // color: "#fff",
                                // borderRadius: "5px",
                                fontSize: "10px",
                                height: "25px",
                                padding: "0px 10px",
                                fontWeight: 600,
                                transform: "translateX(-10px)",
                              }}
                            >
                              <option>Admin</option>
                              <option>User</option>
                            </select>
                          </div>
                        </td>
                        <td>Send Link</td>
                        <td>
                          <label
                            className={[
                              `noMarginBottom`,
                              classes.suspendTdLabel,
                            ].join(" ")}
                          >
                            Suspend Account
                          </label>
                        </td>
                        <td>
                          <label
                            className={[
                              `noMarginBottom`,
                              classes.suspendTdLabel,
                            ].join(" ")}
                          >
                            Log in
                          </label>
                        </td>
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
  );
};

export default Management;
