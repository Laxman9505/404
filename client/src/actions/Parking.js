import { GET_PARKING } from "./types";
import axios from "axios";
export const getParkings = (query) => async (dispatch) => {
  try {
    console.log("this function is working");
    const response = await axios.get(`/api/parking/${query}`);

    dispatch({
      type: GET_PARKING,
      payload: response.data,
    });
  } catch (error) {
    console.log(error.message);
  }
};
