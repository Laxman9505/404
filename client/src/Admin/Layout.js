import React from "react";
import SideNav from "./Components/Navigation/SideNav";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MyParking from "./Pages/MyParking";
import NewParking from "./Pages/NewParking";
import classes from "./Layout.module.css";
import ParkingDetails from "./Pages/ParkingDetails";
export default function Layout() {
  return (
    <div className={classes.Layout}>
      <Router>
        <SideNav></SideNav>
        <Switch>
          <Route path="/admin/new-parking" exact component={NewParking} />
          <Route path="/admin/all-parkings" exact component={MyParking} />
          <Route
            path="/admin/parking-details"
            exact
            component={ParkingDetails}
          />
        </Switch>
      </Router>
    </div>
  );
}
