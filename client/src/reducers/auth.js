import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOAD_USER,
  LOGOUT,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from "../actions/types";

const initialState = {
  loading: true,
  isAuthenticated: false,
  token: localStorage.getItem("token"),
  user: null,
  error: null,
};

export default function authReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem("token", payload.token);
      return {
        ...state,

        loading: false,
        isAuthenticated: true,
      };
    case LOAD_USER:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: payload,
      };
    case REGISTER_FAIL:
    case LOGOUT:
    case LOGIN_FAIL:
      localStorage.removeItem("token");
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        error: payload,
      };
    default:
      return state;
  }
}
