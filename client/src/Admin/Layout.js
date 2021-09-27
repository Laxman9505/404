import React from "react";
import SideNav from "./Components/Navigation/SideNav";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MyParking from "./Pages/MyParking";
import NewParking from "./Pages/NewParking";
import classes from "./Layout.module.css";
export default function Layout() {
  return (
    <div className={classes.Layout}>
      <Router>
        <SideNav></SideNav>
        <Switch>
          <Route path="/admin/all-parkings" exact component={MyParking} />
          <Route path="/admin/new-parking" exact component={NewParking} />
        </Switch>
      </Router>
    </div>
  );
}
