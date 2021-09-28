const initialState = {
  laoding: true,
  bookingDetails: null,
};

export default function bookReducer(state = initialState, action) {
  return {
    ...state,
  };
}
