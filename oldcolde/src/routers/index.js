import React from "react";
import { Switch, Redirect } from "react-router-dom";
import HomeContainer from "../containers/Home";
import PageNotFound from "../containers/404";
import Route from "./route";
import PvtRoute from "./privateRoute";
import LoginContainer from "../containers/Login";
import ForgotPassword from "../containers/ForgotPassword";
import DataReport from "../containers/DataReport";
import DataDashboard from "../containers/DataDashboard";
import DataAnalytics from "../containers/DataAnalytics";
import AddSensor from "../containers/AddSensor";
import AllSensor from "../containers/AllSensor";
import FindSensor from "../containers/FindSensor";
import AddSensorGroup from "../containers/AddSensorGroup";
import UserDetails from "../containers/UserDetails";
import AccountSettings from "../containers/AccountSettings";
import NotificationSettings from "../containers/NotificationSettings";
import ThemeSettings from "../containers/ThemeSettings";
import NewUser from "../containers/NewUser";
import ExistingUser from "../containers/ExistingUser";
import Management from "../containers/Management";
import Payment from "../containers/Payment";
import SensorGroup1 from "../containers/SensorGroup1";
import FindUser from "../containers/FindUser";
import AllUsers from "../containers/AllUsers";
import AllThresholdPolicy from "../containers/AllThresholdPolicy";
const Router = (props) => {
  return (
    <Switch>
      <Route exact path="/" component={HomeContainer} />
      <Route exact path="/data-dashboard" component={DataDashboard} />
      <Route exact path="/data-report" component={DataReport} />
      <Route exact path="/data-analytics" component={DataAnalytics} />
      <Route exact path="/add-sensor" component={AddSensor} />
      <Route exact path="/all-sensor" component={AllSensor} />
      <Route exact path="/all-threshold-policy" component={AllThresholdPolicy} />
      <Route exact path="/all-users" component={AllUsers} />
      <Route exact path="/sensor-group-1" component={SensorGroup1} />
      <Route exact path="/find-sensor" component={FindSensor} />
      <Route exact path="/add-sensor-group" component={AddSensorGroup} />
      <Route exact path="/user-details" component={UserDetails} />
      <Route exact path="/account-settings" component={AccountSettings} />
      <Route
        exact
        path="/notification-settings"
        component={NotificationSettings}
      />
      <Route exact path="/theme-settings" component={ThemeSettings} />
      <Route exact path="/new-user" component={NewUser} />
      <Route exact path="/existing-user" component={ExistingUser} />
      <Route exact path="/find-user" component={FindUser} />
      <Route exact path="/user-management" component={Management} />
      <Route exact path="/user-payment" component={Payment} />
      <PvtRoute exact path="/login" component={LoginContainer} />
      <PvtRoute exact path="/forgot-password" component={ForgotPassword} />
      <Route exact path="/404" component={PageNotFound} />
      <Route exact path="/*" component={() => <Redirect to="/404" />} />
    </Switch>
  );
};

export default Router;
