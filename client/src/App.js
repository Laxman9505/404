import "./global.css";
import { store } from "./store";
import { Provider } from "react-redux";

import { ToastContainer } from "react-toastify";

import { useLocation } from "react-router-dom";

import { useEffect } from "react";
import setAuthToken from "./setAuthToken";
import { loadUser } from "./actions/auth";
import LayoutAdmin from "./Admin/Layout";
import Layout from "./Layout";

function App() {
  const location = useLocation();
  if (localStorage.getItem("token")) {
    setAuthToken(localStorage.getItem("token"));
  }
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  let layout = <Layout />;
  if (location.pathname.split("/")[1] === "admin") {
    layout = <LayoutAdmin />;
  } else {
    layout = <Layout />;
  }
  return (
    <>
      <Provider store={store}>
        {layout}
        <ToastContainer />
      </Provider>
    </>
  );
}

export default App;
