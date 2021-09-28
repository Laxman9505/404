import axios from "axios";
<<<<<<< HEAD
import { BOOK_SUCCESS, BOOK_FAIL, GET_USER_PARKINGS } from "./types";
=======
import { BOOK_SUCCESS } from "./types";
>>>>>>> 95eb65efeab19e4eb29c4cf24fe016474a5b72b0
import { alert } from "../components/alert/alert";

export const book = (formData) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify(formData);
  try {
    const response = await axios.post("/api/book", body, config);

    dispatch({
      type: BOOK_SUCCESS,
      payload: response.data,
    });
    alert("You are successfully booked! ", true);
  } catch (error) {
    console.log(error.response.data);
    const errors = error.response.data.error;
    errors.forEach((error) => alert(error.msg));
  }
};

export const getUserParkings = () => async (dispatch) => {
  try {
    const response = await axios.get("/api/yourparkings");
    console.log(response);
    dispatch({
      type: GET_USER_PARKINGS,
      payload: response.data,
    });
  } catch (error) {
    console.log(error.message);
  }
};
