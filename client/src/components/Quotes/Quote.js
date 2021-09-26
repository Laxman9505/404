import React, { useEffect, useState } from "react";
import "./Quote.css";
import { data } from "../../data";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import Aos from "aos";
import "aos/dist/aos.css";

export const Quote = () => {
  const [ID, setID] = useState(1);
  const [DATA] = data.filter((item) => item.id == ID);

  const increaseHandler = (ID) => {
    if (ID == 4) {
      setID(1);
    } else {
      setID((prev) => prev + 1);
    }
  };
  const decreaseHandler = (ID) => {
    if (ID == 1) {
      setID(4);
    } else {
      setID((prev) => prev - 1);
    }
  };
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  /*  useEffect(() => {
    setInterval(() => {
      decreaseHandler(ID);
    }, 3000);
  }); */
  return (
    <div className="Quote-container" data-aos="fade-down">
      <div className="heading">
        <span>PEOPLE</span>
        <FavoriteIcon className="icon" />
        <span>404 PARKING</span>
      </div>
      <div className="quote">
        <div onClick={() => decreaseHandler(ID)}>
          <ArrowBackIosIcon className="left-icon" />
        </div>

        <p className="QUOTE">{DATA.quote}</p>
        <p className="NAME">{DATA.name}</p>
        <div onClick={() => increaseHandler(ID)}>
          <ArrowBackIosIcon className="right-icon" />
        </div>
      </div>
    </div>
  );
};
