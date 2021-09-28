import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUserParkings } from "../../actions/book";
import "./Booking.css";
const Booking = ({ getUserParkings, userParkings }) => {
  useEffect(() => {
    getUserParkings();
  }, []);

  return (
    <div>
      <h1 className="book-heading">My Bookings</h1>
      <div className="item-container">
        {userParkings &&
          userParkings.parkings.map((parking) => (
            <div key={parking._id} className="booking-container">
              <h3 style={{ alignSelf: "flex-start" }}>{parking.location}</h3>
              <p style={{ alignSelf: "flex-start" }}>
                vehicle: {parking.vehicle}
              </p>
              <p style={{ alignSelf: "flex-start" }}>
                vehicle-no: {parking.vehicleNo}
              </p>
              <p style={{ alignSelf: "flex-start" }}>
                arrival-time: {parking.arrivalTime}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  userParkings: state.book.userParkings,
});

export default connect(mapStateToProps, { getUserParkings })(Booking);
