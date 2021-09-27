const initialState = {
  laoding: true,
  bookingDetails: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  return {
    ...state,
  };
}
