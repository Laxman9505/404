import React, { useEffect, useState } from "react";
import "./Parking.css";
import RoomIcon from "@material-ui/icons/Room";
import SearchIcon from "@material-ui/icons/Search";
import ParkingSpot from "../ParkingSpot";
import Map from "../Map/Map";
import { useLocation } from "react-router";
import axios from "axios";
import { getParkings } from "../../actions/parking";
import { connect } from "react-redux";

const Parking = ({ getParkings, parkingDetails }) => {
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  let query = useQuery();

  useEffect(() => {
    console.log(query.get("q"));
    getParkings(query.get("q"));
  }, [getParkings]);
  return (
    <>
      <div className="topbar">
        <div className="search-box-container">
          <input type="text" placeholder="Search Address,place or event" />
          <RoomIcon className="room-icon" />

          <SearchIcon className="search-icon" />
        </div>
        <div className="arrive-after arrive">
          <p>ARRIVE AFTER</p>
          <p>10 AM</p>
        </div>
        <div className="arrive-before arrive">
          <p>EXIT BEFORE</p>
          <p>5 PM</p>
        </div>
      </div>
      <div className="map-and-sidebox-container">
        <div className="sidebox">
          <div className="heading" style={{ marginBottom: "2rem" }}>
            <p className="paragraph" style={{ fontSize: "1.5rem" }}>
              Parking Near
            </p>
            <p className="paragraph" style={{ fontWeight: "bold" }}>
              {query.get("q")}
            </p>
          </div>
          {parkingDetails &&
            parkingDetails.map((space) => (
              <ParkingSpot
                details={{
                  id: space._id,
                  name: space.name,
                  src: "https://images.unsplash.com/photo-1604063165585-e17e9c3c3f0b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2069&q=80",
                  location: space.name,
                  carPrice: space.carPrice,
                  bikePrice: space.bikePrice,
                }}
              />
            ))}
        </div>
        <Map />
      </div>
    </>
  );
};
const mapStateToProps = (state) => ({
  parkingDetails: state.parking.parkingDetails,
});

export default connect(mapStateToProps, { getParkings })(Parking);
