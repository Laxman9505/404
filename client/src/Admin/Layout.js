import React from "react";
import SideNav from "./Components/Navigation/SideNav";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MyParking from "./Pages/MyParking";
import NewParking from "./Pages/NewParking";
import classes from "./Layout.module.css";
import ParkingDetails from "./Pages/ParkingDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
export default function Layout() {
  return (
    <div className={classes.Layout}>
      <Router>
        <SideNav></SideNav>
        <Switch>
          <PrivateRoute
            path="/admin/new-parking"
            exact
            component={NewParking}
          />
          <PrivateRoute path="/admin/" exact component={MyParking} />
          <PrivateRoute
            path="/admin/all-parkings"
            exact
            component={MyParking}
          />
          <PrivateRoute
            path="/admin/parking-details"
            exact
            component={ParkingDetails}
          />
        </Switch>
      </Router>
    </div>
  );
}
