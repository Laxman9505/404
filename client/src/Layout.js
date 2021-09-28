import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import React from "react";
import { Error } from "./components/Error/Error";
import { Feature } from "./components/Feature/Feature";
import Navbar from "./components/Navbar/Navbar";
import { Home } from "./components/Home/Home";
import Signup from "./components/Signup/Signup";
import Login from "./components/login/Login";
import Parking from "./components/our parking/Parking";
import Book from "./components/Book/Book";
import Booking from "./components/myBooking/Booking";
export default function Layout() {
  return (
    <Router>
      <Navbar />
      <Route path="/bookings" component={Booking} />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/" component={Feature} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/parking" component={Parking} />
        <Route path="/book" component={Book} />
        <Route path="*" component={Error} />
      </Switch>
    </Router>
  );
}
