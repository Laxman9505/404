import axios from "axios";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOAD_USER,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "./types";
import { alert } from "../components/alert/alert";
//load the user that is currently logged in

export const loadUser = () => async (dispatch) => {
  try {
    const response = await axios.get("/api/auth");
    dispatch({
      type: LOAD_USER,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

//register the user
export const register = (formData) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify(formData);
  try {
    const response = await axios.post("/api/users", body, config);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: response.data,
    });
    alert("Account has been created successfully!", true);
  } catch (error) {
    const errors = error.response.data.msg;
    errors.forEach((error) => alert(error.msg));
    dispatch({
      type: REGISTER_FAIL,
      payload: error.response.data.msg,
    });
  }
};

//login the user

export const login = (formData) => async (dispatch) => {
  const body = JSON.stringify(formData);
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const response = await axios.post("/api/auth", body, config);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    console.log(error.response);
    const errors = error.response.data.errors;
    errors.forEach((error) => alert(error.msg));
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};
//logut the user from the website

export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT });
};
