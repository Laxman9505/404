import "./global.css";
import { store } from "./store";
import { Provider } from "react-redux";
import Navbar from "./components/Navbar/Navbar";
import { Home } from "./components/Home/Home";
import Signup from "./components/Signup/Signup";
import Login from "./components/login/Login";
import { Feature } from "./components/Feature/Feature";
import { Error } from "./components/Error/Error";
import { ToastContainer } from "react-toastify";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Parking from "./components/our parking/Parking";
import Book from "./components/Book/Book";
import { useEffect } from "react";
import setAuthToken from "./setAuthToken";
import { loadUser } from "./actions/auth";
import Dashboard from "./Admin/Pages/Dashboard";
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
          <Navbar />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/" component={Feature} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/parking" component={Parking} />
            <Route path="/book" component={Book} />
            <Route path="/admin/dashboard" component={Dashboard} />
            <Route path="*" component={Error} />
          </Switch>
        </Router>
        <ToastContainer />
      </Provider>
    </>
  );
}

export default App;
