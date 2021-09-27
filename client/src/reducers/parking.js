import { GET_PARKING } from "../actions/types";
const initialState = {
  parkingDetails: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_PARKING:
      return { ...state, parkingDetails: payload };

    default:
      return state;
  }
}
