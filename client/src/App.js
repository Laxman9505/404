import "./global.css";
import { store } from "./store";
import { Provider } from "react-redux";

import { ToastContainer } from "react-toastify";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { useEffect } from "react";
import setAuthToken from "./setAuthToken";
import { loadUser } from "./actions/auth";
import LayoutAdmin from "./Admin/Layout";
import Layout from "./Layout";
function App() {
  if (localStorage.getItem("token")) {
    setAuthToken(localStorage.getItem("token"));
  }
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/admin/all-parkings" exact component={LayoutAdmin} />
            <Layout />
          </Switch>
        </Router>
        <ToastContainer />
      </Provider>
    </>
  );
}

export default App;
