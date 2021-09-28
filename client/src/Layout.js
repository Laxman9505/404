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
import MyParking from "./Admin/Pages/MyParking";
import NewParking from "./Admin/Pages/NewParking";
import ParkingDetails from "./Admin/Pages/ParkingDetails";
export default function Layout() {
  const navbar = <Navbar />;

  return (
    <Router>
      {navbar}

      <Switch>
        <Route path="/bookings" component={Booking} />

        <Route exact path="/" component={Home} />
        <Route exact path="/" component={Feature} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/parking" component={Parking} />
        <Route path="/book" component={Book} />
        <Route path="*" component={Error} />
        <Route path="/admin/new-parking" exact component={NewParking} />
        <Route path="/admin/all-parkings" exact component={MyParking} />
        <Route path="/admin/parking-details" exact component={ParkingDetails} />
      </Switch>
    </Router>
  );
}
