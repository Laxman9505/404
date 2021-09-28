import { GET_USER_PARKINGS } from "../actions/types";

const initialState = {
  laoding: true,
  bookingDetails: null,
  userParkings: null,
};

export default function bookReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_USER_PARKINGS:
      return {
        ...state,
        userParkings: payload,
      };

    default:
      return {
        ...state,
      };
  }
}
