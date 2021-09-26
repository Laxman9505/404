import React, { useEffect } from "react";
import "./Feature.css";
import navigationImg from "../../Images/navigation.png";
import payImg from "../../Images/pay.png";
import carImg from "../../Images/car.png";
import Aos from "aos";
import "aos/dist/aos.css";
export const Feature = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <div className="feature-container" data-aos="fade-down">
        <img src={navigationImg} alt="navigation image" />
        <div className="content">
          <h2>
            <span className="discover">Discover</span>
            <span className="amazing">Amazing</span>
            <span className="places">Spaces</span>
          </h2>
          <div className="para-container">
            <p>Find parking anywhere for now or for later</p>
            <p>Compare prices and pick the places thats suits for you</p>
          </div>
        </div>
      </div>
      <div
        className="feature-container"
        style={{ gap: "0rem", marginTop: "0rem" }}
      >
        <div
          className="content"
          style={{ marginLeft: "2rem" }}
          data-aos="fade-down"
        >
          <h2>
            <span className="discover">Reserve</span>
            <span className="amazing">Prepay</span>
            <span className="places">& Save</span>
          </h2>
          <div className="para-container">
            <p>Book a space in just few clicks</p>
            <p>save upto 50% off standard rates</p>
          </div>
        </div>
        <img
          src={payImg}
          alt="navigation image"
          style={{ width: "20%" }}
          data-aos="fade-right"
        />
      </div>
      <div className="feature-container" style={{ marginTop: "0rem" }}>
        <img src={carImg} alt="navigation image" data-aos="fade-right" />
        <div className="content" data-aos="fade-down">
          <h2>
            <span className="discover">Drive</span>
            <span className="amazing">Arrive</span>
            <span className="places">& Park</span>
          </h2>
          <div className="para-container">
            <p>Enter easily with your mobile parking pass</p>
            <p>Compare prices and pick the places thats suits for you</p>
          </div>
        </div>
      </div>
    </>
  );
};
