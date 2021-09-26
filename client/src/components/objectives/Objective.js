import React, { useEffect } from "react";
import LocalParkingIcon from "@material-ui/icons/LocalParking";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import "./Objective.css";
import Aos from "aos";
import "aos/dist/aos.css";
export const Objective = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <div className="objective-container">
        <div className="item" data-aos="fade-down">
          <LocalParkingIcon className="icon" />
          <div className="content">
            <h3>Hassle-Free Booking</h3>
            <p>Reserve a space with a few taps and skip the parking hunt.</p>
          </div>
        </div>
        <div className="item" data-aos="fade-down">
          <AttachMoneyIcon className="icon" />
          <div className="content">
            <h3>No-Surprise Pricing</h3>
            <p>
              Compare prices, see your total cost up-front, and save up to 50%.
            </p>
          </div>
        </div>
        <div className="item" data-aos="fade-down">
          <DriveEtaIcon className="icon" />
          <div className="content">
            <h3>Lightning-Fast Parking</h3>
            <p>Park your car in seconds and go do your thing.</p>
          </div>
        </div>
      </div>
    </>
  );
};
