import React, { useState } from "react";

import "./Book.css";

import overlayImage from "../../Images/book.jpg";

export default function Book() {
  const [userData, setUserData] = useState({
    name: "",
    regNo: "",
    phoneNum: "",
    destination: "",
    time: "",
  });

  return (
    <div className="whole-book">
      <div className="book-inner">
        <img src={overlayImage} alt="" className="overlay" />

        <div className="book-form">
          <h1>Fill the Form</h1>
          <form action="">
            <label htmlFor="Name">Name:</label>
            <input
              type="text"
              placeholder="Enter Your Name"
              required
              value={userData.name}
              onChange={(e) =>
                setUserData({ ...userData, name: e.target.value })
              }
            />

            <label htmlFor="Phone Number">Phone Number:</label>
            <input
              type="number"
              required
              placeholder="Enter your number"
              value={userData.phoneNum}
              onChange={(e) =>
                setUserData({ ...userData, phoneNum: e.target.value })
              }
            />
            <label htmlFor="Vehicle Registeration Number">
              Vehicle Registeration Number:
            </label>
            <input
              type="text"
              placeholder="Enter your Vehicle number"
              required
              value={userData.regNo}
              onChange={(e) =>
                setUserData({ ...userData, regNo: e.target.value })
              }
            />
            <label htmlFor="Time"> Arrival Time: </label>
            <input
              type="time"
              placeholder="Enter the time"
              required
              value={userData.time}
              onChange={(e) =>
                setUserData({ ...userData, time: e.target.value })
              }
            />

            <button type="submit">Book</button>
          </form>
        </div>
      </div>
    </div>
  );
}
