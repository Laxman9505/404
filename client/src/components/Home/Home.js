import React, { useEffect, useState, useRef } from "react";
import "./Home.css";
import { Feature } from "../Feature/Feature";
import { Objective } from "../objectives/Objective";
import { Quote } from "../Quotes/Quote";
import HomeImage from "../../Images/home.png";
import RoomIcon from "@material-ui/icons/Room";
import SearchIcon from "@material-ui/icons/Search";
import Footer from "../footer/Footer";
import axios from "axios";

export const Home = () => {
  const [searchValue, setSearchValue] = useState();
  const [foundPlaces, setFoundPlaces] = useState();
  const firstRender = useRef(true);
  useEffect(() => {
    if (!searchValue || searchValue == "") {
      setFoundPlaces(null);
      return;
    }
    const searchTimeout = setTimeout(async () => {
      console.log(searchValue);
      const response = await axios.get(`/api/parking/${searchValue}`, {});
      console.log(response);
      setFoundPlaces(response.data.success);
    }, 1000);
    return () => {
      clearTimeout(searchTimeout);
    };
  }, [searchValue]);
  return (
    <>
      <div className="image-container">
        <img src={HomeImage} alt="home-img" />
        <div className="overlay"></div>
      </div>
      <div className="container">
        <div className="home-content">
          <h1>Parking just got a lot simpler</h1>
          <p>Book the best spaces and save upto 50%</p>
          <div className="search-box-container-home">
            <input
              type="text"
              placeholder="Search Address,place or event"
              onChange={(e) => setSearchValue(e.target.value)}
            />
            {foundPlaces && (
              <div className="search-dropdown">
                <h1>Results</h1>
                {foundPlaces.map((place) => (
                  <div className="result">
                    <RoomIcon className="room-icon-dropdown" />
                    <h2 className="dropdown-head">{place.name}</h2>
                    <small className="dropdown-sub">{place.location}</small>
                  </div>
                ))}
              </div>
            )}
            <RoomIcon className="room-icon-home" />
            <div className="button">
              <p>Find parking</p>
              <SearchIcon />
            </div>
          </div>
          <div className="downloads">
            <img
              src="https://www.bestparking.com/images/app-badges/app-badge-android-bare@2x.png.afa9870c26165887fc930da755437123b5594082"
              alt="appstore"
              className="appstore"
            />
            <img
              src="https://www.bestparking.com/images/app-badges/app-badge-apple-bare@2x.png.afa9870c26165887fc930da755437123b5594082"
              alt="appstore"
              className="appstore"
            />
          </div>
        </div>
      </div>
      <Feature />
      <Objective />
      <Quote />
      <Footer />
    </>
  );
};
