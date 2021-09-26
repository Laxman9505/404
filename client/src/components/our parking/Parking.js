import React from "react";
import "./Parking.css";
import RoomIcon from "@material-ui/icons/Room";
import SearchIcon from "@material-ui/icons/Search";
import ParkingSpot from "../ParkingSpot";
import Map from "../Map/Map";

const Parking = () => {
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
              Baneshowr
            </p>
          </div>
          <ParkingSpot
            details={{
              name: "Baneshwor Parking",
              src: "https://images.unsplash.com/photo-1604063165585-e17e9c3c3f0b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2069&q=80",
              location: "New Baneshowr,kathmandu",
              distance: "0.5m away",
            }}
          />
          <ParkingSpot
            details={{
              name: "Shankhamul parking",
              src: "https://images.unsplash.com/photo-1616363088386-31c4a8414858?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
              location: "Shankhamul, kathmandu",
              distance: "1km away",
            }}
          />
          <ParkingSpot
            details={{
              name: "Babarmahal Parking",
              src: "https://images.unsplash.com/photo-1590674899484-d5640e854abe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1167&q=80",
              location: "Babarmahal, kathmandu",
              distance: "1.5km away",
            }}
          />
          <ParkingSpot
            details={{
              name: "mid Baneshowr Parking",
              src: "https://images.unsplash.com/photo-1590674899484-d5640e854abe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1167&q=80",
              location: "Babarmahal, kathmandu",
              distance: "1.5km away",
            }}
          />
        </div>
        <Map />
      </div>
    </>
  );
};

export default Parking;
